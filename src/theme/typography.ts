import { FontVariant, TypographyVariant } from "./types";

const smallTypography: TypographyVariant = {
  desktop: {
    fontSize: 25,
    fontStyle: "normal",
    fontWeight: 500,
  },
  mobile: {
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: 500,
  },
};

const mediumTypography: TypographyVariant = {
  desktop: {
    fontSize: 50,
    fontStyle: "normal",
    fontWeight: 500,
  },
  mobile: {
    fontSize: 30,
    fontStyle: "normal",
    fontWeight: 500,
  },
};

const largeTypography: TypographyVariant = {
  desktop: {
    fontSize: 80,
    fontStyle: "normal",
    fontWeight: 700,
  },
  mobile: {
    fontSize: 50,
    fontStyle: "normal",
    fontWeight: 700,
  },
};

const typography = {
  small: smallTypography,
  medium: mediumTypography,
  large: largeTypography,
};

export const getFontSize = (
  size: "large" | "medium" | "small"
): FontVariant<number> => {
  switch (size) {
    case "small":
      return {
        desktop: typography.small.desktop.fontSize,
        mobile: typography.small.mobile.fontSize,
      };
    case "medium":
      return {
        desktop: typography.medium.desktop.fontSize,
        mobile: typography.medium.mobile.fontSize,
      };
    case "large":
      return {
        desktop: typography.large.desktop.fontSize,
        mobile: typography.large.mobile.fontSize,
      };
  }
};

export const getFontWeight = (
  size: "large" | "medium" | "small"
): FontVariant<number> => {
  switch (size) {
    case "small":
      return {
        desktop: typography.small.desktop.fontWeight,
        mobile: typography.small.mobile.fontWeight,
      };
    case "medium":
      return {
        desktop: typography.medium.desktop.fontWeight,
        mobile: typography.medium.mobile.fontWeight,
      };
    case "large":
      return {
        desktop: typography.large.desktop.fontWeight,
        mobile: typography.large.mobile.fontWeight,
      };
  }
};

export const getFontStyle = (
  size: "large" | "medium" | "small"
): FontVariant<string> => {
  switch (size) {
    case "small":
      return {
        desktop: typography.small.desktop.fontStyle,
        mobile: typography.small.mobile.fontStyle,
      };
    case "medium":
      return {
        desktop: typography.medium.desktop.fontStyle,
        mobile: typography.medium.mobile.fontStyle,
      };
    case "large":
      return {
        desktop: typography.large.desktop.fontStyle,
        mobile: typography.large.mobile.fontStyle,
      };
  }
};

export default typography;
