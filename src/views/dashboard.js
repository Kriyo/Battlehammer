import React from 'react'
import styled from 'styled-components'
import Select from 'react-select'
import { set } from 'lodash'
import { HeaderOne, InputGroup, NavBar } from '../components'
import { Player } from '../components/Player'
import { defaultTheme, darkTheme, useLocallyPersistedReducer } from '../utils'
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
  const currentTheme = darkMode ? darkTheme : defaultTheme

  const customStyles = {
    option: (provided, styleState) => ({
      ...provided,
      backgroundColor: styleState.isSelected
        ? currentTheme.selectBGActiveColor
        : currentTheme.selectBGColor,
      color: styleState.isSelected
        ? currentTheme.selectBGActiveTextColor
        : currentTheme.selectBGTextColor,
    }),
  }

  const handleChange = (e, key) => {
    if (key === 'points') {
      setState({ [key]: e.target.value })
    } else {
      setState({ [key]: e })
    }
  }

  const buildMissionSelect = () => {
    const { battleType } = state
    if (battleType) {
      return (
        <Styles.Mission>
          <Styles.BattleLabel>Mission</Styles.BattleLabel>
          <Select
            styles={customStyles}
            options={missionOpts[battleType.value]}
            onChange={(e) => handleChange(e, 'mission')}
            value={state.mission}
          />
        </Styles.Mission>
      )
    }
    return null
  }

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
        <Styles.BattleLabel>Battle Size</Styles.BattleLabel>
        <Select
          styles={customStyles}
          options={battleTypes}
          onChange={(e) => handleChange(e, 'battleType')}
          value={state.battleType}
        />
      </Styles.BattleSize>
      {buildMissionSelect()}
      <Styles.Points>
        <InputGroup
          label="Points"
          value={state.points}
          onChange={(e) => handleChange(e, 'points')}
        />
      </Styles.Points>
      <Styles.Content>
        <Styles.Players>{buildPlayers}</Styles.Players>
      </Styles.Content>
    </Styles.Wrap>
  )
}

const Styles = {
  Wrap: styled.main`
    background: ${(props) => props.theme.backgroundColor};
  `,
  BattleLabel: styled.p`
    color: ${(props) => props.theme.textColorOnPrimary};
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
  Header: styled.div`
    display: flex;
    justify-content: center;
    background: ${(props) => props.theme.backgroundColor};
  `,
  BattleSize: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 300px;
    margin: 0 auto;
    background: ${(props) => props.theme.backgroundColor};
  `,
  Mission: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 300px;
    margin: 0 auto;
    background: ${(props) => props.theme.backgroundColor};
  `,
  Points: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 300px;
    margin: 30px auto;
    background: ${(props) => props.theme.backgroundColor};
  `,
  Players: styled.div`
    display: flex;
    justify-content: space-around;
    @media only screen and (max-width: 40em) {
      flex-direction: column;
      justify-content: center;
    }
  `,
}
