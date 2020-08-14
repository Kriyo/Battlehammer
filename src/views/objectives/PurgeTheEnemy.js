import React from 'react'
import { HeaderThree, HeaderFive } from '../../components'

export const PurgeTheEnemy = () => {
  return (
    <div>
      <HeaderThree>Purge The Enemy</HeaderThree>
      <ul>
        <li>
          <HeaderFive>Assassinate </HeaderFive>
          <p>End Game Objective</p>
          <p>
            scores 3 VP for every CHARACTER that is destroyed; if your opponent
            has less than 5 CHARACTER models then you’re effectively reducing
            your potential by 3 VP per missing target.
          </p>
        </li>

        <li>
          <HeaderFive>Bring It Down</HeaderFive>
          <p>End Game Objective</p>
          <p>
            scores 2 VP or 3 VP per MONSTER or VEHICLE model destroyed; the
            value depends on whether the target has a Wounds characteristic of
            11 or more.
          </p>
        </li>

        <li>
          <HeaderFive>Titan Slayers</HeaderFive>
          <p>End Game Objective</p>
          <p>
            gives you 10 VP if you destroy on TITANIC model, or 15 if you
            destroy two or more.
          </p>
        </li>

        <li>
          <HeaderFive>Slay the Warlord</HeaderFive>
          <p>End Game Objective</p>
          <p>
            gives you 6 VP if the enemy WARLORD is destroyed; by taking this
            objective you immediately sacrifice 9 potential victory points.
          </p>
        </li>
      </ul>
    </div>
  )
}
