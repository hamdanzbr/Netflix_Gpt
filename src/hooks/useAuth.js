import { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";
import { PHOTO } from "../utils/constants";

const useAuth = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const signUp = async (name, email, password, navigate) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      await updateProfile(user, {
        displayName: name,
        photoURL: PHOTO
      });
      
      const { uid, email: userEmail, displayName, photoURL } = auth.currentUser;
      dispatch(addUser({ uid, email: userEmail, displayName, photoURL }));
      navigate('/browser');
      
    } catch (error) {
      setErrorMessage(`${error.code} - ${error.message}`);
    }
  };

  const signIn = async (email, password, navigate) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      navigate('/browser');
    } catch (error) {
      setErrorMessage(`${error.code} - ${error.message}`);
    }
  };

  return { signUp, signIn, errorMessage };
};

export default useAuth;
