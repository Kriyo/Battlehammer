import React from 'react'
import { darkTheme } from '../utils'

export const HeaderOne = ({ label }) => (
  <h1
    style={{
      color: 'white',
      fontFamily: `${darkTheme.secondaryFont}`,
      fontSize: darkTheme.typeScale.h1,
      textShadow:
        '0px 4px 3px rgba(0,0,0,0.4), 0px 8px 13px rgba(0,0,0,0.1), 0px 18px 23px rgba(0,0,0,0.1)',
    }}
  >
    {label}
  </h1>
)

export const HeaderFour = ({ label }) => (
  <h4
    style={{
      color: 'black',
      fontFamily: `${darkTheme.secondaryFont}`,
      fontSize: darkTheme.typeScale.h4,
      // textShadow:
      //   '0px 4px 3px rgba(0,0,0,0.4), 0px 8px 13px rgba(0,0,0,0.1), 0px 18px 23px rgba(0,0,0,0.1)',
    }}
  >
    {label}
  </h4>
)
