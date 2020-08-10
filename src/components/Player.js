import React, { useState } from 'react'
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

export const Player = ({ label }) => {
  const [playerConfig, setPlayerConfig] = useState(defaultState)

  const buildPrimaries = () => {
    console.log('::> building Primaries => playerConfig: ', playerConfig)
    return <Primaries config={playerConfig} />
  }

  const buildSecondaries = () => {
  }

  return (
    <div>
      <HeaderFour label={label} />
      <InputGroup label="Name" />
      <InputGroup label="CP" />
      <InputGroup label="Faction" />
      {buildPrimaries()}
    </div>
  )
}
