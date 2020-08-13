import styled from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'
import { typeScale } from '../utils'

const BUTTON_MODIFIERS = {
  tiny: () => `
    font-size: ${typeScale.copyright};
    padding: 8px;
    min-width: 55px;
  `,
  small: () => `
    font-size: ${typeScale.helper};
    padding: 8px;
  `,
  large: () => `
    font-size: ${typeScale.h5};
    padding: 16px 24px;
  `,
  warning: ({ props }) => `
  background-color: ${props.theme.status.warningColor};
  color: ${props.theme.status.textColorOnSecondary};

  &:hover, &:focus {
    background-color: ${props.theme.status.warningColorHover};
    outline: 3px solid ${props.theme.status.warningColorHover};
  }

  &:active { 
    background-color: ${props.theme.status.warningColorActive};
  }
  `,
  secondaryButtonWarning: ({ props }) => `
    background: none;
    color: ${props.theme.status.warningColor};
    border: 2px solid ${props.theme.status.warningColor};
    border-color: ${props.theme.status.warningColor};
    &:hover {
      background: ${props.theme.status.warningColorHover};
      color: ${props.theme.status.textColorInverted};
    }
  `,
  tertiaryButtonWarning: ({ props }) => `
    background: none;
    border-color: ${props.theme.status.warningColor};
  `,
  success: ({ props }) => `
    background-color: ${props.theme.status.successColor};

    &:hover, &:focus {
      color: ${props.theme.textColorInverted};
      background-color: ${props.theme.status.successColorHover};
    }
    &:active: {
      background-color: ${props.theme.status.successColorActive};
    }
  `,
  error: ({ props }) => `
    background-color: ${props.theme.status.errorColor};
    color: ${props.theme.textColorInverted};

    &:hover, &:focus {
      color: ${props.theme.textColorInverted};
      background-color: ${props.theme.status.errorColorHover};
    }
    &:active: {
      background-color: ${props.theme.status.errorColorActive};
    }
  `,
}

const Button = styled.button`
  padding: 12px 24px;
  border-radius: 2px;
  font-size: ${typeScale.paragraph};
  min-width: 100px;
  cursor: pointer;
  font-family: ${(props) => props.theme.primaryFont};
  transition: background-color 0.2s linear, color 0.2 linear;
`

export const PrimaryButton = styled(Button)`
  background-color: ${(props) => props.theme.primaryColor};
  border: none;
  color: ${(props) => props.theme.buttonText};
  font-weight: bold;
  &:focus {
    outline: 3px solid ${(props) => props.theme.primaryColor};
    outline-offset: 2px;
  }
  &:disabled {
    background-color: ${(props) => props.theme.disabled};
    color: ${(props) => props.theme.textOnDisabled};
    cursor: not-allowed;
  }
  &.active {
    background-color: ${(props) => props.theme.secondaryColor};
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`

export const SecondaryButton = styled(Button)`
  background-color: white;
  border: 2px solid ${(props) => props.theme.secondaryColor};
  color: ${(props) => props.theme.secondaryColor};
  &:hover {
    background-color: ${(props) => props.theme.secondaryColor};
    color: ${(props) => props.theme.textColorOnSecondary};
    border: none;
  }
  &:focus {
    border: none;
    background-color: ${(props) => props.theme.secondaryColor};
    color: ${(props) => props.theme.textColorOnSecondary};
    outline: 3px solid ${(props) => props.theme.secondaryColor};
    outline-offset: 2px;
  }
  &:disabled {
    background: none;
    border: 2px solid ${(props) => props.theme.disabled};
    color: ${(props) => props.theme.disabled};
    cursor: not-allowed;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`

export const TertiaryButton = styled(Button)`
  background-color: white;
  border: none;
  color: ${(props) => props.theme.secondaryColor};
  &:hover {
    background-color: ${(props) => props.theme.secondaryColor};
    color: ${(props) => props.theme.textColorOnSecondary};
    border: none;
  }
  &:focus {
    border: none;
    background-color: ${(props) => props.theme.secondaryColor};
    color: ${(props) => props.theme.textColorOnSecondary};
    outline: 3px solid ${(props) => props.theme.secondaryColor};
    outline-offset: 2px;
  }
  &:disabled {
    background: none;
    color: ${(props) => props.theme.disabled};
    cursor: not-allowed;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`
export default PrimaryButton
