import styled from 'styled-components'
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

export const Input = styled.input`
  font-size: ${typeScale.paragraph};
  font-family: ${primaryFont};
  ${applyStyleModifiers(INPUT_MODIFIERS)};
`
