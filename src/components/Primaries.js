import React from 'react'
import { RadioGroup, Radio } from 'react-radio-group'

// import { HeaderFour, InputGroup } from './index'

export const Primaries = ({ config }) => {
  const handleChange = (e) => console.log('::> change: ', e)

  const rounds = config.primaries.map((p, i) => {
    return (
      <div key={i}>
        <h4>Primary Objective Round {p.round}</h4>
        <RadioGroup
          name={`Primary Objective Round ${p.round}`}
          selectedValue={15}
          onChange={handleChange}
        >
          {p.amounts.map((amount) => (
            <label key={amount} htmlFor={amount}>
              <Radio key={amount} value={amount} />
              {amount}
            </label>
          ))}
        </RadioGroup>
      </div>
    )
  })

  return rounds
}
