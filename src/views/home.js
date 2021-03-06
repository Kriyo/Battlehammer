import React from 'react'
import styled from 'styled-components'
import { useIdentityContext } from 'react-netlify-identity'
import { Link } from 'react-router-dom'
import { HeaderOne, NavBar, PrimaryButton } from '../components'
import darkBackground from '../assets/sm-background.jpg'
import lightBackground from '../assets/light-sm-background.jpg'

export const Home = ({
  darkMode,
  location,
  modeType,
  showModal,
  swapTheme,
}) => {
  const identity = useIdentityContext()
  const userLoggedIn = identity && identity.isLoggedIn

  const buildButton = () =>
    userLoggedIn ? (
      <Link to="/dashboard">
        <PrimaryButton className="active">Play</PrimaryButton>
      </Link>
    ) : (
      <PrimaryButton className="active" onClick={showModal}>
        {userLoggedIn ? 'Log Out' : 'Log In'}
      </PrimaryButton>
    )

  return (
    <Styles.Wrap>
      <NavBar
        darkMode={darkMode}
        location={location}
        modeType={modeType}
        showModal={showModal}
        swapTheme={swapTheme}
      />
      <Body.Back darkMode={darkMode}>
        <HeaderOne>Battlehammer</HeaderOne>
        {buildButton()}
      </Body.Back>
    </Styles.Wrap>
  )
}

const darkBG = `linear-gradient(rgba(0, 0, 0, 0.8) 30%, rgba(0, 0, 0, 0.3) 80%), url(${darkBackground}) no-repeat center center fixed`
const lightBG = `linear-gradient(rgba(255, 255, 255, 0.5) 5%, rgba(0, 0, 0, 0) 15%), url(${lightBackground}) no-repeat center center fixed`

const Styles = {
  Wrap: styled.main``,
}

const Body = {
  Back: styled.div`
    position: absolute;
    z-index: -1;
    top: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    background: ${(props) => (props.darkMode ? darkBG : lightBG)};
    background-size: cover;
  `,
}
