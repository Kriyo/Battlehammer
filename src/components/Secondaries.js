import React from 'react'
import styled from 'styled-components'
import Select from 'react-select'
import { cloneDeep } from 'lodash'
import { InputGroup, PrimaryButton } from './index'
import { missionOpts } from '../utils/constants'

export const Secondaries = ({
  battleType,
  config,
  customStyles,
  mission,
  onChange,
}) => {
  const cloneMissions = cloneDeep(missionOpts)

  const derp = (e) => {
    console.log('::> EEEE: ', e)
  }

  const buildSelect = () => {
    const getMissionData = cloneMissions[battleType.value].find(
      (m) => m.value === mission.value
    )
    const additionalSecondary = getMissionData.secondary
    console.log('::> additionalSecondary: ', additionalSecondary)

    return (
      <Styles.SelectWrapper>
        <Select
          options={cloneMissions}
          // value={mission}
          styles={customStyles}
          onChange={(e) => derp(e)}
        />
      </Styles.SelectWrapper>
    )
  }

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
        {buildSelect()}
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
  SelectWrapper: styled.div``,
}
