import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
    // console.log(movies);
    
  return movies&&(
   <div className='bg-transparent'>
                <h1 className='text-white text-3xl font-bold animate-pulse'>{title}</h1>

        <div className='flex overflow-x-scroll p-2 scr'>
            
            {movies?.map((films)=>{
                return(
                    <MovieCard key={films.id}  path={films.poster_path} />
    
                )
            })}
            </div>
   </div>
  )
}

export default MovieList