import styled from "styled-components";
import { defaultTheme, typeScale } from "../utils";
import { applyStyleModifiers } from "styled-components-modifiers";

const BUTTON_MODIFIERS = {
  small: () => `
    font-size: ${typeScale.helper};
    padding: 8px;
  `,
  large: () => `
    font-size: ${typeScale.h5};
    padding: 16px 24px;
  `,
  warning: () => `
  background-color: ${defaultTheme.status.warningColor};
  color: ${defaultTheme.status.textColorOnSecondary};

  &:hover, &:focus {
    background-color: ${defaultTheme.status.warningColorHover};
    outline: 3px solid ${defaultTheme.status.warningColorHover};
  }

  &:active { 
    background-color: ${defaultTheme.status.warningColorActive};
  }
  `,
  secondaryButtonWarning: () => `
    background: none;
    border-color: ${defaultTheme.status.warningColor};
  `,
  tertiaryButtonWarning: () => `
    background: none;
    border-color: ${defaultTheme.status.warningColor};
  `,
  success: () => `
    background-color: ${defaultTheme.status.successColor};

    &:hover, &:focus {
      color: ${defaultTheme.textColorInverted};
      background-color: ${defaultTheme.status.successColorHover};
    }
    &:active: {
      background-color: ${defaultTheme.status.successColorActive};
    }
  `,
  error: () => `
    background-color: ${defaultTheme.status.errorColor};
    color: ${defaultTheme.textColorInverted};

    &:hover, &:focus {
      color: ${defaultTheme.textColorInverted};
      background-color: ${defaultTheme.status.errorColorHover};
    }
    &:active: {
      background-color: ${defaultTheme.status.errorColorActive};
    }
  `,
};

const Button = styled.button`
  padding: 12px 24px;
  border-radius: 2px;
  font-size: ${typeScale.paragraph};
  min-width: 100px;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  transition: background-color 0.2s linear, color 0.2 linear;
`;

export const PrimaryButton = styled(Button)`
  background-color: ${defaultTheme.primaryColor};
  border: none;
  color: white;
  &:focus {
    outline: 3px solid ${defaultTheme.primaryColor};
    outline-offset: 2px;
  }
  &:disabled {
    background-color: ${defaultTheme.disabled};
    color: ${defaultTheme.textOnDisabled};
    cursor: not-allowed;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const SecondaryButton = styled(Button)`
  background-color: white;
  border: 2px solid ${defaultTheme.secondaryColor};
  color: ${defaultTheme.secondaryColor};
  &:hover {
    background-color: ${defaultTheme.secondaryColor};
    color: ${defaultTheme.textColorOnSecondary};
    border: none;
  }
  &:focus {
    border: none;
    background-color: ${defaultTheme.secondaryColor};
    color: ${defaultTheme.textColorOnSecondary};
    outline: 3px solid ${defaultTheme.secondaryColor};
    outline-offset: 2px;
  }
  &:disabled {
    background: none;
    border: 2px solid ${defaultTheme.disabled};
    color: ${defaultTheme.disabled};
    cursor: not-allowed;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const TertiaryButton = styled(Button)`
  background-color: white;
  border: none;
  color: ${defaultTheme.secondaryColor};
  &:hover {
    background-color: ${defaultTheme.secondaryColor};
    color: ${defaultTheme.textColorOnSecondary};
    border: none;
  }
  &:focus {
    border: none;
    background-color: ${defaultTheme.secondaryColor};
    color: ${defaultTheme.textColorOnSecondary};
    outline: 3px solid ${defaultTheme.secondaryColor};
    outline-offset: 2px;
  }
  &:disabled {
    background: none;
    color: ${defaultTheme.disabled};
    cursor: not-allowed;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export default PrimaryButton;
