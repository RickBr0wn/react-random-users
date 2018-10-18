import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <NavBar />
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App