import React from 'react'
import { Link } from 'react-router-dom'
import { HeaderOne, NavBar, PrimaryButton } from '../components'
import Background from '../assets/sm-background.jpg'

export const Home = ({ location }) => {
  return (
    <div
      style={{
        // margin: '-111px 0px',
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
      <NavBar path={location.pathname} />
      <HeaderOne label="Battlehammer" />

      <Link to="/dashboard">
        <PrimaryButton>Play</PrimaryButton>
      </Link>
    </div>
  )
}
