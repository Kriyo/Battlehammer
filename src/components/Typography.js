import styled from 'styled-components'
import { typeScale } from '../utils'

export const HeaderOne = styled.h1`
  font-size: ${(props) => (props.large ? typeScale.h1XL : typeScale.h1)};
  font-family: ${(props) => props.theme.secondaryFont};
  color: ${(props) => props.theme.largeHeadingTextColor};
  text-shadow: ${(props) => props.theme.textShadow};
`

export const HeaderTwo = styled.h2`
  font-size: ${(props) => (props.large ? typeScale.h2XL : typeScale.h2)};
  font-family: ${(props) => props.theme.secondaryFont};
  color: ${(props) => props.theme.largeHeadingTextColor};
  text-shadow: ${(props) => (props.large ? props.theme.textShadowXL : 'none')};
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

export const HeaderFive = styled.h5`
  font-size: ${typeScale.h5};
  font-family: ${(props) => props.theme.primaryFont};
  color: ${(props) => props.theme.largeHeadingTextColor};
`

export const Paragraph = styled.p`
  font-size: ${typeScale.p};
  font-family: ${(props) => props.theme.primaryFont};
  color: ${(props) => props.theme.textColor};
`

export const Helper = styled.p`
  font-size: ${typeScale.helper};
  font-family: ${(props) => props.theme.primaryFont};
  color: ${(props) => props.theme.textColor};
`

export const Copyright = styled.p`
  font-size: ${typeScale.copyright};
  font-family: ${(props) => props.theme.primaryFont};
  color: ${(props) => props.theme.textColor};
`
