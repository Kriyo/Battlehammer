import React, { useReducer } from 'react'
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
      amount: 0,
      amounts: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      key: 'First',
      title: '',
    },
    {
      amount: 0,
      key: 'Second',
      amounts: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      title: '',
    },
    {
      amount: 0,
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

export const Player = ({ label }) => {
  const [state, setState] = useReducer(reducer, defaultState)

  const handleChange = (e, key) => {
    setState({ [key]: e.target.value })
  }

  const handlePrimaryChange = (update) => {
    console.log('::> HPC - upd:', update)
    const cloneSpec = cloneDeep(state)
    const cloneUpdate = cloneDeep(update)
    delete cloneUpdate.index
    cloneSpec.primaries.splice(update.index, 1, cloneUpdate)
    setState({ primaries: cloneSpec.primaries })
  }

  const handleSecondaryChange = (update) => {
    console.log('::> handleSecondaryChange => update: ', update)
  }

  const buildPrimaries = () => {
    return <Primaries onChange={(e) => handlePrimaryChange(e)} config={state} />
  }

  const buildPrimaryTotalScore = () => {
    const totalScore = getTotalScore(state.primaries, 'current')
    return <p>Total score for primaries: {totalScore}</p>
  }

  const buildSecondaries = () => {
    return (
      <Secondaries onChange={(e) => handleSecondaryChange(e)} config={state} />
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
      {buildPrimaryTotalScore()}
      {buildSecondaries()}
    </div>
  )
}
