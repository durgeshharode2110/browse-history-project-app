import './index.css'

// Replace your code here
const BrowserHistory = props => {
  const {eachHistory, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title} = eachHistory
  const onDelete = () => {
    deleteHistory(id)
  }
  return (
    <li className="browser-history-element">
      <div className="browser-history">
        <p className="time">{timeAccessed}</p>
        <div className="logo-container">
          <img src={logoUrl} alt="domain logo" className="logo-size" />
        </div>
        <p className="title">{title}</p>
        <p className="logo-url" key="domainUrl">
          {logoUrl}
        </p>
      </div>
      <div className="delete-icon-container">
        <button
          type="button"
          className="delete-btn"
          data-testid="delete"
          onClick={onDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            className="delete-img"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default BrowserHistory
