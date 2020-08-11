import React from 'react'
import { PrimaryButton } from '.'

export const Primaries = ({ config, onChange }) => {
  const rounds = config.primaries.map((p, i) => {
    return (
      <div key={p.round}>
        <h4>Primary Objective Round {p.round}</h4>
        {p.amounts.map((amount) => (
          <PrimaryButton
            key={amount}
            onClick={() =>
              onChange({
                current: amount,
                round: p.round,
                amounts: p.amounts,
                index: i,
              })
            }
            modifiers="small"
          >
            {amount}
          </PrimaryButton>
        ))}
      </div>
    )
  })

  return rounds
}
