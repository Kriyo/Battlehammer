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
    background: #5264ae;
  }
  100% {
    width: 0;
    background: transparent;
  }
`

export const Input = styled.input`
  font-size: ${typeScale.paragraph};
  font-family: ${primaryFont};
  ${applyStyleModifiers(INPUT_MODIFIERS)};
  padding: 10px 10px 10px 5px;
  display: block;
  width: 300px;
  border: none;
  border-bottom: 1px solid #757575;
  &:focus {
    outline: none;
  }

  &:focus ~ label,
  &:valid ~ label {
    top: -20px;
    font-size: 14px;
    color: #5264ae;
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
}
`
