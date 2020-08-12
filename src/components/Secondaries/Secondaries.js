import React from 'react'
import { InputGroup, PrimaryButton } from '../index'

// eslint-disable-next-line no-unused-vars
import styles from './styles.css'

export const Secondaries = ({ config, onChange }) => {
  const rounds = config.secondaries.map((s, i) => {
    return (
      <div key={s.key}>
        <div className="secondaries-input-wrapper">
          <InputGroup
            className="secondaries-input"
            label={`${s.key} Secondary Objective`}
            value={s.title}
            onChange={(e) =>
              onChange({
                amounts: s.amounts,
                current: s.current,
                index: i,
                key: s.key,
                title: e.target.value,
              })
            }
          />
        </div>
        <div className="secondaries-btn-wrapper">
          {s.amounts.map((amount) => (
            <PrimaryButton
              className={s.current === amount ? 'active' : ''}
              key={amount}
              onClick={() =>
                onChange({
                  current: s.current !== amount ? amount : 0,
                  key: s.key,
                  amounts: s.amounts,
                  title: s.title,
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
