import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainor from './MainContainor'
import SecondaryContainer from './SecondaryContainer'

const Browser = () => {
  useNowPlayingMovies()
  return (
    <div>
      <Header/>
      <MainContainor/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browser