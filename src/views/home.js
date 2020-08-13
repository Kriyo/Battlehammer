import React from 'react'
import { Link } from 'react-router-dom'
import { HeaderOne, NavBar, PrimaryButton } from '../components'
import Background from '../assets/sm-background.jpg'
// {location.pathname}
export const Home = ({ location, modeType, swapTheme }) => {
  return (
    <div>
      <NavBar path="ble" modeType={modeType} swapTheme={swapTheme} />

      <div
        style={{
          position: 'absolute',
          zIndex: '-1',
          top: '0',
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
      </div>
    </div>
  )
}
