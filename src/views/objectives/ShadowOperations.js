import React from 'react'
import { HeaderThree, HeaderFive } from '../../components'

export const ShadowOperations = () => {
  return (
    <div>
      <HeaderThree>Shadow Operations</HeaderThree>
      <ul>
        <li>
          <HeaderFive>Investigate Sites</HeaderFive>
          <p>Progressive Objective</p>
          <p>
            grants you 3 VP for every turn in which a non-CHARACTER unit with
            the INFANTRY keyword performs an action within 6″ of the middle of
            the battlefield and there are no non-AIRCRAFT enemy units in the
            same area.
          </p>
        </li>
        <li>
          <HeaderFive>Repair Teleport Homer</HeaderFive>
          <p>Progressive Objective</p>
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
          <HeaderFive>Raise the Banners High</HeaderFive>
          <p>Progressive and End Game Objective</p>
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
          <HeaderFive>
            Centre Ground, Raze, Data Intercept, Search for the Portal, Siphon
            Power, and Forward Push
          </HeaderFive>
          <p>Progressive Objective</p>
          <p>
            score you VP if you perform an action near specific objective
            markers from the mission.
          </p>
        </li>
      </ul>
    </div>
  )
}
