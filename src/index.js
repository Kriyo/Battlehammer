import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import { IdentityContextProvider } from 'react-netlify-identity'
import IdentityModal from 'react-netlify-identity-widget'
import { ThemeProvider } from 'styled-components'
import { darkTheme, defaultTheme, GlobalStyle, PrivateRoute } from './utils'
import { Dashboard, Home, Profile, ObjectivesList } from './views'
import 'react-netlify-identity-widget/styles.css'
import '@reach/tabs/styles.css'

const App = () => {
  const [isVisible, setVisibility] = useState(false)
  const [useDarkTheme, setUseDarkTheme] = useState(false)
  const modeTypeSwitchLabel = useDarkTheme ? 'Light Mode' : 'Dark Mode'
  const url = 'https://battlehammer.eu'

  const showModal = () => setVisibility(true)

  const buildDashboardRoute = () => (
    <Route
      exact
      path="/dashboard"
      component={(props) => (
        <Dashboard
          {...props}
          darkMode={useDarkTheme}
          modeType={modeTypeSwitchLabel}
          showModal={showModal}
          swapTheme={() => setUseDarkTheme(!useDarkTheme)}
        />
      )}
    />
  )

  const buildProfileRoute = () => {
    return (
      <Route
        exact
        path="/profile/:id"
        component={(props) => (
          <Profile
            {...props}
            darkMode={useDarkTheme}
            modeType={modeTypeSwitchLabel}
            showModal={showModal}
            swapTheme={() => setUseDarkTheme(!useDarkTheme)}
          />
        )}
      />
    )
  }

  return (
    <IdentityContextProvider url={url}>
      <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <Redirect to="/home" showModal={showModal} {...props} />
              )}
            />
            <Route
              exact
              path="/home"
              component={(props) => (
                <Home
                  {...props}
                  darkMode={useDarkTheme}
                  modeType={modeTypeSwitchLabel}
                  showModal={showModal}
                  swapTheme={() => setUseDarkTheme(!useDarkTheme)}
                />
              )}
            />
            <PrivateRoute path="/dashboard" component={buildDashboardRoute} />
            <PrivateRoute path="/profile" component={buildProfileRoute} />
            <Route
              exact
              path="/dashboard"
              component={(props) => (
                <Dashboard
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
                  showModal={showModal}
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
