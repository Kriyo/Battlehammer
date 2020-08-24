/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useReducer } from 'react'
import styled from 'styled-components'
import {
  CheckBox,
  HeaderOne,
  HeaderThree,
  NavBar,
  Paragraph,
} from '../../components'
import { Sequence } from './Sequence'
import { MissionReference } from './MissionsReference'
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
  layout: ['missionReference', 'sequence'],
  battles: [
    {
      label: 'Combat Patrol',
      time: 'Up to 1 hour',
    },
    {
      label: 'Incursion',
      time: 'Up to 2 hours',
    },
    { label: 'Strike Force', time: 'Up to 3 hours' },
    { label: 'Onslaught', time: 'Up to 4 hours' },
  ],
  battleSize: {
    combatPatrol: {
      battlefieldSize: '44" x 30"',
      commandPoints: 3,
      powerLevel: '0-50',
      points: '0-500',
    },
    incursion: {
      battlefieldSize: '44" x 30"',
      commandPoints: 6,
      powerLevel: '51-100',
      points: '501-1000',
    },
    strikeForce: {
      battlefieldSize: '44" x 60"',
      commandPoints: 12,
      powerLevel: '101-200',
      points: '1001-2000',
    },
    onslaught: {
      battlefieldSize: '44" x 90"',
      commandPoints: 18,
      powerLevel: '201-300',
      points: '2001-3000',
    },
  },
  missions: {
    combatPatrol: ['Incisive Attack', 'Outriders', 'Encircle'],
    incursion: [
      'Centre Ground',
      'Crossfire',
      'Divide and Conquer',
      'Forward Push',
      'Ransack',
      'Shifting Front',
    ],
    strikeForce: [
      'Retrieval Mission',
      'Front-line Warfare',
      'The Four Pillars',
      'No Mans Land',
      'Scorched Earth',
      'Vital Intelligence',
    ],
    onslaught: ['Lines of Battle', 'All-out War', 'Pathway to Glory'],
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
  const { layout } = state

  const handleChange = (e) => setState({ [e.target.name]: e.target.checked })

  const buildCheckboxes = () => {
    return layout.map((obj) => (
      <Body.CheckBox key={`${obj}-label`}>
        <label>
          <Body.StyleSpan>
            {obj.charAt(0).toUpperCase() + obj.slice(1)}
          </Body.StyleSpan>
          <CheckBox
            checked={state[obj]}
            name={`${obj}`}
            onChange={handleChange}
          />
        </label>
      </Body.CheckBox>
    ))
  }
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
            {buildCheckboxes()}
          </Body.TopBlurb>

          <CheckBoxSelectionSVG fill="yellow" />
        </Body.TopContent>
        <Body.LowerContent>
          <Body.CheckBoxes>
            <Sequence {...state} />
          </Body.CheckBoxes>
          <Body.Objectives>
            <MissionReference {...state} />
          </Body.Objectives>
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
