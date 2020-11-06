import pJSON from '../package.json'
import React from 'react'
import ReactDOM from 'react-dom'
import algoliasearch from 'algoliasearch'
import firebase from '@firebase/app'
import '@firebase/firestore'
import { createBrowserHistory } from 'history'

import { Provider } from 'react-redux'
import reduxStore from './redux'

import App from './App'
import * as serviceWorker from './serviceWorker'

console.log(`${process.env.REACT_APP_APP} ${pJSON.version} (${process.env.REACT_APP_ENV})`)

const fireConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASEURL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGESENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID
}

const algolia = algoliasearch(
  process.env.REACT_APP_ALGOLIA_APPID, 
  process.env.REACT_APP_ALGOLIA_SEARCHKEY,
)
export const getAlgolia = () => { return algolia }

const fBase = firebase.initializeApp(fireConfig)
export const getFBase = () => { return fBase }

const getHistory = () => { return createBrowserHistory() }
export { getHistory }

const store = reduxStore()
export const getStore = () => { return store }

const fStore = firebase.firestore()
const getFStore = () => { return fStore }
export { getFStore }

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('pwa')
)

serviceWorker.register()
