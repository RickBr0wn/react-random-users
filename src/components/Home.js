import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateData } from '../actions/dataActions'
import { dummyUser } from '../DummyUser'
import dataReducer from '../reducers/rootReducer'
import Header from './Header'
import ProfilePicture from './ProfilePicture'
import Name from './Name'

const log = i => console.log(i)
const dummy = dummyUser()

export class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: dummy
    }
  }
  
  onUpdateData = (e) => {
    this.props.onUpdateData(dummy)
    this.setState({
      data: dummy
    })
  }
  
  
  componentDidMount = () => {
    this.onUpdateData()
  }
  
  render() {
    const { data } = this.props
    const dataKeys = Object.keys(this.state.data).map(i => {
      return <p>{i}</p>
    })

    const user = this.state.data.results[0]
    log(user.name.first)
    return (
      <div className="center">
        <Header />
        <div className="container">
          <ProfilePicture image={user.picture.large} />
          <Name name={user.name} />
        </div>
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