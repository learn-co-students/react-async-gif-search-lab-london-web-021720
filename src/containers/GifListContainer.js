import React, { Component } from 'react';
import GifList from '../components/GifList.js'

class GifListContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            gifs: []

        }
    }

    handleFetch = (stuff) => {
        this.setState({
            gifs: [stuff.data[0], stuff.data[1], stuff.data[2]]
        })
    }

    componentDidMount(){
        fetch(this.props.api)
        .then(response => response.json())
        .then(gifs => this.handleFetch(gifs))
    }

    handleSubmit = (event) => {
        event.persist()
        return null
    }

    render(){
        return (
            <GifList threeGifs={this.state.gifs} />
        )
    }

}

export default GifListContainer