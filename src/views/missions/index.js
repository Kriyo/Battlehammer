/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useReducer } from 'react'
import styled from 'styled-components'
import { HeaderOne, NavBar, Paragraph } from '../../components'
import { Sequence } from './Sequence'
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
  battles: [
    {
      key: 'combatPatrol',
      label: 'Combat Patrol',
      time: 'Up to 1 hour',
    },
    {
      key: 'incursion',
      label: 'Incursion',
      time: 'Up to 2 hours',
    },
    { key: 'strikeForce', label: 'Strike Force', time: 'Up to 3 hours' },
    { key: 'onslaught', label: 'Onslaught', time: 'Up to 4 hours' },
  ],
  battleSize: [
    {
      battlefieldSize: '44" x 30"',
      commandPoints: 3,
      label: 'Combat Patrol',
      powerLevel: '0-50',
      points: '0-500',
    },
    {
      battlefieldSize: '44" x 30"',
      commandPoints: 6,
      label: 'Incursion',
      powerLevel: '51-100',
      points: '501-1000',
    },
    {
      battlefieldSize: '44" x 60"',
      commandPoints: 12,
      label: 'Strike Force',
      powerLevel: '101-200',
      points: '1001-2000',
    },
    {
      battlefieldSize: '44" x 90"',
      commandPoints: 18,
      label: 'Onslaught',
      powerLevel: '201-300',
      points: '2001-3000',
    },
  ],
  missions: {
    combatPatrol: [
      { dice: '1-2', label: 'Incisive Attack' },
      {
        dice: '3-4',
        label: 'Outriders',
      },
      { dice: '5-6', label: 'Encircle' },
    ],
    incursion: [
      { dice: '1', label: 'Divide and Conquer' },
      { dice: '2', label: 'Crossfire' },
      { dice: '3', label: 'Centre Ground' },
      { dice: '4', label: 'Forward Push' },
      { dice: '5', label: 'Ransack' },
      { dice: '6', label: 'Shifting Front' },
    ],
    strikeForce: [
      { dice: '1', label: 'Retrieval Mission' },
      { dice: '2', label: 'Front-line Warfare' },
      { dice: '3', label: 'The Four Pillars' },
      { dice: '4', label: 'No Mans Land' },
      { dice: '5', label: 'Scorched Earth' },
      { dice: '6', label: 'Vital Intelligence' },
    ],
    onslaught: [
      { dice: '1-2', label: 'Lines of Battle' },
      { dice: '3-4', label: 'All-out War' },
      { dice: '5-6', label: 'Pathway to Glory' },
    ],
  },
}

export const Missions = ({
  darkMode,
  location,
  modeType,
  showModal,
  swapTheme,
}) => {
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
