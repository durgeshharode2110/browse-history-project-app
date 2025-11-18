import {Component} from 'react'

import BrowserHistory from './components/BrowserHistory'

import './App.css'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class App extends Component {
  state = {
    userInput: '',
    historyList: initialHistoryList,
    allHistoryDeleted: false,
  }

  deleteHistory = id => {
    const {historyList} = this.state
    const filteredHistory = historyList.filter(
      eachHistory => eachHistory.id !== id,
    )
    if (filteredHistory.length === 0) {
      this.setState({historyList: filteredHistory, allHistoryDeleted: true})
    } else {
      this.setState({historyList: filteredHistory})
    }
  }

  showHistoryFromUser = event => {
    console.log(event.target.value)
    this.setState({userInput: event.target.value})
  }

  render() {
    const {userInput} = this.state
    const {historyList} = this.state
    let {allHistoryDeleted} = this.state
    const newHistoryList = historyList.filter(eachHistory =>
      eachHistory.title.toLowerCase().includes(userInput.toLowerCase()),
    )
    if (newHistoryList.length === 0) {
      allHistoryDeleted = true
    }
    return (
      <div className="history-bg-container">
        <div className="top-search-section">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            className="history-logo"
            alt="app logo"
          />
          <div className="search-icon-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png "
              className="search-icon"
              alt="search"
            />
            <input
              className="search-input"
              placeholder="Search history"
              type="search"
              onChange={this.showHistoryFromUser}
            />
          </div>
        </div>
        <div className="history-card-section">
          {!allHistoryDeleted && (
            <ul className="browser-history-card">
              {historyList.map(eachHistory =>
                eachHistory.title
                  .toLowerCase()
                  .includes(userInput.toLowerCase()) ? (
                  <BrowserHistory
                    eachHistory={eachHistory}
                    key={eachHistory.id}
                    deleteHistory={this.deleteHistory}
                  />
                ) : null,
              )}
            </ul>
          )}
          {allHistoryDeleted && (
            <div className="no-content-show">
              <p>There is no history to show</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default App
