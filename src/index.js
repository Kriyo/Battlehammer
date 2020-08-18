/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import {
  IdentityContextProvider,
  useIdentityContext,
} from 'react-netlify-identity'
import IdentityModal from 'react-netlify-identity-widget'

import { ThemeProvider } from 'styled-components'
import { darkTheme, defaultTheme, GlobalStyle } from './utils'
import { Dashboard, Home, RouteLogin, ObjectivesList } from './views'
import 'react-netlify-identity-widget/styles.css'

const storedKeys = ['Player 1 state', 'Player 2 state']

const checkForExistingGame = () =>
  storedKeys.some((key) => JSON.parse(localStorage.getItem(key)))

const App = () => {
  const existingGame = checkForExistingGame()
  const [user, setUser] = useState(null)
  const [isVisible, setVisibility] = useState(false)
  const [useDarkTheme, setUseDarkTheme] = useState(false)
  const modeTypeSwitchLabel = useDarkTheme ? 'Light Mode' : 'Dark Mode'
  const url = 'https://battlehammer.eu'

  const showModal = () => setVisibility(true)

  // if (identity && identity.isLoggedIn) {
  //   console.log('::> user is logged in')
  //   return <Redirect to="/dashboard" />
  // }
  // useEffect =({ location }) => {
  //   if(location.pathname.match(/^\/dashboard\/?/)) {
  //     Redirect...
  //   }
  // }

  return (
    <IdentityContextProvider url={url}>
      <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => {
                return user ? (
                  <Redirect to="/home" {...props} />
                ) : (
                  <Redirect to="/login" />
                )
              }}
            />
            <Route
              exact
              path="/home"
              component={(props) => (
                <Home
                  {...props}
                  darkMode={useDarkTheme}
                  modeType={modeTypeSwitchLabel}
                  swapTheme={() => setUseDarkTheme(!useDarkTheme)}
                />
              )}
            />
            <Route
              exact
              path="/dashboard"
              component={(props) => (
                <Dashboard
                  {...props}
                  darkMode={useDarkTheme}
                  modeType={modeTypeSwitchLabel}
                  swapTheme={() => setUseDarkTheme(!useDarkTheme)}
                />
              )}
            />
            <Route
              exact
              path="/login"
              component={(props) => (
                <RouteLogin
                  {...props}
                  darkMode={useDarkTheme}
                  modeType={modeTypeSwitchLabel}
                  showModal={showModal}
                  swapTheme={() => setUseDarkTheme(!useDarkTheme)}
                />
              )}
            />
            <Route
              exact
              path="/objectives"
              component={(props) => (
                <ObjectivesList
                  {...props}
                  darkMode={useDarkTheme}
                  modeType={modeTypeSwitchLabel}
                  swapTheme={() => setUseDarkTheme(!useDarkTheme)}
                />
              )}
            />
          </Switch>
        </Router>
        <IdentityModal
          showDialog={isVisible}
          onCloseDialog={() => setVisibility(false)}
        />
        <GlobalStyle />
      </ThemeProvider>
    </IdentityContextProvider>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))

{
  /* <Route
              exact
              path="/"
              render={(props) => {
                return existingGame ? (
                  <Redirect to="/dashboard" {...props} />
                ) : (
                  <Redirect to="/home" />
                )
              }}
            /> */
}
