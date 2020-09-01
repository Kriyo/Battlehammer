export const battleTypes = [
  {
    value: 'combatPatrol',
    label: 'Combat Patrol',
    time: 'Up to 1 hour',
  },
  {
    value: 'incursion',
    label: 'Incursion',
    time: 'Up to 2 hours',
  },
  { value: 'strikeForce', label: 'Strike Force', time: 'Up to 3 hours' },
  { value: 'onslaught', label: 'Onslaught', time: 'Up to 4 hours' },
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
    {
      dice: '1-2',
      label: 'Incisive Attack',
      secondary: 'Surgical Assault',
      value: 'surgicalAssault',
    },
    {
      dice: '3-4',
      label: 'Outriders',
      secondary: 'Survey',
      value: 'survey',
    },
    {
      dice: '5-6',
      label: 'Encircle',
      secondary: 'Encircle',
      value: 'encircle',
    },
  ],
  incursion: [
    {
      dice: '1',
      label: 'Divide and Conquer',
      secondary: 'Lines of Demarcation',
      value: 'linesOfDemarcation',
    },
    { dice: '2', label: 'Crossfire', secondary: 'Outflank', value: 'outflank' },
    {
      dice: '3',
      label: 'Centre Ground',
      secondary: 'Centre Ground',
      value: 'centreGround',
    },
    {
      dice: '4',
      label: 'Forward Push',
      secondary: 'Forward Push',
      value: 'forwardPush',
    },
    { dice: '5', label: 'Ransack', secondary: 'Ransack', value: 'ransack' },
    {
      dice: '6',
      label: 'Shifting Front',
      secondary: 'Test Their Line',
      value: 'testTheirLine',
    },
  ],
  strikeForce: [
    {
      dice: '1',
      label: 'Retrieval Mission',
      secondary: 'Minimise Losses',
      value: 'minimiseLosses',
    },
    {
      dice: '2',
      label: 'Front-line Warfare',
      secondary: 'Vital Ground',
      value: 'vitalGround',
    },
    {
      dice: '3',
      label: 'The Four Pillars',
      secondary: 'Siphon Power',
      value: 'siphonPower',
    },
    {
      dice: '4',
      label: 'No Mans Land',
      secondary: 'Secure No Mans Land',
      value: 'secureNoMansLand',
    },
    { dice: '5', label: 'Scorched Earth', secondary: 'Raze', value: 'raze' },
    {
      dice: '6',
      label: 'Vital Intelligence',
      secondary: 'Data Intercept',
      value: 'dataIntercept',
    },
  ],
  onslaught: [
    {
      dice: '1-2',
      label: 'Lines of Battle',
      secondary: 'Hold the Centre',
      value: 'holdTheCentre',
    },
    {
      dice: '3-4',
      label: 'All-out War',
      secondary: 'Surround Them',
      value: 'surroundThem',
    },
    {
      dice: '5-6',
      label: 'Pathway to Glory',
      secondary: 'Search for the Portal',
      value: 'searchForThePortal',
    },
  ],
}
