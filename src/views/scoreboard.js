/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components/macro'
import { cloneDeep } from 'lodash'
import { v4 as uuidv4 } from 'uuid'
import {
  getScore,
  getTotalScore,
  useLocallyPersistedReducer,
  useRouter,
} from '../utils'
import { HeaderOne, HeaderTwo, NavBar, PrimaryButton } from '../components'
import { defaultGamesState, defaultPlayerState } from '../utils/constants'
import lightBackground from '../assets/spacemarine.jpg'

export const Scoreboard = ({
  darkMode,
  location,
  modeType,
  showModal,
  swapTheme,
}) => {
  const router = useRouter()
  const [games, setGames] = useLocallyPersistedReducer(
    defaultGamesState,
    'previousGames'
  )
  const [playerOneState, setPlayerOneState] = useLocallyPersistedReducer(
    defaultPlayerState,
    `Player 1 state`
  )
  const [playerTwoState, setPlayerTwoState] = useLocallyPersistedReducer(
    defaultPlayerState,
    `Player 2 state`
  )

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

  const buildPlayerScore = (playerState) => {
    const { name, faction, battleReady, primaries, secondaries } = playerState
    const primaryTotalScore = getScore(primaries, 'current')
    const secondaryTotalScore = getScore(secondaries, 'current')
    const objectiveCap = 45
    return {
      name,
      faction,
      battleReady,
      primary:
        primaryTotalScore > objectiveCap ? objectiveCap : primaryTotalScore,
      secondaries:
        secondaryTotalScore > objectiveCap ? objectiveCap : secondaryTotalScore,
    }
  }

  const saveScore = () => {
    const players = [playerOneState, playerTwoState]
    const buildScores = players.map((player) => buildPlayerScore(player))
    const cloneGames = cloneDeep(games)
    const gameInfo = {
      id: uuidv4(),
      scores: buildScores,
    }
    const updateGames = [...cloneGames.previous, gameInfo]

    return setGames({ previous: updateGames })
  }

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
        <HeaderOne large>
          {getTotalScore(playerOneState)} - {getTotalScore(playerTwoState)}
        </HeaderOne>
        <HeaderTwo darkMode={darkMode} large>
          {getWinner()} GG!
        </HeaderTwo>
      </Styles.Header>
      <Styles.ButtonWrapper>
        <Styles.Button>
          <PrimaryButton onClick={() => router.push('/dashboard')}>
            Return to Dashboard
          </PrimaryButton>
        </Styles.Button>
        <Styles.Button>
          <PrimaryButton onClick={() => saveScore()}>Save Score</PrimaryButton>
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
