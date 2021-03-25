import { cloneDeep } from 'lodash'

// Max amount of points for objectives is 45
export const getScore = (arr, key) => {
  const cloneArr = cloneDeep(arr)
  const currentScore = cloneArr.reduce((a, b) => a + (b[key] || 0), 0)
  return currentScore >= 45 ? 45 : currentScore
}

export const getTotalScore = (player) => {
  const { battleReady, primaries, secondaries } = player
  const p = getScore(primaries, 'current')
  const s = getScore(secondaries, 'current')
  const br = battleReady ? 10 : 0
  return p + s + br
}
