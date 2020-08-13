import React from 'react'
import styled from 'styled-components'

import { darkTheme, typeScale } from '../utils'

export const HeaderOne = styled.h1`
  font-size: ${typeScale.h1};
  font-family: ${(props) => props.theme.secondaryFont};
  color: ${(props) => props.theme.largeHeadingTextColor};
  text-shadow: ${(props) => props.theme.textShadow};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`

export const HeaderFour = ({ label }) => (
  <h4
    style={{
      color: 'black',
      fontFamily: `${darkTheme.secondaryFont}`,
      fontSize: darkTheme.typeScale.h4,
    }}
  >
    {label}
  </h4>
)
