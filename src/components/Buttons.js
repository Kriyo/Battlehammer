import styled from "styled-components";
import { defaultTheme, typeScale } from "../utils";

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
`;

export default PrimaryButton;
