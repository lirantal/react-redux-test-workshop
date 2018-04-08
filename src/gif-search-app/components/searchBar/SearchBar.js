import React, {Component} from 'react'

class SearchBar extends Component {


  onInputChange = (term) => {
    if (this.props.onTermChange) {
      this.props.onTermChange(term)
    }
  }


  render() {
    return (
      <div className="search">
        <input placeholder="Enter gif name to search..."
               onChange={event => this.onInputChange(event.target.value)}/>
      </div>
    )
  }
}


export default SearchBar




