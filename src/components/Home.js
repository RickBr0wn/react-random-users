import React, { Component } from 'react'
import Header from './Header'
import { connect } from 'react-redux'
import { fetchAPI } from '../actions/userActions'

export class Home extends Component {
  componentDidMount() {
    console.log(this.props)
    this.props.onFetchAPI()
  }

  render() {
    console.log(this.props);
    const fullName = `${this.props.user.first} ${this.props.user.last}`
    const email = this.props.user.email
    const picture = this.props.user.picture
    return (
      <div className="center">
        <Header />
        <div className="dividing-line"></div>
        <div className="container">
          <img src={picture} className="circle profile-picture" />
          <p>{fullName}</p>
          <p>{email}</p>
          <p>{email}</p>
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

const mapActionsToProps = {
  onFetchAPI: fetchAPI
}

export default connect(mapStateToProps, mapActionsToProps)(Home)