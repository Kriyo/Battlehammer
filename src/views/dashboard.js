import React from 'react'
import { HeaderOne, NavBar } from '../components'
import { Player } from '../components/Player'

export const Dashboard = ({ modeType, swapTheme }) => {
  const players = ['Player 1', 'Player 2']
  const buildPlayers = players.map((p) => <Player key={p} label={p} />)

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <NavBar modeType={modeType} swapTheme={swapTheme} />
      <HeaderOne label="Dashboard" />
      {buildPlayers}
    </div>
  )
}
