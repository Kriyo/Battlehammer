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
import {
  darkTheme,
  defaultTheme,
  GlobalStyle,
  PrivateRoute,
  useLocallyPersistedReducer,
} from './utils'
import {
  Dashboard,
  Home,
  Missions,
  Profile,
  ObjectivesList,
  Scoreboard,
} from './views'
import 'react-netlify-identity-widget/styles.css'
import '@reach/tabs/styles.css'

const defaultState = {
  useDarkTheme: false,
}

const App = () => {
  const [isVisible, setVisibility] = useState(false)
  const [state, setUseDarkTheme] = useLocallyPersistedReducer(
    defaultState,
    `useDarkTheme`
  )
  const modeTypeSwitchLabel = state.useDarkTheme ? 'Light Mode' : 'Dark Mode'
  const url = 'https://battlehammer.eu'

  const handleChangeTheme = (e) => {
    setUseDarkTheme({ useDarkTheme: e })
  }

  const showModal = () => setVisibility(true)

  const buildDashboardRoute = () => (
    <Route
      exact
      path="/dashboard"
      component={(props) => (
        <Dashboard
          {...props}
          darkMode={state.useDarkTheme}
          modeType={modeTypeSwitchLabel}
          showModal={showModal}
          swapTheme={() => handleChangeTheme(!state.useDarkTheme)}
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
            darkMode={state.useDarkTheme}
            modeType={modeTypeSwitchLabel}
            showModal={showModal}
            swapTheme={() => handleChangeTheme(!state.useDarkTheme)}
          />
        )}
      />
    )
  }

  return (
    <IdentityContextProvider url={url}>
      <ThemeProvider theme={state.useDarkTheme ? darkTheme : defaultTheme}>
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
                  darkMode={state.useDarkTheme}
                  modeType={modeTypeSwitchLabel}
                  showModal={showModal}
                  swapTheme={() => handleChangeTheme(!state.useDarkTheme)}
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
                  darkMode={state.useDarkTheme}
                  modeType={modeTypeSwitchLabel}
                  showModal={showModal}
                  swapTheme={() => handleChangeTheme(!state.useDarkTheme)}
                />
              )}
            />
            <Route
              exact
              path="/scoreboard"
              component={(props) => (
                <Scoreboard
                  {...props}
                  darkMode={state.useDarkTheme}
                  modeType={modeTypeSwitchLabel}
                  showModal={showModal}
                  swapTheme={() => handleChangeTheme(!state.useDarkTheme)}
                />
              )}
            />
            <Route
              exact
              path="/missions"
              component={(props) => (
                <Missions
                  {...props}
                  darkMode={state.useDarkTheme}
                  modeType={modeTypeSwitchLabel}
                  showModal={showModal}
                  swapTheme={() => handleChangeTheme(!state.useDarkTheme)}
                />
              )}
            />
            <Route
              exact
              path="/objectives"
              component={(props) => (
                <ObjectivesList
                  {...props}
                  darkMode={state.useDarkTheme}
                  modeType={modeTypeSwitchLabel}
                  showModal={showModal}
                  swapTheme={() => handleChangeTheme(!state.useDarkTheme)}
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
