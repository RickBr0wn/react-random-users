import React, { Component } from 'react'
import { connect } from 'react-redux'

class UserName extends Component {
  render() {
    console.log(this.props.data)
    const results = this.props.data
    console.log(results.results)
    return (
      <div>
       
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    data: state.data
  }
}

export default connect(mapStateToProps)(UserName)