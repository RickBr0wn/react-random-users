import React, { Component } from 'react'
import { connect } from 'react-redux'

class ProfilePicture extends Component {
  state = {
    data: this.props.data
  }
  
  render() {  
    console.log(this.state)
  
    return (
      <div>
        <img src={""} alt="A face" />
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