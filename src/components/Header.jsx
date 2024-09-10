import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LOGO_URL, SUPPORTED_LANG } from '../utils/constants';
import { addUser, removeUser } from '../utils/userSlice';
import { showGptSearch } from '../utils/gptSlice';
import { changeLanguage } from '../utils/languageSlice';

const Header = () => {
const navigate=useNavigate()
const dispatch=useDispatch()
const user=useSelector((store)=>(store.user))
const gptStatus=useSelector(store=>store.gpt.gptMode)

  const handleSignout=()=>{
    signOut(auth).then(() => {
    navigate('/')    })
    .catch((error) => {
      // An error happened.
      navigate('/error')
    });
  }

  const handleGptSearch=()=>{
    dispatch(showGptSearch())
  }

  const handleLanguage=(e)=>{
    const value=e.target.value
    // console.log(value);
    dispatch(changeLanguage(value))
    
  }

  useEffect(()=>{
   const unsubscribe= onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          const {uid,email,displayName,photoURL} = user;
          dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
          navigate('/browser')
        } else {
          // User is signed out
          dispatch(removeUser())
          navigate('/')
        }
      });

      return ()=>unsubscribe()
          
  },[])

  return (
    <div className='absolute w-full  bg-gradient-to-b from-black z-50 flex justify-between'>
        <img className='w-44 mx-28 my-4' src={LOGO_URL} alt="Logo" />
        
       {user &&( 
        <div className='mt-10 flex gap-4'>
          
         {gptStatus &&(
          <select className='h-10 rounded'onChange={handleLanguage}>
            {SUPPORTED_LANG.map((language)=>(
              <option key={language.identifier} value={language.identifier} >{language.name} </option>
            ))}
          </select>
         )}
          
                  <button className={`text-white px-2 mb-6 rounded ${gptStatus? 'bg-green-800':'bg-red-700'}`} onClick={handleGptSearch}>{gptStatus?('Home'):('GPT Mode')}</button>

          <img className='h-10' src={user?.photoURL} alt="user-img" />
          <button className='bg-red-600 h-5 mr-7 ' onClick={handleSignout}>🔓</button>
        </div>)}
    </div>
    
  )
}

export default Header