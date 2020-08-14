import React from 'react'
import { HeaderThree, HeaderFive } from '../../components'

export const BattlefieldSupremacy = () => {
  return (
    <div>
      <HeaderThree>Battlefield Supremacy</HeaderThree>
      <ul>
        <li>
          <HeaderFive>Engage on All Fronts</HeaderFive>
          <p>Progressive Objective</p>
          <p>
            scores VP if you have units wholly within three quarters (2 VP) or
            all four quarters (3 VP) and more than 6″ away from the center of
            the battlefield. To maximize this score you would need to occupy all
            four quarters of the board for the entire game.
          </p>
        </li>

        <li>
          <HeaderFive>Linebreaker</HeaderFive>
          <p>Progressive Objective</p>
          <p>
            scores 4 VP at the end of every turn that you have non-AIRCRAFT
            models wholly within the enemy deployment zone; to maximize this
            score you would need to maintain a presence for 4 of the 5 possible
            turns.
          </p>
        </li>

        <li>
          <HeaderFive>Domination</HeaderFive>
          <p>Progressive Objective</p>
          <p>
            scores 3 VP if you control more than half of the objectives on the
            board (either 3 or 4 objectives) at the end of each turn. Given that
            all of the primary objectives are also objective based this is
            effectively doubling up on the core goals of the game. If you can
            achieve this objective then you’re likely going to win, as you’re
            also denying your opponent 5 VP per turn by virtue of controlling
            enough objective markers to prevent them from achieving more than
            the bare minimum.
          </p>
        </li>

        <li>
          <HeaderFive>
            Surgical Assault, Survey, Outflank, Surround Them, Ransack, Secure
            No Man’s Land, Vital Ground, and Line of Demarcation
          </HeaderFive>
          <p>Progressive Objective</p>
          <p>
            provides VP if you control certain objectives specific to their
            particular missions.
          </p>
        </li>

        <li>
          <HeaderFive>Encircle and Test Their Line </HeaderFive>
          <p>Progressive Objective</p>
          <p>
            scores VP if you have units in particular locations on the board
            specific to the mission.
          </p>
        </li>

        <li>
          <HeaderFive>Hold the Centre</HeaderFive>
          <p>Progressive Objective</p>
          <p>
            is unique to the Lines of Battle mission and provides VP if you
            control certain objectives and have more models in the center of the
            board than your opponent.
          </p>
        </li>
      </ul>
    </div>
  )
}
