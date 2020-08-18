import { useEffect, useReducer } from 'react'

// Customer useReducer fn for using localStorage as a means of persistence.
export const useLocallyPersistedReducer = (
  defaultState,
  storageKey,
  init = null
) => {
  const reducer = (prevState, updatedProperty) => {
    return updatedProperty.reset
      ? defaultState
      : { ...prevState, ...updatedProperty }
  }

  const hookVars = useReducer(reducer, defaultState, () => {
    const persisted = JSON.parse(localStorage.getItem(storageKey))
    // eslint-disable-next-line no-nested-ternary
    return persisted !== null
      ? persisted
      : init !== null
      ? init(defaultState)
      : defaultState
  })

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(hookVars[0]))
  }, [hookVars, storageKey])

  return hookVars
}
