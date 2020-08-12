import React from 'react'
import { PrimaryButton } from '..'
// eslint-disable-next-line no-unused-vars
import styles from './styles.css'

export const Secondaries = ({ config, onChange }) => {
  const rounds = config.secondaries.map((s, i) => {
    // console.log('::> sss: ', s)
    return (
      <div key={s.key}>
        <h4>{s.key}&nbsp;Secondary Objective</h4>
        <div className="secondaries-btn-wrapper">
          {s.amounts.map((amount) => (
            <PrimaryButton
              className={s.current === amount ? 'active' : ''}
              key={amount}
              onClick={() =>
                onChange({
                  current: amount,
                  key: s.key,
                  amounts: s.amounts,
                  index: i,
                })
              }
              modifiers="tiny"
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
