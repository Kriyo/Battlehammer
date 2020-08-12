import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
} from 'react-router-dom'

import { ThemeProvider } from 'styled-components'
import { darkTheme, defaultTheme, GlobalStyle } from './utils'
import { PrimaryButton } from './components'

import { Dashboard, Home, ObjectivesList } from './views'

const App = () => {
  const [activeGame, setActiveGame] = useState(false)
  const [useDarkTheme, setUseDarkTheme] = useState(false)
  const modeTypeSwitch = useDarkTheme ? 'Use Light Mode' : 'Use Dark Mode'

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
          <Route exact path="/home" component={Home} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/objectives" component={ObjectivesList} />
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
