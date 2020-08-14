import React from 'react'
import styled from 'styled-components'
import { InputGroup, PrimaryButton } from './index'

export const Secondaries = ({ config, onChange }) => {
  const rounds = config.secondaries.map((s, i) => {
    return (
      <Styles.Container key={s.key}>
        <Styles.SecondariesInputWrapper>
          <InputGroup
            className="secondaries-input"
            label={`${s.key} Objective`}
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
        </Styles.SecondariesInputWrapper>
        <Styles.SecondariesButtonWrapper>
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
        </Styles.SecondariesButtonWrapper>
      </Styles.Container>
    )
  })

  return rounds
}

const Styles = {
  Container: styled.div``,
  SecondariesButtonWrapper: styled.div`
    display: inline-flex;
    flex-wrap: wrap;
    gap: 12px;
    max-width: 324px;
  `,
  SecondariesInputWrapper: styled.div`
    input {
      margin: 35px 0 0 0;
    }
  `,
}
