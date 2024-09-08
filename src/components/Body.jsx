import React, { useEffect } from 'react'
import Login from './Login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Browser from './Browser'
import { useDispatch } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { addUser, removeUser } from '../utils/userSlice'

const Body = () => {
    const dispatch=useDispatch()

    const appRouter=createBrowserRouter([
        {
            path:'/',
            element:<Login/>
        },
        {
            path:'/browser',
            element:<Browser/>
        },
    ])

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              const {uid,email,displayName,photoURL} = user;
              dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
              // ...
            } else {
              // User is signed out
              dispatch(removeUser())
            }
          });
              
    },[])
  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body