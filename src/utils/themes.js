import {
  defaultShadow,
  lightModePrimary,
  darkModePrimary,
  neutral,
  success,
  error,
  warning,
} from "./colors";
import { primaryFont } from "./typography";

export const defaultTheme = {
  primaryColor: lightModePrimary[100],
  secondaryColor: lightModePrimary[200],
  textColor: lightModePrimary[300],
  textColorOnPrimary: lightModePrimary[200],
  textColorOnSecondary: neutral[100],
  textColorInverted: neutral[100],
  disabled: neutral[400],
  textOnDisabled: neutral[300],
  status: {
    warningColor: warning[100],
    warningColorHover: warning[200],
    warningColorActive: warning[300],
    errorColor: error[100],
    errorColorHover: error[200],
    errorColorActive: error[300],
    successColor: success[100],
    successColorHover: success[200],
    successColorActive: success[300],
  },
  primaryFont,
  defaultShadow,
};

export const darkTheme = {
  primaryColor: darkModePrimary[100],
  secondaryColor: darkModePrimary[200],
  textColor: darkModePrimary[400],
  textColorOnPrimary: neutral[100],
  textColorOnSecondary: darkModePrimary[200],
  textColorInverted: neutral[100],
  disabled: neutral[400],
  textOnDisabled: neutral[300],
  status: {
    warningColor: warning[100],
    warningColorHover: warning[200],
    warningColorActive: warning[300],
    errorColor: error[100],
    errorColorHover: error[200],
    errorColorActive: error[300],
    successColor: success[100],
    successColorHover: success[200],
    successColorActive: success[300],
  },
  primaryFont,
  defaultShadow,
};
