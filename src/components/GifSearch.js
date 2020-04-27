import React, {Component} from 'react';

class GifSearch extends Component{
    state = {
        searchValue: ""
    }

    handleSearch = (event) => {
        this.setState({
            searchValue: event.target.value
        })
    }

    render() {
        return (
            <div>
            <form>
                <input type="text" name="searchValue" onChange={this.handleSearch}/>
                <input type="submit" />
            </form>
            </div>
        )
    }
}

export default GifSearch