/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useReducer } from 'react'
import styled from 'styled-components'
import { HeaderOne, NavBar, Paragraph } from '../../components'
import { Sequence } from './Sequence'
import { battleTypes, battleSize, missionOpts } from '../../utils/constants'
import { CheckBoxSelectionSVG } from '../../assets/check-box-selection'

const reducer = (prevState, updatedProperty) => ({
  ...prevState,
  ...updatedProperty,
})

/*
  all - All types have been chosen,
  battles - battle size & rough time est.
  battleSize - setup costs.
*/
const defaultState = {
  all: true,
  layout: [
    { key: 'missionReference', value: 'Mission Reference' },
    { key: 'sequence', value: 'Sequence' },
  ],
  battles: battleTypes,
  battleSize,
  missions: missionOpts,
}

export const Missions = ({
  darkMode,
  location,
  modeType,
  showModal,
  swapTheme,
}) => {
  // eslint-disable-next-line no-unused-vars
  const [state, setState] = useReducer(reducer, defaultState)

  return (
    <Styles.Wrap>
      <NavBar
        location={location}
        darkMode={darkMode}
        modeType={modeType}
        showModal={showModal}
        swapTheme={swapTheme}
      />
      <Body.Back darkMode={darkMode}>
        <Body.TopContent>
          <Body.TopBlurb>
            <HeaderOne>Eternal War</HeaderOne>
            <Paragraph>
              Here you can reference the missions layout or the sequence of how
              you should play the game.
            </Paragraph>
            <Paragraph>
              Use the checkboxes below to filter based on what you wish to view.
            </Paragraph>
          </Body.TopBlurb>

          <CheckBoxSelectionSVG fill="yellow" />
        </Body.TopContent>
        <Body.LowerContent>
          <Body.CheckBoxes>
            <Sequence {...state} />
          </Body.CheckBoxes>
        </Body.LowerContent>
      </Body.Back>
    </Styles.Wrap>
  )
}

const Styles = {
  Wrap: styled.main``,
}

const Body = {
  Back: styled.div`
    display: flex;
    flex-direction: column;
    background: ${(props) => props.theme.backgroundColor};
    padding: 0rem 10rem;
    @media only screen and (max-width: 40em) {
      padding: 5rem 1rem;
    }
  `,
  TopContent: styled.div`
    display: flex;
    padding: 3.5rem 0;
    @media only screen and (max-width: 40em) {
      flex-direction: column;
      padding: 0;
    }
  `,
  TopBlurb: styled.div`
    width: 50%;
    @media only screen and (max-width: 40em) {
      width: 100%;
    }
  `,
  StyleSpan: styled.span`
    margin-right: 8px;
    color: ${(props) => props.theme.textColor};
  `,
  CheckBox: styled.div`
    padding: 1rem 0;
  `,
  CheckBoxes: styled.div`
    display: flex;
    flex-direction: column;
    min-width: 20%;
  `,
  LowerContent: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media only screen and (max-width: 40em) {
      flex-direction: column;
    }
  `,
  Objectives: styled.div``,
}
