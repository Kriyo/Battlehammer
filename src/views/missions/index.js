import React, { useReducer } from 'react'
import styled from 'styled-components'
import {
  CheckBox,
  HeaderOne,
  HeaderThree,
  NavBar,
  Paragraph,
} from '../../components'

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
  battles: {
    combatPatrol: 'Up to 1 hour',
    incursion: 'Up to 2 hours',
    strikeForce: 'Up to 3 hours',
    onslaught: 'Up to 4 hours',
  },
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

  return (
    <Styles.Wrap>
      <NavBar
        location={location}
        darkMode={darkMode}
        modeType={modeType}
        showModal={showModal}
        swapTheme={swapTheme}
      />
      <HeaderOne>Missions</HeaderOne>
    </Styles.Wrap>
  )
}

const Styles = {
  Wrap: styled.main``,
}
