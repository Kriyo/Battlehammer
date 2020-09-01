export const battlesTypes = [
  {
    key: 'combatPatrol',
    label: 'Combat Patrol',
    time: 'Up to 1 hour',
  },
  {
    key: 'incursion',
    label: 'Incursion',
    time: 'Up to 2 hours',
  },
  { key: 'strikeForce', label: 'Strike Force', time: 'Up to 3 hours' },
  { key: 'onslaught', label: 'Onslaught', time: 'Up to 4 hours' },
]

export const battleSize = [
  {
    battlefieldSize: '44" x 30"',
    commandPoints: 3,
    label: 'Combat Patrol',
    powerLevel: '0-50',
    points: '0-500',
  },
  {
    battlefieldSize: '44" x 30"',
    commandPoints: 6,
    label: 'Incursion',
    powerLevel: '51-100',
    points: '501-1000',
  },
  {
    battlefieldSize: '44" x 60"',
    commandPoints: 12,
    label: 'Strike Force',
    powerLevel: '101-200',
    points: '1001-2000',
  },
  {
    battlefieldSize: '44" x 90"',
    commandPoints: 18,
    label: 'Onslaught',
    powerLevel: '201-300',
    points: '2001-3000',
  },
]

export const missionOpts = {
  combatPatrol: [
    { dice: '1-2', label: 'Incisive Attack' },
    {
      dice: '3-4',
      label: 'Outriders',
    },
    { dice: '5-6', label: 'Encircle' },
  ],
  incursion: [
    { dice: '1', label: 'Divide and Conquer' },
    { dice: '2', label: 'Crossfire' },
    { dice: '3', label: 'Centre Ground' },
    { dice: '4', label: 'Forward Push' },
    { dice: '5', label: 'Ransack' },
    { dice: '6', label: 'Shifting Front' },
  ],
  strikeForce: [
    { dice: '1', label: 'Retrieval Mission' },
    { dice: '2', label: 'Front-line Warfare' },
    { dice: '3', label: 'The Four Pillars' },
    { dice: '4', label: 'No Mans Land' },
    { dice: '5', label: 'Scorched Earth' },
    { dice: '6', label: 'Vital Intelligence' },
  ],
  onslaught: [
    { dice: '1-2', label: 'Lines of Battle' },
    { dice: '3-4', label: 'All-out War' },
    { dice: '5-6', label: 'Pathway to Glory' },
  ],
}
