import React, { useReducer } from 'react'
import styled from 'styled-components'
import { HeaderOne, NavBar, Paragraph } from '../../components'
import { CheckBoxSelectionSVG } from '../../assets/check-box-selection'
import { ShadowOperations } from './ShadowOperations'
import { NoMercy } from './NoMercy'
import { BattlefieldSupremacy } from './BattlefieldSupremacy'
import { PurgeTheEnemy } from './PurgeTheEnemy'
import { Warpcraft } from './Warpcraft'

const reducer = (prevState, updatedProperty) => ({
  ...prevState,
  ...updatedProperty,
})

const defaultState = {
  all: true,
  battlefieldSupremacy: false,
  noMercy: false,
  purgeTheEnemy: false,
  shadowOperations: false,
  warpcraft: false,
}

const objectiveTypes = [
  'all',
  'purgeTheEnemy',
  'noMercy',
  'battlefieldSupremacy',
  'shadowOperations',
  'warpcraft',
]

export const ObjectivesList = ({ darkMode, location, modeType, swapTheme }) => {
  const [state, setState] = useReducer(reducer, defaultState)
  const {
    all,
    battlefieldSupremacy,
    noMercy,
    purgeTheEnemy,
    shadowOperations,
    warpcraft,
  } = state

  const handleChange = (e) => {
    setState({ [e.target.name]: e.target.checked })
  }

  const buildCheckboxes = () => {
    return objectiveTypes.map((obj) => (
      <label key={`${obj}-label`} htmlFor={`${obj}`}>
        {obj.charAt(0).toUpperCase() + obj.slice(1)}
        <input
          key={`${obj}`}
          type="checkbox"
          name={`${obj}`}
          checked={state[obj]}
          onChange={handleChange}
        />
      </label>
    ))
  }

  return (
    <Styles.Wrap>
      <NavBar location={location} modeType={modeType} swapTheme={swapTheme} />

      <Body.Back darkMode={darkMode}>
        <Body.TopContent>
          <Body.TopBlurb>
            <HeaderOne>Secondary Objectives</HeaderOne>

            <Paragraph>
              When you are instructed to select secondary objectives, you can
              select from any presented here, in addition to any secondary
              objective listed on the mission you are playing.
            </Paragraph>
            <Paragraph>
              You can score no more than 15 victory points from each secondary
              objective you select during the mission (any excess victory points
              awarded are discounted).
            </Paragraph>
            <Paragraph>
              Each secondary objective listed below has a category(e.g. Purge
              the Enemy). When you select secondary objectives, you cannot
              choose more than one from each category.
            </Paragraph>
            <Paragraph>
              Use the checkboxes below to filter all secondary objectives based
              on category.
            </Paragraph>
          </Body.TopBlurb>

          <CheckBoxSelectionSVG fill="yellow" />
        </Body.TopContent>
        <Body.LowerContent>
          <Body.CheckBoxes>{buildCheckboxes()}</Body.CheckBoxes>
          <Body.Objectives>
            {purgeTheEnemy || all ? <PurgeTheEnemy /> : null}
            {noMercy || all ? <NoMercy /> : null}
            {battlefieldSupremacy || all ? <BattlefieldSupremacy /> : null}
            {shadowOperations || all ? <ShadowOperations /> : null}
            {warpcraft || all ? <Warpcraft /> : null}
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
    position: absolute;
    z-index: -1;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    background: ${(props) => (props.darkMode ? 'black' : 'white')};
    background-size: cover;
    padding: 5rem 3rem;
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
  TopBlurb: styled.div``,
  CheckBoxes: styled.div``,
  LowerContent: styled.div``,
  Objectives: styled.div``,
}
