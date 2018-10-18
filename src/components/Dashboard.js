import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  
  handleClick(param) {
    
  }

  render() {
    const fullName = `${this.props.user.first} ${this.props.user.last}`
    const email = this.props.user.email
    const userName = this.props.user.username
    const display = ''

    return (
      <div>
        <div className="display">{display}</div>
        <div className="button-container">
          <div className="dashboard">
            <div className="button-holder" onClick={this.handleClick('user')}>USER</div>
            <div className="button-holder" onClick={this.handleClick('contact')}>CONTACT</div>
            <div className="button-holder" onClick={this.handleClick('personal')}>PERSONAL</div>
            <div className="button-holder" onClick={this.handleClick('account')}>ACCOUNT DETAILS</div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Dashboard)