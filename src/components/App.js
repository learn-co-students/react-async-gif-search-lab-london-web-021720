import React, { Component } from 'react'

import NavBar from './NavBar'
import GifList from "./GifList"
import GifSearch from "./GifSearch"
import { render } from 'react-dom'


// the App component should render out the GifListContainer component 

const BASE_URL_START = "https://api.giphy.com/v1/gifs/search?q=" // put search inbetween start and end
const BASE_URL_END = "&api_key=dc6zaTOxFJmzC&rating=g"

export default class App extends Component {

  state = {
    search: "",
    gifs: []
  }

  getGifs = (event) => {
    event.preventDefault()
    fetch(`${BASE_URL_START}${this.state.search}${BASE_URL_END}`)
    .then(res => res.json())
    .then(searchGifs => this.setState(previousState => {
      return {
        ...previousState,
        gifs: searchGifs.data
      }
    }))
  }

  setSearch = ({target: {value}}) => {
    this.setState(previousState => {
      return {
        ...previousState,
        search: value
      }
    })
  }

  render(){
    return <div>
            < NavBar color='black' title="Giphy Search" />
            < GifSearch setSearch={this.setSearch} getGifs={this.getGifs} />
            < GifList gifs={this.state.gifs} />
          </div>
  }
}
