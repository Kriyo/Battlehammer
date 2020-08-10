import React, { useReducer } from 'react'
import { HeaderFour, InputGroup } from './index'
import { Primaries } from './Primaries'

const defaultState = {
  name: '',
  cp: 0,
  faction: '',
  primaries: [
    {
      round: 2,
      current: 0,
      amounts: [5, 10, 15],
    },
    {
      round: 3,
      current: 0,
      amounts: [5, 10, 15],
    },
    {
      round: 4,
      current: 0,
      amounts: [5, 10, 15],
    },
    {
      round: 5,
      current: 0,
      amounts: [5, 10, 15],
    },
  ],
  secondaries: [
    {
      title: '',
      amount: 0,
      amounts: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    },
    {
      title: '',
      amounts: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    },
    {
      title: '',
      amounts: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    },
  ],
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

  const buildPrimaries = () => {
    return <Primaries config={state} />
  }

  const buildSecondaries = () => {}

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
    </div>
  )
}
