import React from 'react'
// eslint-disable-next-line no-unused-vars
import styles from './styles.css'

export const Loss = () => {
  return (
    <div>
      <ul>
        <li>
          <h4>Attrition</h4>
          <p>
            is a progressive objective that scores 4 VP in a battle round in
            which you destroy more enemy units than you lost friendly units. 4
            VP is an unusual number; you have to destroy more units than you
            lose for four (out of a possible five) turns to get the maximum of
            15.
          </p>
        </li>

        <li>
          <h4>While We Stand, We Fight</h4>
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
          <h4>First Strike</h4>
          <p>
            scores 5 VP if any enemy units were destroyed in the first round,
            and an extra 3 VP if more enemy units than friendly units were
            destroyed. No matter what you sacrifice 7 potential points by taking
            this objective.
          </p>
        </li>

        <li>
          <h4>Minimize Losses</h4>
          <p>
            is from Retrieval Mission and provides you with VP based on how much
            of your army survives the fight.
          </p>
        </li>
      </ul>
    </div>
  )
}
