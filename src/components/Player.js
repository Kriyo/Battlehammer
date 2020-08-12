import React, { useEffect, useReducer } from 'react'
import { cloneDeep } from 'lodash'
import { HeaderFour, InputGroup } from './index'
import { Primaries } from './Primaries/Primaries'
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
const getTotalScore = (arr, key) => {
  const cloneArr = cloneDeep(arr)
  const currentScore = cloneArr.reduce((a, b) => a + (b[key] || 0), 0)
  return currentScore >= 45 ? 45 : currentScore
}

const reducer = (prevState, updatedProperty) => ({
  ...prevState,
  ...updatedProperty,
})

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
  const [state, setState] = useLocallyPersistedReducer('state')
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

  const buildPrimaries = () => {
    return (
      <Primaries
        onChange={(e) => handleObjChange(e, 'primaries')}
        config={state}
      />
    )
  }

  const buildTotalScore = (key) => {
    const totalScore = getTotalScore(state[key], 'current')
    return (
      <h4>
        Total score for {key}: {totalScore}
      </h4>
    )
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
      <HeaderFour label={label} />
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
      {buildTotalScore('primaries')}
      {buildSecondaries()}
      {buildTotalScore('secondaries')}
    </div>
  )
}
