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

const App = () => {
  const [activeGame, setActiveGame] = useState(false)
  const [useDarkTheme, setUseDarkTheme] = useState(false)
  const modeTypeSwitchLabel = useDarkTheme ? 'Light Mode' : 'Dark Mode'

  const onChange = (e) => {
    console.log('::> onChange: ', e)
    setActiveGame(!activeGame)
  }

  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return activeGame ? (
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
                swapTheme={setUseDarkTheme}
                modeType={modeTypeSwitchLabel}
              />
            )}
          />
          <Route
            exact
            path="/dashboard"
            component={() => (
              <Dashboard
                swapTheme={setUseDarkTheme}
                modeType={modeTypeSwitchLabel}
              />
            )}
          />
          <Route
            exact
            path="/objectives"
            component={() => (
              <ObjectivesList
                swapTheme={setUseDarkTheme}
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

// <Link to="/objectives">
//           <PrimaryButton>Objectives</PrimaryButton>
//         </Link>
//       <PrimaryButton onClick={() => setUseDarkTheme(!useDarkTheme)}>
//         {modeTypeSwitch}
//       </PrimaryButton>
