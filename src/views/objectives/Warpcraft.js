import React from 'react'
import { HeaderThree, HeaderFive } from '../../components'

export const Warpcraft = () => {
  return (
    <div>
      <HeaderThree>Warpcraft</HeaderThree>
      <ul>
        <li>
          <HeaderFive>Mental Interrogation</HeaderFive>
          <p>Progressive Objective</p>
          <p>
            scores 3 VP each time you successfully complete the following
            psychic action: Mental Interrogation(Psychic Action - Warp Charge
            4): One Psyker Character from your army can attempt to perfrom this
            action in your Psychic phase if it is within 18" of any enemy
            Character models
          </p>
        </li>

        <li>
          <HeaderFive>Psychic Ritual</HeaderFive>
          <p>End Game Objective</p>
          <p>
            score 15 vp at the end of the battle if any unit from your army
            successfully completed the following psychic action 3 times during
            the battle: Psychic Ritual (Psychic Action - Warp Charge 3): One
            Psyker character unit from your army can attempt to perform this
            psychic action in your Psychic phase if it is within 6" of the
            centre of the battlefield.
          </p>
        </li>

        <li>
          <HeaderFive>Abhor The Witch</HeaderFive>
          <p>End Game Objective</p>
          <p>
            You cannot select this secondary objective if your army includes any
            Psyker units. Score 5 vp at the end of the battle for each enemy
            Psyker Character unit that is destroyed, and 3 vp for every other
            eneymy Psykey unit that is destroyed.
          </p>
        </li>
      </ul>
    </div>
  )
}
