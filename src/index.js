import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { darkTheme, defaultTheme, GlobalStyle } from './utils'
import { Dashboard, Home, ObjectivesList } from './views'

const storedKeys = ['Player 1 state', 'Player 2 state']

const checkForExistingGame = () =>
  storedKeys.some((key) => JSON.parse(localStorage.getItem(key)))

const App = () => {
  const existingGame = checkForExistingGame()
  const [useDarkTheme, setUseDarkTheme] = useState(false)
  const modeTypeSwitchLabel = useDarkTheme ? 'Light Mode' : 'Dark Mode'

  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return existingGame ? (
                <Redirect to="/dashboard" />
              ) : (
                <Redirect to="/home" />
              )
            }}
          />
          <Route
            exact
            path="/home"
            component={() => (
              <Home
                swapTheme={() => setUseDarkTheme(!useDarkTheme)}
                modeType={modeTypeSwitchLabel}
              />
            )}
          />
          <Route
            exact
            path="/dashboard"
            component={() => (
              <Dashboard
                swapTheme={() => setUseDarkTheme(!useDarkTheme)}
                modeType={modeTypeSwitchLabel}
              />
            )}
          />
          <Route
            exact
            path="/objectives"
            component={() => (
              <ObjectivesList
                swapTheme={() => setUseDarkTheme(!useDarkTheme)}
                modeType={modeTypeSwitchLabel}
              />
            )}
          />
        </Switch>
      </Router>

      <GlobalStyle />
    </ThemeProvider>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))
