import React from 'react'
import { HeaderFour, InputGroup } from '../components'

export const Player = ({ label }) => {
  return (
    <div>
      <HeaderFour label={label} />
      <InputGroup label="Name" />
      <InputGroup label="CP" />
      <InputGroup label="Faction" />
    </div>
  )
}
