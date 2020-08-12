import React from 'react'
// eslint-disable-next-line no-unused-vars
import styles from './styles.css'

export const Position = () => {
  return (
    <div>
      <ul>
        <li>
          <h4>Engage on All Fronts</h4>
          <p>
            scores VP if you have units wholly within three quarters (2 VP) or
            all four quarters (3 VP) and more than 6″ away from the center of
            the battlefield. To maximize this score you would need to occupy all
            four quarters of the board for the entire game.
          </p>
        </li>

        <li>
          <h4>Linebreaker</h4>
          <p>
            scores 4 VP at the end of every turn that you have non-AIRCRAFT
            models wholly within the enemy deployment zone; to maximize this
            score you would need to maintain a presence for 4 of the 5 possible
            turns.
          </p>
        </li>

        <li>
          <h4>Domination</h4>
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
          <h4>
            Surgical Assault, Survey, Outflank, Surround Them, Ransack, Secure
            No Man’s Land, Vital Ground, and Line of Demarcation
          </h4>
          <p>
            provides VP if you control certain objectives specific to their
            particular missions.
          </p>
        </li>

        <li>
          <h4>Encircle and Test Their Line </h4>
          <p>
            scores VP if you have units in particular locations on the board
            specific to the mission.
          </p>
        </li>

        <li>
          <h4>Hold the Centre</h4>
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
