import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { Link } from 'react-router-dom'
import { HeaderOne, PrimaryButton } from '../components'
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
        <HeaderOne label="Battlehammer" />

        <Link to="/dashboard">
          <PrimaryButton>Play</PrimaryButton>
        </Link>

        <PrimaryButton onClick={() => setUseDarkTheme(!useDarkTheme)}>
          {modeTypeSwitch}
        </PrimaryButton>
      </div>
    </ThemeProvider>
  )
}
