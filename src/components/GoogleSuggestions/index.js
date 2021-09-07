import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  updateQueryList = event => {
    this.setState({searchInput: event.target.value})
  }

  finalResult = text => {
    this.setState({searchInput: text})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const searchResults = suggestionsList.filter(listItems =>
      listItems.suggestion.toLowerCase().includes(searchInput),
    )

    return (
      <div className="pg-bg">
        <img
          className="google-img"
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
        />
        <div className="search-list-container">
          <div className="search-container">
            <img
              className="search-icon"
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
            />
            <input
              className="inputBox"
              type="search"
              placeholder="Search Google"
              onChange={this.updateQueryList}
              value={searchInput}
            />
          </div>

          <ul>
            {searchResults.map(listItems => (
              <SuggestionItem
                queryText={listItems}
                key={listItems.id}
                finalResult={this.finalResult}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
