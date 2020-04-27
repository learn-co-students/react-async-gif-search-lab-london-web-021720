import React from 'react'
import GifListContainer from '../containers/GifListContainer.js'

import NavBar from './NavBar'
import GifSearch from './GifSearch.js'

const API = "https://api.giphy.com/v1/gifs/search?q=tennis&api_key=dc6zaTOxFJmzC&rating=g"

// the App component should render out the GifListContainer component 

const App = () => {
  return (
    <div>
        < NavBar color='black' title="Giphy Search" />
        <GifListContainer api={API} />
        <GifSearch />
    </div>
  )
}

export default App
