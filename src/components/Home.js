import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateData } from '../actions/dataActions'
import { dummyUser } from '../DummyUser'
import ProfilePicture from './ProfilePicture'

export class Home extends Component {
  onUpdateData = () => {
    this.props.onUpdateData(dummyUser())
  }

  componentDidMount = () => {
    this.onUpdateData()
  }

  render() {
    return (
      <div className="container center">
        <h1>A Random User</h1>
        <ProfilePicture />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    data: state.data
  }
}

const mapActionsToProps = {
  onUpdateData: updateData
}

export default connect(mapStateToProps, mapActionsToProps)(Home)