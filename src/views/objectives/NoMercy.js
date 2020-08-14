import React from 'react'
import { HeaderThree, HeaderFive } from '../../components'

export const NoMercy = () => {
  return (
    <div>
      <HeaderThree>No Mercy, No Respite</HeaderThree>
      <ul>
        <li>
          <HeaderFive>Thin Their Ranks</HeaderFive>
          <p>End Game Objective</p>
          <p>
            gives you 1 VP for every 10 models destroyed; every model with a
            Wounds characteristic of 10 or more that is destroyed is also worth
            1 VP. Note that this is model based, not Wound based, so a Custodes
            is worth as much as a grot. If your opponent has less than 150
            models (minus 10 per big model) then you cannot maximize this score.
          </p>
        </li>
        <li>
          <HeaderFive>Attrition</HeaderFive>
          <p>Progressive Objective</p>
          <p>
            is a progressive objective that scores 4 VP in a battle round in
            which you destroy more enemy units than you lost friendly units. 4
            VP is an unusual number; you have to destroy more units than you
            lose for four (out of a possible five) turns to get the maximum of
            15.
          </p>
        </li>

        <li>
          <HeaderFive>While We Stand, We Fight</HeaderFive>
          <p>End Game Objective</p>
          <p>
            requires that your three most valuable (non-Fortification) models
            survive. Each of those models that is on the battlefield at the end
            of the battle counts for 5 VP. It’s possible for a player who goes
            second to keep their three most expensive models in Strategic
            Reserves for the entire game, deploy them on Turn 5, and get a
            guaranteed 15 VP.
          </p>
        </li>

        <li>
          <HeaderFive>First Strike</HeaderFive>
          <p>End Game Objective</p>
          <p>
            scores 5 VP if any enemy units were destroyed in the first round,
            and an extra 3 VP if more enemy units than friendly units were
            destroyed. No matter what you sacrifice 7 potential points by taking
            this objective.
          </p>
        </li>

        <li>
          <HeaderFive>Minimize Losses</HeaderFive>
          <p>End Game Objective</p>
          <p>
            is from Retrieval Mission and provides you with VP based on how much
            of your army survives the fight.
          </p>
        </li>
      </ul>
    </div>
  )
}
