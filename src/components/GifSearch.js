import React, { Component } from "react"

export default class GifSearch extends Component {

    render() {
        return <form onSubmit={(event) => this.props.getGifs(event)}>
            <input onChange={this.props.setSearch}></input>
            <br />
            <button type="submit">Search Gifs</button>
        </form>
    }
}