import React from 'react'
import styled from 'styled-components'
import { Paragraph, PrimaryButton } from '.'

export const Primaries = ({ config, onChange }) => {
  const rounds = config.primaries.map((p, i) => {
    return (
      <Styles.RoundsWrapper key={p.round}>
        <Paragraph>Primary Objective Round {p.round}</Paragraph>
        <Styles.AmountsWrapper>
          {p.amounts.map((amount) => (
            <PrimaryButton
              className={p.current === amount ? 'active' : ''}
              key={amount}
              onClick={() =>
                onChange({
                  current: p.current !== amount ? amount : 0,
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
        </Styles.AmountsWrapper>
      </Styles.RoundsWrapper>
    )
  })

  return rounds
}

const Styles = {
  RoundsWrapper: styled.div`
    p {
      color: ${(props) => props.theme.largeHeadingTextColor};
    }
  `,
  AmountsWrapper: styled.div`
    display: inline-flex;
    flex-wrap: wrap;
    gap: 12px;
  `,
}
