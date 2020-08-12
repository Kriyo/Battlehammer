import React from 'react'
// eslint-disable-next-line no-unused-vars
import styles from './styles.css'

export const Target = () => {
  return (
    <div>
      <ul>
        <li>
          <h4>Assassinate </h4>
          <p>
            scores 3 VP for every CHARACTER that is destroyed; if your opponent
            has less than 5 CHARACTER models then you’re effectively reducing
            your potential by 3 VP per missing target.
          </p>
        </li>

        <li>
          <h4>Bring It Down</h4>
          <p>
            scores 2 VP or 3 VP per MONSTER or VEHICLE model destroyed; the
            value depends on whether the target has a Wounds characteristic of
            11 or more.
          </p>
        </li>

        <li>
          <h4>Titan Slayers</h4>
          <p>
            gives you 10 VP if you destroy on TITANIC model, or 15 if you
            destroy two or more.
          </p>
        </li>

        <li>
          <h4>Slay the Warlord</h4>
          <p>
            gives you 6 VP if the enemy WARLORD is destroyed; by taking this
            objective you immediately sacrifice 9 potential victory points.
          </p>
        </li>
        <li>
          <h4>Thin Their Ranks</h4>
          <p>
            gives you 1 VP for every 10 models destroyed; every model with a
            Wounds characteristic of 10 or more that is destroyed is also worth
            1 VP. Note that this is model based, not Wound based, so a Custodes
            is worth as much as a grot. If your opponent has less than 150
            models (minus 10 per big model) then you cannot maximize this score.
          </p>
        </li>
        <li>
          <h4>Abhor the Witch</h4>
          <p>
            scores 5 VP for every PSYKER CHARACTER that is destroyed, and 3 VP
            for every other PSYKER unit destroyed.
          </p>
        </li>
      </ul>
    </div>
  )
}
