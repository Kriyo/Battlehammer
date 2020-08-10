import React from 'react'
import { HeaderOne } from '../components'
import { Player } from './player'

export const Dashboard = () => {
  const players = ['Player 1', 'Player 2']
  const buildPlayers = players.map((p) => <Player key={p} label={p} />)

  return (
    <div>
      <HeaderOne label="Dashboard" />
      {buildPlayers}
    </div>
  )
}
