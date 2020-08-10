import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { Link } from 'react-router-dom'
import { PrimaryButton } from '../components'
import { darkTheme, defaultTheme } from '../utils'
import Background from '../assets/sm-background.jpg'

export const Home = () => {
  const [useDarkTheme, setUseDarkTheme] = useState(false)
  const modeTypeSwitch = useDarkTheme ? 'Use Light Mode' : 'Use Dark Mode'

  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
      <div
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.8) 30%, rgba(0, 0, 0, 0.3) 80%), url(${Background}) no-repeat center center fixed`,
          backgroundSize: 'cover',
          width: '100vw',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          flexDirection: 'column',
        }}
      >
        <h1
          style={{
            color: 'white',
            fontFamily: `${darkTheme.secondaryFont}`,
            fontSize: darkTheme.typeScale.h1,
            textShadow:
              '0px 4px 3px rgba(0,0,0,0.4), 0px 8px 13px rgba(0,0,0,0.1), 0px 18px 23px rgba(0,0,0,0.1)',
          }}
        >
          Battlehammer
        </h1>

        <Link to="/dashboard">
          <PrimaryButton>Let's Game</PrimaryButton>
        </Link>

        <PrimaryButton onClick={() => setUseDarkTheme(!useDarkTheme)}>
          {modeTypeSwitch}
        </PrimaryButton>
      </div>
    </ThemeProvider>
  )
}
