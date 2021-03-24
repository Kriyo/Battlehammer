import React from 'react'
import styled from 'styled-components'
import Select from 'react-select'
import { PrimaryButton } from './index'
import { secondaryObjectives } from '../utils/constants'

export const Secondaries = ({
  config,
  customStyles,
  mission,
  onChange,
  secondaries,
}) => {
  const rounds = config.secondaries.map((s, i) => {
    return (
      <Styles.Container key={s.key}>
        {mission ? (
          <Styles.SelectWrapper>
            <Select
              style={{ borderColor: '#272343' }}
              options={secondaryObjectives}
              value={secondaries[i].title}
              styles={customStyles}
              onChange={(e) =>
                onChange({
                  amounts: s.amounts,
                  current: s.current,
                  index: i,
                  key: s.key,
                  title: e,
                })
              }
            />
          </Styles.SelectWrapper>
        ) : null}
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
  SelectWrapper: styled.div`
    padding: 20px 0;
  `,
}
