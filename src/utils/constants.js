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
      secondary: { label: 'Surgical Assault', value: 'surgicalAssault' },
      value: 'incisiveAttack',
    },
    {
      dice: '3-4',
      label: 'Outriders',
      secondary: { label: 'Survey', value: 'survey' },
      value: 'outriders',
    },
    {
      dice: '5-6',
      label: 'Encircle',
      secondary: { label: 'Encircle', value: 'encircle' },
      value: 'encircle',
    },
  ],
  incursion: [
    {
      dice: '1',
      label: 'Divide and Conquer',
      secondary: { label: 'Lines of Demarcation', value: 'linesOfDemarcation' },
      value: 'divideAndConquer',
    },
    {
      dice: '2',
      label: 'Crossfire',
      secondary: { label: 'Outflank', value: 'outflank' },
      value: 'crossfire',
    },
    {
      dice: '3',
      label: 'Centre Ground',
      secondary: { label: 'Centre Ground', value: 'centreGround' },
      value: 'centreGround',
    },
    {
      dice: '4',
      label: 'Forward Push',
      secondary: { label: 'Forward Push', value: 'forwardPush' },
      value: 'forwardPush',
    },
    {
      dice: '5',
      label: 'Ransack',
      secondary: { label: 'Ransack', value: 'ransack' },
      value: 'ransack',
    },
    {
      dice: '6',
      label: 'Shifting Front',
      secondary: { label: 'Test Their Line', value: 'testTheirLine' },
      value: 'shiftingFront',
    },
  ],
  strikeForce: [
    {
      dice: '1',
      label: 'Retrieval Mission',
      secondary: { label: 'Minimise Losses', value: 'minimiseLosses' },
      value: 'retrievalMission',
    },
    {
      dice: '2',
      label: 'Front-line Warfare',
      secondary: { label: 'Vital Ground', value: 'vitalGround' },
      value: 'frontLineWarfare',
    },
    {
      dice: '3',
      label: 'The Four Pillars',
      secondary: { label: 'Siphon Power', value: 'siphonPower' },
      value: 'theFourPillars',
    },
    {
      dice: '4',
      label: 'No Mans Land',
      secondary: { label: 'Secure No Mans Land', value: 'secureNoMansLand' },
      value: 'noMansLand',
    },
    {
      dice: '5',
      label: 'Scorched Earth',
      secondary: { label: 'Raze', value: 'raze' },
      value: 'scorchedEarth',
    },
    {
      dice: '6',
      label: 'Vital Intelligence',
      secondary: { label: 'Data Intercept', value: 'dataIntercept' },
      value: 'vitalIntelligence',
    },
  ],
  onslaught: [
    {
      dice: '1-2',
      label: 'Lines of Battle',
      secondary: { label: 'Hold the Centre', value: 'holdTheCentre' },
      value: 'linesOfBattle',
    },
    {
      dice: '3-4',
      label: 'All-out War',
      secondary: { label: 'Surround Them', value: 'surroundThem' },
      value: 'allOutWar',
    },
    {
      dice: '5-6',
      label: 'Pathway to Glory',
      secondary: {
        label: 'Search for the Portal',
        value: 'searchForThePortal',
      },
      value: 'pathwayToGlory',
    },
  ],
}
