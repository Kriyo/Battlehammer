import styled, { keyframes } from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'
import { primaryFont, typeScale } from '../utils'

const INPUT_MODIFIERS = {
  small: () => `
    font-size: ${typeScale.helper};
  `,
  large: () => `
    font-size: ${typeScale.h5};
  `,
}

const inputHighlighter = keyframes`
  0% {
    background: ${(props) => props.theme.buttonText};
  }
  100% {
    width: 0;
    background: transparent;
  }
`

export const Input = styled.input`
  font-size: ${typeScale.paragraph};
  font-family: ${primaryFont};
  padding: 10px 10px 10px 5px;
  display: block;
  width: 300px;
  background: none;
  color:  ${(props) => props.theme.textColorOnPrimary};
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.strokeColor};
  &:focus {
    outline: none;
  }

  &:focus ~ label,
  &:valid ~ label {
    top: -20px;
    font-size: 14px;
    color: ${(props) => props.theme.buttonText};
  }
  &:focus ~ .bar:before,
  &:focus ~ .bar:after {
    width: 50%;
  }
  &:focus ~ .highlight {
  -webkit-animation: ${inputHighlighter} 0.3s ease;
  -moz-animation: ${inputHighlighter} 0.3s ease;
  animation: ${inputHighlighter} 0.3s ease;
  }
  
  ${applyStyleModifiers(INPUT_MODIFIERS)};
}
`
