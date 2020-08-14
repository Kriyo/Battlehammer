import React from 'react'
import { HeaderThree, HeaderFive, Paragraph } from '../../components'

export const Warpcraft = () => {
  return (
    <div>
      <HeaderThree>Warpcraft</HeaderThree>
      <ul>
        <li>
          <HeaderFive>Mental Interrogation</HeaderFive>
          <Paragraph>Progressive Objective</Paragraph>
          <Paragraph>
            scores 3 VP each time you successfully complete the following
            psychic action: Mental Interrogation(Psychic Action - Warp Charge
            4): One Psyker Character from your army can attempt to perfrom this
            action in your Psychic phase if it is within 18" of any enemy
            Character models
          </Paragraph>
        </li>

        <li>
          <HeaderFive>Psychic Ritual</HeaderFive>
          <Paragraph>End Game Objective</Paragraph>
          <Paragraph>
            score 15 vp at the end of the battle if any unit from your army
            successfully completed the following psychic action 3 times during
            the battle: Psychic Ritual (Psychic Action - Warp Charge 3): One
            Psyker character unit from your army can attempt to perform this
            psychic action in your Psychic phase if it is within 6" of the
            centre of the battlefield.
          </Paragraph>
        </li>

        <li>
          <HeaderFive>Abhor The Witch</HeaderFive>
          <Paragraph>End Game Objective</Paragraph>
          <Paragraph>
            You cannot select this secondary objective if your army includes any
            Psyker units. Score 5 vp at the end of the battle for each enemy
            Psyker Character unit that is destroyed, and 3 vp for every other
            eneymy Psykey unit that is destroyed.
          </Paragraph>
        </li>
      </ul>
    </div>
  )
}
