import React from 'react'
import styled from 'styled-components'
import Select from 'react-select'
import { HeaderOne, NavBar } from '../components'
import { Player } from '../components/Player'
import { useLocallyPersistedReducer } from '../utils'
import { battleSize, battleTypes, missionOpts } from '../utils/constants'

const defaultState = {
  battleType: '',
  mission: '',
  points: '',
}

export const Dashboard = ({
  darkMode,
  location,
  modeType,
  showModal,
  swapTheme,
}) => {
  const players = ['Player 1', 'Player 2']
  const buildPlayers = players.map((p) => <Player key={p} label={p} />)
  const [state, setState] = useLocallyPersistedReducer(
    defaultState,
    'dashboard'
  )

  const handleChange = (e, key) => {
    setState({ [key]: e })
  }

  const buildMissionSelect = () => {
    const { battleType } = state
    if (battleType) {
      return (
        <Styles.Mission>
          <p>Mission</p>
          <Select options={missionOpts[battleType]} />
        </Styles.Mission>
      )
    }
    return null
  }
  console.log('::> State: ', state)
  /* Build up state here for Mission & Points Limit etc */
  return (
    <Styles.Wrap>
      <NavBar
        darkMode={darkMode}
        modeType={modeType}
        showModal={showModal}
        swapTheme={swapTheme}
        location={location}
      />
      <Styles.Header>
        <HeaderOne>Dashboard</HeaderOne>
      </Styles.Header>
      <Styles.BattleSize>
        <p>Battle Size</p>
        <Select
          options={battleTypes}
          onChange={(e) => handleChange(e, 'battleType')}
          value={state.battleType}
        />
      </Styles.BattleSize>
      {buildMissionSelect()}
      <Styles.Content>
        <Styles.Players>{buildPlayers}</Styles.Players>
      </Styles.Content>
    </Styles.Wrap>
  )
}

const Styles = {
  Wrap: styled.main``,
  Content: styled.div`
    display: flex;
    flex-direction: column;
    background: ${(props) => props.theme.backgroundColor};
    padding: 0rem 10rem;
    @media only screen and (max-width: 40em) {
      padding: 5rem 1rem;
    }
  `,
  Header: styled.div`
    display: flex;
    justify-content: center;
    background: ${(props) => props.theme.backgroundColor};
  `,
  BattleSize: styled.div``,
  Mission: styled.div``,
  Players: styled.div`
    display: flex;
    justify-content: space-around;
    @media only screen and (max-width: 40em) {
      flex-direction: column;
      justify-content: center;
    }
  `,
}
