import React from 'react'
import { PrimaryButton } from '..'
// eslint-disable-next-line no-unused-vars
import styles from './styles.css'

export const Primaries = ({ config, onChange }) => {
  const rounds = config.primaries.map((p, i) => {
    console.log('::> ppp: ', p)
    return (
      <div key={p.round}>
        <h4>Primary Objective Round {p.round}</h4>
        <div className="primaries-btn-wrapper">
          {p.amounts.map((amount) => (
            <PrimaryButton
              className={p.current === amount ? 'active' : ''}
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
