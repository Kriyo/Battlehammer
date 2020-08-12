import React, { useReducer } from 'react'

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

export const ObjectivesList = () => {
  const [state, setState] = useReducer(reducer, defaultState)

  const handleChange = (e) => {
    setState({ [e.target.name]: e.target.checked })
  }
  const buildCheckboxes = () => {
    return objectiveTypes.map((obj) => (
      <label htmlFor={`${obj}`}>
        {obj.charAt(0).toUpperCase() + obj.slice(1)}
        <input
          type="checkbox"
          name={`${obj}`}
          checked={state[obj]}
          onChange={handleChange}
        />
      </label>
    ))
  }

  const buildActionObjs = () => {
    if (state.action || state.all) {
      return <Action />
    }
    return null
  }

  const buildLossObjs = () => {
    if (state.loss || state.all) {
      return <Loss />
    }
    return null
  }
  const buildPositionObjs = () => {
    if (state.position || state.all) {
      return <Position />
    }
    return null
  }
  const buildTargetObjs = () => {
    if (state.target || state.all) {
      return <Target />
    }
    return null
  }

  return (
    <div>
      <h2>Objectives</h2>
      <div>{buildCheckboxes()}</div>
      {buildActionObjs()}
      {buildLossObjs()}
      {buildPositionObjs()}
      {buildTargetObjs()}
    </div>
  )
}
