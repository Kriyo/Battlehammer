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
      <Styles.Header>
        <HeaderOne>Dashboard</HeaderOne>
      </Styles.Header>
      <Styles.Content>
        <Styles.Players>{buildPlayers}</Styles.Players>
      </Styles.Content>
    </Styles.Wrap>
  )
}

const Styles = {
  Wrap: styled.main``,
  Content: styled.div`
    display: flex;
    flex-direction: column;
    background: ${(props) => props.theme.backgroundColor};
    padding: 0rem 10rem;
    @media only screen and (max-width: 40em) {
      padding: 5rem 1rem;
    }
  `,
  Header: styled.div`
    display: flex;
    justify-content: center;
    background: ${(props) => props.theme.backgroundColor};
  `,
  Players: styled.div`
    display: flex;
    justify-content: space-around;
    @media only screen and (max-width: 40em) {
      flex-direction: column;
      justify-content: center;
    }
  `,
}
