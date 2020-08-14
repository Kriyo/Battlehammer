import styled from 'styled-components'

import { typeScale } from '../utils'

export const HeaderOne = styled.h1`
  font-size: ${typeScale.h1};
  font-family: ${(props) => props.theme.secondaryFont};
  color: ${(props) => props.theme.largeHeadingTextColor};
  text-shadow: ${(props) => props.theme.textShadow};
`

export const HeaderTwo = styled.h2`
  font-size: ${typeScale.h2};
  font-family: ${(props) => props.theme.secondaryFont};
  color: ${(props) => props.theme.largeHeadingTextColor};
`

export const HeaderThree = styled.h3`
  font-size: ${typeScale.h3};
  font-family: ${(props) => props.theme.secondaryFont};
  color: ${(props) => props.theme.largeHeadingTextColor};
`

export const HeaderFour = styled.h4`
  font-size: ${typeScale.h4};
  font-family: ${(props) => props.theme.secondaryFont};
  color: ${(props) => props.theme.largeHeadingTextColor};
`
