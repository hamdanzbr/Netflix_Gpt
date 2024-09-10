import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainor from './MainContainor'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovies'
import useTopRated from '../hooks/useTopRated'
import useUpcoming from '../hooks/useUpcoming'
import { useSelector } from 'react-redux'
import GptSearch from './GptSearch'

const Browser = () => {
  const gptStatus=useSelector(store=>store.gpt.gptMode)
  useNowPlayingMovies()
  usePopularMovies()
  useTopRated()
  useUpcoming()
  return (
    <div>
      <Header/>
      {gptStatus?(<GptSearch/>):(
        <>
        <MainContainor/>
        <SecondaryContainer  />
        </>
      ) }
      
    </div>
  )
}
 
export default Browser