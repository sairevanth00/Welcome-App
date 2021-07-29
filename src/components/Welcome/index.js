// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isLoggedIn: false}

  onClickedBtn = () => {
    this.setState(prevState => ({isLoggedIn: !prevState.isLoggedIn}))
  }

  getTxt = () => {
    const {isLoggedIn} = this.state
    return isLoggedIn ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const {text} = this.getTxt()

    return (
      <div className="container">
        <h1>Welcome</h1>
        <p>Thank you! Happy Learning</p>
        <button type="button" onClick={this.onClickedBtn}>
          {text}
        </button>
      </div>
    )
  }
}

export default Welcome
