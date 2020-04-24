import React from 'react';


export default class GifList extends React.Component {

    renderGifs = () => {
        // console.log(this.props)
        return this.props.gifData.map(gif => 
       <img src={gif.images.original.url}/>)
    }

    render(){
        return (
            <ul>
                {this.renderGifs()}
            </ul>
        )
    }
}