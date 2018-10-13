import React, { Component } from 'react'
import { connect } from 'react-redux'

const log = i => console.log(i)

class ProfilePicture extends Component {
  state = {
    data: this.props.data
  }
  
  render() {  
    const url = this.props.image
  
    return (
      <div className="picture-background">
        <img className="circle profile-picture" src={url} alt="A face" />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    data: state.data
  }
}

export default connect(mapStateToProps)(ProfilePicture)