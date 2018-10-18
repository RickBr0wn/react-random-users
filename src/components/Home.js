import React, { Component } from 'react'
import Header from './Header'
import Dashboard from './Dashboard'
import { connect } from 'react-redux'
import { fetchAPI } from '../actions/userActions'

export class Home extends Component {
  componentDidMount() {
    this.props.onFetchAPI()
  }

  render() {
    const picture = this.props.user.picture
    return (
      <div className="center heading">
        <Header />
        <div className="dividing-line"></div>
        <div className="container">
          <img src={picture} className="circle profile-picture" alt="A Random Face" />
          <Dashboard />
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