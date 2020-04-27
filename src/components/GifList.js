import React, {Component} from 'react';

class GifList extends Component{


    renderLis = (gifData) => {
        return (
            <li>
                <img src={gifData.images.original.url} />
            </li>
        )
    }

    render() {
        return (
            <ul>
                { this.props.threeGifs.map(gif => this.renderLis(gif)) }
            </ul>
        )
    }
}

export default GifList