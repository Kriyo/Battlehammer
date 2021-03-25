import React from 'react'
import { useIdentityContext } from 'react-netlify-identity'
import styled from 'styled-components/macro'
import { useLocallyPersistedReducer } from '../utils'
import { defaultGamesState } from '../utils/constants'
import { HeaderOne, HeaderThree, NavBar, PlayerScoreCard } from '../components'

export const Profile = ({
  darkMode,
  location,
  modeType,
  showModal,
  swapTheme,
}) => {
  // eslint-disable-next-line no-unused-vars
  const [games, setGames] = useLocallyPersistedReducer(
    defaultGamesState,
    'previousGames'
  )
  const identity = useIdentityContext()
  const { full_name: fullName } = identity.user.user_metadata

  const buildPreviousGames = () => {
    const { previous } = games
    if (previous.length > 0) {
      return previous.map((game) => {
        return <PlayerScoreCard id={game.id} game={game} />
      })
    }

    return <p>No Previous Games</p>
  }
  return (
    <Styles.Wrap>
      <NavBar
        darkMode={darkMode}
        location={location}
        modeType={modeType}
        showModal={showModal}
        swapTheme={swapTheme}
      />
      <Styles.Content>
        <HeaderOne>Profile for {fullName}</HeaderOne>
        <HeaderThree>Previous Games:</HeaderThree>
        <Styles.CardContainer>{buildPreviousGames()}</Styles.CardContainer>
      </Styles.Content>
    </Styles.Wrap>
  )
}

const Styles = {
  Wrap: styled.main``,
  Content: styled.main`
    display: flex;
    flex-direction: column;
    background: ${(props) => props.theme.backgroundColor};
    padding: 0rem 10rem;
    @media only screen and (max-width: 40em) {
      padding: 5rem 1rem;
    }
  `,
  CardContainer: styled.main`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
  `,
}
