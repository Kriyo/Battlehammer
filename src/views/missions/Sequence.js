import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import {
  HeaderThree,
  HeaderFour,
  HeaderFive,
  Paragraph,
} from '../../components'

export const Sequence = ({ battles, battleSize, missions }) => {
  const buildBattlesTable = () => (
    <StyledTable>
      <thead>
        <tr>
          <td>Battle Size</td>
          <td>Battle Duration</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          {battles.map((battle) => (
            <tr>
              <td>{battle.label}</td>
              <td>{battle.time}</td>
            </tr>
          ))}
        </tr>
      </tbody>
    </StyledTable>
  )

  const buildBattleSizeTable = () => (
    <table>
      <thead>
        <tr>
          <td>Battle Size</td>
          <td>Points Limit</td>
          <td>Power Level Limit</td>
          <td>Command Points</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          {battleSize.map((battle) => (
            <tr>
              <td>{battle.label}</td>
              <td>{battle.points}</td>
              <td>{battle.powerLevel}</td>
              <td>{battle.commandPoints}</td>
            </tr>
          ))}
        </tr>
      </tbody>
    </table>
  )

  const buildMissionTable = (key) => (
    <table>
      <thead>
        <tr>
          <td>D6</td>
          <td>Mission</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          {missions[key].map((mission) => (
            <tr>
              <td>{mission.dice}</td>
              <td>{mission.label}</td>
            </tr>
          ))}
        </tr>
      </tbody>
    </table>
  )

  const buildMissions = () =>
    battles.map((battle) => (
      <div>
        <HeaderFive>{battle.label} Missions</HeaderFive>
        {buildMissionTable(battle.key)}
      </div>
    ))

  return (
    <Styles.Sequence>
      <HeaderThree>Mission Sequence</HeaderThree>
      <Paragraph>
        An Eternal War battle is waged by following the sequence below:
      </Paragraph>

      <div>
        <HeaderFour>1. Select Battle Size</HeaderFour>
        <Paragraph>
          The players must first select the battle size they wish to play:
          Combat Patrol, Incursion, Strike Force or Onslaught. The table below
          gives a rough guide of how long each should take.
        </Paragraph>
        {buildBattlesTable()}
      </div>

      <div>
        <HeaderFour>2. Muster Armies</HeaderFour>
        <Paragraph>
          Each player must then select a Battle-forged army. The points limit of
          each players' army, and the number of Command points each player
          starts with when they begin mustering their army, are shown in the
          table below.
        </Paragraph>
        {buildBattleSizeTable()}
      </div>
      <div>
        <HeaderFour>3. Determine Mission</HeaderFour>
        <Paragraph>
          The players determine which mission will be used for the battle; they
          can choose from the missions for their chosen battle size. This will
          determine the deployment map that the players use, as well as the
          specific mission briefing. You can either simply agree with your
          opponent which you will use, or you can roll to randomly select a
          mssion using one of the following tables.
        </Paragraph>
        {buildMissions()}
      </div>
      <div>
        <HeaderFour>4. Read Mission Briefing</HeaderFour>
        <Paragraph>
          Each mission has a mission briefing that will detail the primary
          objectives that award victory points to the players. Some missions may
          also include one or more secondary objectives that players can choose
          to select during the Select Secondary Objectives step. Some mission
          briefings also list one or more mission rules that will apply for the
          duration of the battle. The players should read and familiarise
          themselves with these before proceeding.
        </Paragraph>
      </div>
      <div>
        <HeaderFour>5. Place Objective Markers</HeaderFour>
        <Paragraph>
          The players now set objective markers up on the battlefield. Each
          missions' deployment map will show the players how many to set up, and
          where each should be placed.
        </Paragraph>
      </div>
      <div>
        <HeaderFour>6. Create The Battlefield</HeaderFour>
        <Paragraph>
          The players now create the battlefield and set up terrain features.
          Missions are played on rectangular battlefields. The size of your
          battlefield depends on the battle size you have selected, as shown in
          the table below (the table shows the minimum size of battlefields):
        </Paragraph>
      </div>
      <div>
        <HeaderFour>7. Select Secondary Objectives</HeaderFour>
        <Paragraph>
          Each player then secretly selects three secondary objectives for the
          battle and writes them down. Each can award victory points to the
          player who chose them. The secondary objectives that players can
          choose from can be found in the{' '}
          <Link to="/objectives">objectives</Link> section, though some missions
          will include secondary objectives the players can also choose from.
          Once both players have selected their secondary objectives, they
          reveal their selections to their opponent.
        </Paragraph>
      </div>
      <div>
        <HeaderFour>8. Determine Attacker And Defender</HeaderFour>
        <Paragraph>
          The players roll off and the winner decides who will be the Attacker
          and who will be the Defender.
        </Paragraph>
      </div>
      <div>
        <HeaderFour>9. Choose Deployment Zone</HeaderFour>
        <Paragraph>
          The Defender now selects one of the deployment zones for their army.
          THeir opponent uses the other deployment zone.
        </Paragraph>
      </div>

      <div>
        <HeaderFour>10. Declare Reserves and Transports</HeaderFour>
        <Paragraph>
          These missions use the Strategic Reserves rules (pg 256 of Core book).
        </Paragraph>
        <Paragraph>
          Both players now secretly note down on their army roster which of the
          units in their army will start the battle in Strategic Reserves, which
          of their units will start the battle in a location other than the
          battlefield (if a player has access to any Stratagems that enable them
          to set up units from their army in a location other than the
          battlefield, the must use such Stratagems now), and which of their
          units will start the battle embarked within Transport models (they
          must declare what units are embarked on what model). When both players
          have done so, they declare their selections to their opponent.
        </Paragraph>
        <Paragraph>
          No more than half the total number of units in your army can be
          Strategic Reserve and/or Reinforcement units, and the combined points
          value of all your Strategic Reserve and Reinforcement units (including
          those embarked within Transport models that are Strategic Reserve
          and/or Reinforcement units) must be less than half of your army's
          total points value, even if every unit in your army has an ability
          that would allow them to be set up elsewhere.
        </Paragraph>
        <Paragraph>
          In Eternal War missions, Strategic Reserve and Reinforcement units can
          never arrive on the battlefield in the first battle round. Any
          Strategic Reserve or Reinforcement unit that has not arrived on the
          battlefield by the end of the third battle round counts as having been
          destroyed, as do any units embarked within them (this does not apply
          to units that are placed into Strategic Reserves after the first
          battle round has started).
        </Paragraph>
      </div>
      <div>
        <HeaderFour>11. Deploy Armies</HeaderFour>
        <Paragraph>
          The players alternate setting up their remaining units, one at a time,
          starting with the Defender. A player's models must be set up wholly
          within their deployment zone. If one player finishes deploying all
          their units, their opponent then deploys the remainder of their units.
        </Paragraph>
      </div>
      <div>
        <HeaderFour>12. Determine First Turn</HeaderFour>
        <Paragraph>
          The players roll off. The winner declares whether they will take the
          first or second turn.
        </Paragraph>
      </div>
      <div>
        <HeaderFour>13. Resolve Pre-Battle Abilities</HeaderFour>
        <Paragraph>
          Players alternate resolving any pre-battle abilities units in their
          army may have, and resolving any Stratagems that are used before the
          battle (excluding those that upgrade their units or those that enable
          them to set up a unit in a location other than the battlefield),
          starting with the player who will take the first turn.
        </Paragraph>
      </div>
      <div>
        <HeaderFour>14. Begin The Battle</HeaderFour>
        <Paragraph>
          The first battle round begins. Players continue to resolve battle
          rounds until the battle ends.
        </Paragraph>
      </div>
      <div>
        <HeaderFour>15. Ending The Battle</HeaderFour>
        <Paragraph>
          The battle ends after five battle rounds have been completed. If one
          player has no models remaining in their army at the start of their
          turn, the other player may continue to play out their turns until the
          battle ends.
        </Paragraph>
      </div>
      <div>
        <HeaderFour>16. Determine Victor</HeaderFour>
        <Paragraph>
          At the end of the battle, the player with the most victory points is
          the winner. If players are tied, the battle is a draw.
        </Paragraph>
        <Paragraph>
          Each player can score a maximum of 45 victory points from a primary
          objective and a maximum of 45 victory points from secondary objectives
          (from a maximum of 15 victory points from each fo the 3 secondary
          objectives you have selected), for a total of 90 possible victory
          points from mission objectives (any excess victory points awarded are
          discounted). If every model in a player's army was painted to a Battle
          Ready standard, that player is awarded a bonus 10 victory points. This
          gives the player a maximum total score out of 100 victory points.
        </Paragraph>
      </div>
    </Styles.Sequence>
  )
}

const Styles = {
  Sequence: styled.main`
    width: 50%;
  `,
}

const StyledTable = styled.table``
