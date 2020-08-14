import React, { useReducer } from 'react'
import styled from 'styled-components'
import { HeaderOne, NavBar } from '../../components'
import { CheckBoxSelectionSVG } from '../../assets/check-box-selection'
import { Action } from './action'
import { Loss } from './loss'
import { Position } from './position'
import { Target } from './target'

// eslint-disable-next-line no-unused-vars
import styles from './styles.css'

const reducer = (prevState, updatedProperty) => ({
  ...prevState,
  ...updatedProperty,
})

const defaultState = {
  all: true,
  action: false,
  loss: false,
  position: false,
  target: false,
}

const objectiveTypes = ['all', 'action', 'loss', 'position', 'target']

export const ObjectivesList = ({ darkMode, location, modeType, swapTheme }) => {
  const [state, setState] = useReducer(reducer, defaultState)
  const { action, all, loss, position, target } = state

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
        <HeaderOne>Objectives</HeaderOne>
        <Body.TopContent>
          <Body.TopBlurb>
            When you are instructed to select secondary objectives, you can
            select from any presented here, in addition to any secondary
            objective listed on the mission you are playing.
          </Body.TopBlurb>
          <Body.TopBlurb>
            You can score no more than 15 victory points from each secondary
            objective you select during the mission (any excess victory points
            awarded are discounted).
          </Body.TopBlurb>
          <Body.TopBlurb>
            Each secondary objective listed below has a category(e.g. Purge the
            Enemy). When you select secondary objectives, you cannot choose more
            than one from each category.
          </Body.TopBlurb>
          <Body.TopBlurb>
            Use the checkboxes below to filter all secondary objectives based on
            category.
          </Body.TopBlurb>
          <CheckBoxSelectionSVG fill="yellow" />
        </Body.TopContent>
        <Body.LowerContent>
          <Body.CheckBoxes>{buildCheckboxes()}</Body.CheckBoxes>
          <Body.Objectives>
            {action || all ? <Action /> : null}
            {loss || all ? <Loss /> : null}
            {position || all ? <Position /> : null}
            {target || all ? <Target /> : null}
          </Body.Objectives>
        </Body.LowerContent>
      </Body.Back>
    </Styles.Wrap>
  )
}
// TODO: update the titles of these to purge the enemy etc...
const Styles = {
  Wrap: styled.main``,
}

const Body = {
  Back: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    background: ${(props) => (props.darkMode ? 'black' : 'white')};
    background-size: cover;
  `,
  TopContent: styled.div``,
  TopBlurb: styled.p``,
  CheckBoxes: styled.div``,
  LowerContent: styled.div``,
  Objectives: styled.div``,
}
