import { defaultShadow, lightModePrimary, darkModePrimary, neutral } from "./colors";
import { primaryFont } from "./typography";

export const defaultTheme = {
  primaryColor: lightModePrimary[100],
  secondaryColor: lightModePrimary[200],
  textColor: lightModePrimary[300],
  textColorOnPrimary: lightModePrimary[200],
  textColorOnSecondary: neutral[100],
  disabled: neutral[400],
  textOnDisabled: neutral[300],
  primaryFont,
  defaultShadow,
};

export const darkTheme = {
  primaryColor: darkModePrimary[100],
  secondaryColor: darkModePrimary[200],
  textColor: darkModePrimary[400],
  textColorOnPrimary: neutral[100],
  textColorOnSecondary: darkModePrimary[200],
  disabled: neutral[400],
  textOnDisabled: neutral[300],
  primaryFont,
  defaultShadow,
};
