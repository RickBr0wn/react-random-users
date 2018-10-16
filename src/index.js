import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { rootReducer } from './reducers/rootReducer'
import thunk from 'redux-thunk'

const initalState  = {
  user: {
    title: '',
    first: '',
    last: '',
    picture: '',
    email: ''
  }
}

const reduxDevToolsExtension = window.devToolsExtension && window.devToolsExtension()

const allStoreMiddleware = compose(applyMiddleware(thunk), reduxDevToolsExtension)

const store = createStore(rootReducer, initalState, allStoreMiddleware)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()