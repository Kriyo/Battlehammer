import React from 'react'
// eslint-disable-next-line no-unused-vars
import styles from './styles.css'

export const Action = () => {
  return (
    <div>
      <ul>
        <li>
          <h4>Investigate Sites</h4>
          <p>
            grants you 3 VP for every turn in which a non-CHARACTER unit with
            the INFANTRY keyword performs an action within 6″ of the middle of
            the battlefield and there are no non-AIRCRAFT enemy units in the
            same area.
          </p>
        </li>
        <li>
          <h4>Repair Teleport Homer</h4>
          <p>
            scores 5 VP if an INFANTRY unit is wholly within the opponent’s
            deployment zone, performs an Action, and remains in the deployment
            zone until the player’s next Command phase. The requirement to last
            until the Command phase means there are only three opportunities to
            perform this task, and since an action is involved it can only be
            attempted once per turn.
          </p>
        </li>
        <li>
          <h4>Raise the Banners High</h4>
          <p>
            is a progressive and end game objective based around performing an
            action around an objective marker which does not have any enemy
            units around it. The Raise Banners action is unusual in that it can
            be performed by multiple units at the same time (around different
            objectives). At the end of every Command phase (and the end of the
            game) after the action is performed (assuming the objective is not
            controlled by the opponent) you gain 1 VP. The combination of
            objective-based gameplay, persistent scoring, and large number of
            opportunities to score make this one of the more viable objectives
            to achieve 15 VP, but still challenging.
          </p>
        </li>
        <li>
          <h4>Metal Interrogation</h4>
          <p>
            requires a Psyker to perform a Psychic Action within 18″ of an enemy
            CHARACTER; every successful attempt scores 3 VP.
          </p>
        </li>

        <li>
          <h4>Psychic Ritual</h4>
          <p>
            scores 15 VP at the end of the battle if the same unit performs the
            same Psychic Action three times while within 6″ of the center of the
            battlefield. This is an unusual all-or-nothing objective which has
            the potential to swing the game decisively.
          </p>
        </li>

        <li>
          <h4>
            Centre Ground, Raze, Data Intercept, Search for the Portal, Siphon
            Power, and Forward Push
          </h4>
          <p>
            score you VP if you perform an action near specific objective
            markers from the mission.
          </p>
        </li>
      </ul>
    </div>
  )
}
