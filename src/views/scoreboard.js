import React from 'react'
import styled from 'styled-components/macro'
import { cloneDeep } from 'lodash'
import { useLocallyPersistedReducer } from '../utils'
import { HeaderOne, HeaderTwo, NavBar, PrimaryButton } from '../components'
import { defaultPlayerState } from '../utils/constants'
import lightBackground from '../assets/spacemarine.jpg'

export const Scoreboard = ({
  darkMode,
  location,
  modeType,
  showModal,
  swapTheme,
}) => {
  const [playerOneState, setPlayerOneState] = useLocallyPersistedReducer(
    defaultPlayerState,
    `Player 1 state`
  )
  const [playerTwoState, setPlayerTwoState] = useLocallyPersistedReducer(
    defaultPlayerState,
    `Player 2 state`
  )

  // Max amount of points for objectives is 45
  const getScore = (arr, key) => {
    const cloneArr = cloneDeep(arr)
    const currentScore = cloneArr.reduce((a, b) => a + (b[key] || 0), 0)
    return currentScore >= 45 ? 45 : currentScore
  }

  const getTotalScore = (playerOne) => {
    const { battleReady, primaries, secondaries } = playerOne
    const p = getScore(primaries, 'current')
    const s = getScore(secondaries, 'current')
    const br = battleReady ? 10 : 0
    return p + s + br
  }

  const getWinner = () => {
    const playerOneScore = getTotalScore(playerOneState)
    const playerTwoScore = getTotalScore(playerTwoState)
    let winner

    if (playerOneScore > playerTwoScore) {
      winner = `Victory for ${playerOneState.name}'s ${playerOneState.faction}`
    } else if (playerTwoScore > playerOneScore) {
      winner = `Victory for ${playerTwoState.name}'s ${playerTwoState.faction}`
    } else {
      winner = `It's a Draw between the ${playerOneState.faction} and the ${playerTwoState.faction}`
    }
    return winner
  }

  const getPlayerData = () => {}
  getPlayerData()
  return (
    <Styles.Wrap>
      <NavBar
        darkMode={darkMode}
        location={location}
        modeType={modeType}
        showModal={showModal}
        swapTheme={swapTheme}
      />
      <Styles.Header>
        <HeaderOne style={{ fontSize: '9rem' }}>
          {getTotalScore(playerOneState)} - {getTotalScore(playerTwoState)}
        </HeaderOne>
        <HeaderTwo darkMode={darkMode} large>
          {getWinner()} GG!
        </HeaderTwo>
      </Styles.Header>
      <Styles.ButtonWrapper>
        <Styles.Button>
          <PrimaryButton>Return to Dashboard</PrimaryButton>
        </Styles.Button>
        <Styles.Button>
          <PrimaryButton>Save Score</PrimaryButton>
        </Styles.Button>
      </Styles.ButtonWrapper>
    </Styles.Wrap>
  )
}
const lightBG = `linear-gradient(rgba(255, 255, 255, 0.5) 5%, rgba(0, 0, 0, 0) 15%), url(${lightBackground}) no-repeat center center fixed`

const Styles = {
  Wrap: styled.main`
    background: ${lightBG};
    background-size: cover;
    height: 100vh;
  `,
  Header: styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    h1: {
      font-size: 9rem;
    }
  `,
  Content: styled.div`
    display: flex;
    flex-direction: column;
    background: ${(props) => props.theme.backgroundColor};
    padding: 0rem 10rem;
    @media only screen and (max-width: 40em) {
      padding: 5rem 1rem;
    }
  `,
  ButtonWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 15%;
    margin: 0 auto;
    padding: 200px 0;
    @media only screen and (max-width: 40em) {
      width: 100%;
      padding: 20px 0;
    }
  `,
  Button: styled.div`
    display: flex;
    justify-content: inherit;
    width: 100%;
    padding: 15px 0;
  `,
}
