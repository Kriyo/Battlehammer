import React from 'react'
import styled from 'styled-components'
import { HeaderOne, NavBar } from '../components'
import { Player } from '../components/Player'

export const Dashboard = ({ darkMode, location, modeType, swapTheme }) => {
  const players = ['Player 1', 'Player 2']
  const buildPlayers = players.map((p) => <Player key={p} label={p} />)

  return (
    <Styles.Wrap>
      <NavBar
        darkMode={darkMode}
        modeType={modeType}
        swapTheme={swapTheme}
        location={location}
      />
      <Styles.Content>
        <HeaderOne>Dashboard</HeaderOne>
        <Styles.Players>{buildPlayers}</Styles.Players>
      </Styles.Content>
    </Styles.Wrap>
  )
}

const Styles = {
  Wrap: styled.main``,
  Content: styled.div``,
  Players: styled.div``,
}
// style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
