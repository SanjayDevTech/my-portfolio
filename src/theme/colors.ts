const Colors = {
  primary: "#283BDA",
  primaryDark: "#221D2C",
  secondary: "#E36708",
  secondaryDark: "#B8481C",
  secondaryLight: "#F08F30",
  tertiary: "#CEB6B5",
  tertiaryDark: "#B0A9AA",
  text: "#F8F3F3",
  white: "#FFF",
  black: "#000",
};

export const colorKeys = Object.keys(Colors) as (keyof typeof Colors)[];

export function getColor(color: keyof typeof Colors) {
  return Colors[color];
}

export default Colors;
