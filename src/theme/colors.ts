const colors = {
  primary1: "#283BDA",
  primary2: "#221D2C",
  secondary1: "#E36708",
  secondary2: "#B8481C",
  secondary3: "#F08F30",
  tertiary1: "#CEB6B5",
  tertiary2: "#B0A9AA",
  tertiary3: "#F8F3F3",
};

export const colorKeys = Object.keys(colors) as (keyof typeof colors)[];

export function getColor(color: keyof typeof colors) {
  return colors[color];
}

export default colors;
