import React from 'react'

const VideoTitle = ({title,overview}) => {
    // console.log(title);
    // console.log(overview);
    
    
  return (
    <div className='pt-[20%] px-8 absolute bg-gradient-to-r from-black w-screen aspect-video'>
       <h1 className='font-bold text-6xl text-white'>{title} </h1> 
       <p className='text-lg text-white w-1/4 my-4'>{overview}</p>
       <div>
        <button className=' bg-white text-black font-bold text-lg p-2 rounded hover:bg-opacity-40'>▶️Play Button</button>
        <button className='bg-gray-400 font-bold text-lg m-2 my-4 p-2 bg-opacity-40 rounded hover:bg-opacity-80'>ℹ️More Info</button>
       </div>
    </div>
  )
}

export default VideoTitle