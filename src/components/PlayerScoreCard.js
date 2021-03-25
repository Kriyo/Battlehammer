import React from 'react'
import styled from 'styled-components/macro'

const calculateScore = ({ battleReady, primary, secondaries }) => {
  const additionalBRPoints = battleReady ? 10 : 0
  return additionalBRPoints + primary + secondaries
}

export const PlayerScoreCard = ({ game }) => {
  const { scores } = game
  const playerOne = scores[0]
  const playerTwo = scores[1]
  const playerOneTotalScore = calculateScore(playerOne)
  const playerTwoTotalScore = calculateScore(playerTwo)

  return (
    <Card.Wrapper>
      <Card.Header>
        <Card.FirstScore>
          <h1>{playerOneTotalScore}</h1>
        </Card.FirstScore>
        <Card.PlayerNames>
          <h1>
            {playerOne.name} vs {playerTwo.name}
          </h1>
        </Card.PlayerNames>
        <Card.SecondScore>
          <h1>{playerTwoTotalScore}</h1>
        </Card.SecondScore>
      </Card.Header>
      <Card.SubHeader>
        <h2>
          {playerOne.faction} - {playerTwo.faction}
        </h2>
      </Card.SubHeader>
      <Card.Breakdown>
        <h4>
          Primaries: {playerOne.primary} - {playerTwo.primary}
        </h4>
        <h4>
          Secondaries: {playerOne.secondaries} - {playerTwo.secondaries}
        </h4>
      </Card.Breakdown>
    </Card.Wrapper>
  )
}

const Card = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    background: ${(props) => props.theme.secondaryColor};
    color: ${(props) => props.theme.textColorOnSecondary};
    width: 30%;
    margin: 15px 0;
    @media only screen and (max-width: 40em) {
      width: 100%;
    }
  `,
  Header: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 36px;
    font-family: 'Squada One', sans-serif;
    border-bottom: 2px solid ${(props) => props.theme.primaryColor};
  `,
  FirstScore: styled.div`
    color: ${(props) => props.theme.primaryColor};
  `,
  SecondScore: styled.div`
    color: ${(props) => props.theme.primaryColor};
  `,
  PlayerNames: styled.div``,
  SubHeader: styled.div`
    margin: 0 auto;
  `,
  Breakdown: styled.div`
    text-align: center;
  `,
}
