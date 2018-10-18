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
    const user = this.props.user
    console.log(user.first)
    const fullName = `${user.title} ${user.first} ${user.last}`
    const display = fullName

    return (
      <div>
        <div className="display"></div>
        <div className="button-container">
          <div className="dashboard">
            <div className="button-holder" onClick={this.handleClick('user')}>U</div>
            <div className="button-holder" onClick={this.handleClick('contact')}>C</div>
            <div className="button-holder" onClick={this.handleClick('personal')}>P</div>
            <div className="button-holder" onClick={this.handleClick('account')}>A</div>
          </div>
        </div>
            <div className="data">
              <div className="title-text grey-text">{display}</div>
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