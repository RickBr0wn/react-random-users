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
    console.log(this.props)
    const fullName = `${this.props.user.title} ${this.props.user.first} ${this.props.user.last}`
    const email = this.props.user.email
    const userName = this.props.user.username
    const display = ''

    return (
      <div>
        <div className="display">{display}</div>
        <div className="button-container">
          <div className="dashboard">
            <div className="button-holder" onClick={this.handleClick('user')}>U</div>
            <div className="button-holder" onClick={this.handleClick('contact')}>C</div>
            <div className="button-holder" onClick={this.handleClick('personal')}>P</div>
            <div className="button-holder" onClick={this.handleClick('account')}>A</div>
          </div>
        </div>
            <div className="data">
              <div className="title-text grey-text">{fullName}</div>
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