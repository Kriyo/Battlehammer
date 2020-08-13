import React from 'react'
import { HeaderOne, NavBar } from '../components'
import { Player } from '../components/Player'

export const Dashboard = ({ location, modeType, swapTheme }) => {
  const players = ['Player 1', 'Player 2']
  const buildPlayers = players.map((p) => <Player key={p} label={p} />)

  return (
    <div>
      <NavBar location={location} modeType={modeType} swapTheme={swapTheme} />

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <HeaderOne label="Dashboard" />
        {buildPlayers}
      </div>
    </div>
  )
}
