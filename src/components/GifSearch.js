import React from 'react';


export default class GifSearch extends React.Component {



    render(){
       return(
        <div>
            
            <form onSubmit={this.props.handleSubmit}> 
                <input type="text" name="gif" onChange={this.props.onChange}/> 
                <button>FIND GIFS</button>
            </form>
        </div>
       ) 
    }
}