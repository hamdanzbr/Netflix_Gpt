import React from 'react'
import useMovieTrailer from '../hooks/useMovieTrailer';
import { useSelector } from 'react-redux';

const VideoBackground = ({movie_id}) => {
    // console.log(movie_id);
    const trailor=useSelector(store=>store.movies.trailerPlaying)
    useMovieTrailer(movie_id)
    
         
    
  return (
    <div className=' w-screen'>
        <iframe className='w-screen  aspect-video'  src={"https://www.youtube.com/embed/"+trailor?.key+"?autoplay=1&mute=1"}title="Borderlands (2024) Official Trailer - Cate Blanchett, Kevin Hart, Jack Black" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
    </div>
  )
}

export default VideoBackground