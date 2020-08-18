import React from 'react'
import styled from 'styled-components'
import { cloneDeep } from 'lodash'
import { useLocallyPersistedReducer } from '../utils'
import { HeaderFour, HeaderFive, InputGroup, PrimaryButton } from './index'
import { Primaries } from './Primaries'
import { Secondaries } from './Secondaries'

const defaultState = {
  name: '',
  cp: 0,
  faction: '',
  primaries: [
    {
      current: 0,
      round: 2,
      amounts: [5, 10, 15],
    },
    {
      current: 0,
      round: 3,
      amounts: [5, 10, 15],
    },
    {
      current: 0,
      round: 4,
      amounts: [5, 10, 15],
    },
    {
      current: 0,
      round: 5,
      amounts: [5, 10, 15],
    },
  ],
  secondaries: [
    {
      current: 0,
      amounts: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      key: 'First',
      title: '',
    },
    {
      current: 0,
      key: 'Second',
      amounts: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      title: '',
    },
    {
      current: 0,
      key: 'Third',
      amounts: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      title: '',
    },
  ],
}

// Max amount of points for objectives is 45
const getScore = (arr, key) => {
  const cloneArr = cloneDeep(arr)
  const currentScore = cloneArr.reduce((a, b) => a + (b[key] || 0), 0)
  return currentScore >= 45 ? 45 : currentScore
}

export const Player = ({ label }) => {
  const [state, setState] = useLocallyPersistedReducer(
    defaultState,
    `${label} state`
  )
  const handleChange = (e, key) => {
    setState({ [key]: e.target.value })
  }

  const handleObjChange = (update, key) => {
    const cloneSpec = cloneDeep(state)
    const cloneUpdate = cloneDeep(update)
    delete cloneUpdate.index
    cloneSpec[key].splice(update.index, 1, cloneUpdate)
    setState({ [key]: cloneSpec[key] })
  }

  // fn for clearing localstorage and state, resetting the player.
  const handleReset = (key) => {
    localStorage.removeItem(key)
    setState({ reset: true })
  }

  const buildPrimaries = () => {
    return (
      <Primaries
        onChange={(e) => handleObjChange(e, 'primaries')}
        config={state}
      />
    )
  }

  const buildScore = (key) => {
    const score = getScore(state[key], 'current')
    return (
      <HeaderFive>
        Total score for {key}: {score}
      </HeaderFive>
    )
  }

  const getTotalScore = () => {
    const { primaries, secondaries } = state
    const p = getScore(primaries, 'current')
    const s = getScore(secondaries, 'current')
    return p + s
  }

  const buildTotalScore = () => {
    const total = getTotalScore()
    return <HeaderFive>Overall Score: {total}</HeaderFive>
  }

  const buildSecondaries = () => {
    return (
      <Secondaries
        onChange={(e) => handleObjChange(e, 'secondaries')}
        config={state}
      />
    )
  }

  return (
    <Styles.Container>
      <Styles.HeaderWrapper>
        <HeaderFour>{label}</HeaderFour>
      </Styles.HeaderWrapper>
      <InputGroup
        label="Name"
        value={state.name}
        onChange={(e) => handleChange(e, 'name')}
      />
      <InputGroup
        label="CP"
        value={state.cp}
        onChange={(e) => handleChange(e, 'cp')}
      />
      <InputGroup
        label="Faction"
        value={state.faction}
        onChange={(e) => handleChange(e, 'faction')}
      />
      <Styles.HeaderWrapper>
        <HeaderFour>Primary Objectives</HeaderFour>
      </Styles.HeaderWrapper>
      {buildPrimaries()}
      {buildScore('primaries')}

      <Styles.HeaderWrapper>
        <HeaderFour>Secondary Objectives</HeaderFour>
      </Styles.HeaderWrapper>
      {buildSecondaries()}
      {buildScore('secondaries')}
      {buildTotalScore()}
      <PrimaryButton onClick={() => handleReset(`${label} state`)}>
        Reset Player
      </PrimaryButton>
    </Styles.Container>
  )
}

const Styles = {
  Container: styled.div``,
  HeaderWrapper: styled.div`
    padding: 1rem 0;
  `,
}
