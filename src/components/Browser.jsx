import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainor from './MainContainor'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovies'
import useTopRated from '../hooks/useTopRated'
import useUpcoming from '../hooks/useUpcoming'

const Browser = () => {
  useNowPlayingMovies()
  usePopularMovies()
  useTopRated()
  useUpcoming()
  return (
    <div>
      <Header/>
      <MainContainor/>
      <SecondaryContainer  />
    </div>
  )
}
 
export default Browser