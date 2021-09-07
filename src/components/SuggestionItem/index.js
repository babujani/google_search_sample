import './index.css'

const SuggestionItem = props => {
  const {queryText, finalResult} = props
  const {suggestion} = queryText

  const updateQueryText = () => {
    finalResult(suggestion)
  }

  return (
    <li>
      <div className="listItem-container">
        <p>{suggestion}</p>
        <button type="button" onClick={updateQueryText}>
          <img
            className="arrow-icon"
            alt="arrow-img"
            src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          />
        </button>
      </div>
    </li>
  )
}
export default SuggestionItem
