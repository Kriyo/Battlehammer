import React, { useEffect, useReducer } from 'react'
import { cloneDeep } from 'lodash'
import { HeaderFour, InputGroup, PrimaryButton } from './index'
import { Primaries } from './Primaries'
import { Secondaries } from './Secondaries/Secondaries'

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

const reducer = (prevState, updatedProperty) => {
  return updatedProperty.reset
    ? defaultState
    : { ...prevState, ...updatedProperty }
}

// Customer useReducer fn for using localStorage as a means of persistence.
function useLocallyPersistedReducer(storageKey, init = null) {
  const hookVars = useReducer(reducer, defaultState, () => {
    const persisted = JSON.parse(localStorage.getItem(storageKey))
    // eslint-disable-next-line no-nested-ternary
    return persisted !== null
      ? persisted
      : init !== null
      ? init(defaultState)
      : defaultState
  })

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(hookVars[0]))
  }, [hookVars, storageKey])

  return hookVars
}

export const Player = ({ label }) => {
  const [state, setState] = useLocallyPersistedReducer(`${label} state`)
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
  const handleReset = () => {
    localStorage.clear()
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
      <h4>
        Total score for {key}: {score}
      </h4>
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
    return <h4>Total Score: {total}</h4>
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
    <div>
      <HeaderFour>{label}</HeaderFour>
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
      {buildPrimaries()}
      {buildScore('primaries')}
      {buildSecondaries()}
      {buildScore('secondaries')}
      {buildTotalScore()}
      <PrimaryButton onClick={() => handleReset()}>Reset Player</PrimaryButton>
    </div>
  )
}
