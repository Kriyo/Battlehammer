import React from 'react'
import { PrimaryButton } from '.'

export const Primaries = ({ config, onChange }) => {
  const rounds = config.primaries.map((p, i) => {
    return (
      <div key={p.round}>
        <h4>Primary Objective Round {p.round}</h4>
        <div style={{ display: 'inline-flex', flexWrap: 'wrap', gap: '12px' }}>
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
      </div>
    )
  })

  return rounds
}
