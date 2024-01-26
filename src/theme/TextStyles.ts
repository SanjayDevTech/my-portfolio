import { TextStyle, SubVariant, Variant, FontStyleString, FontSizeNumber, FontWeightNumber } from "./types";

const FontWeight = {
  regular: 400,
  medium: 500,
  bold: 700,
};

const SmallTextStyle: TextStyle = {
  fontSize: 20,
  fontWeight: FontWeight.regular,
  fontStyle: "normal",
};

const MediumTextStyle: TextStyle = {
  fontSize: 50,
  fontWeight: FontWeight.medium,
  fontStyle: "normal",
};

const LargeTextStyle: TextStyle = {
  fontSize: 80,
  fontWeight: FontWeight.bold,
  fontStyle: "normal",
};

const ButtonTextStyle: TextStyle = {
  fontSize: 35,
  fontWeight: FontWeight.medium,
  fontStyle: "normal",
};

const ButtonMiniTextStyle: TextStyle = {
  fontSize: 25,
  fontWeight: FontWeight.medium,
  fontStyle: "normal",
};

const SmallMiniTextStyle: TextStyle = {
  fontSize: 18,
  fontWeight: FontWeight.regular,
  fontStyle: "normal",
};

const MediumMiniTextStyle: TextStyle = {
  fontSize: 30,
  fontWeight: FontWeight.medium,
  fontStyle: "normal",
};

const LargeMiniTextStyle: TextStyle = {
  fontSize: 50,
  fontWeight: FontWeight.bold,
  fontStyle: "normal",
};

const TextStyles = {
  SmallTextStyle,
  MediumTextStyle,
  LargeTextStyle,
  ButtonTextStyle,
  ButtonMiniTextStyle,
  SmallMiniTextStyle,
  MediumMiniTextStyle,
  LargeMiniTextStyle,
};

const SmallTextStyleVariant: SubVariant<TextStyle> = {
  main: SmallTextStyle,
  mini: SmallMiniTextStyle,
};

const MediumTextStyleVariant: SubVariant<TextStyle> = {
  main: MediumTextStyle,
  mini: MediumMiniTextStyle,
};

const LargeTextStyleVariant: SubVariant<TextStyle> = {
  main: LargeTextStyle,
  mini: LargeMiniTextStyle,
};

const ButtonTextStyleVariant: SubVariant<TextStyle> = {
  main: ButtonTextStyle,
  mini: ButtonMiniTextStyle,
};

const TextStyleVariants: Variant<TextStyle> = {
  small: SmallTextStyleVariant,
  medium: MediumTextStyleVariant,
  large: LargeTextStyleVariant,
  button: ButtonTextStyleVariant,
};

export function getFontStyle(variant: keyof typeof TextStyleVariants): SubVariant<FontStyleString> {
  return {
    main: TextStyleVariants[variant].main.fontStyle,
    mini: TextStyleVariants[variant].mini.fontStyle,
  };
}

export function getFontSize(variant: keyof typeof TextStyleVariants): SubVariant<FontSizeNumber> {
  return {
    main: TextStyleVariants[variant].main.fontSize,
    mini: TextStyleVariants[variant].mini.fontSize,
  };
}

export function getFontWeight(variant: keyof typeof TextStyleVariants): SubVariant<FontWeightNumber> {
  return {
    main: TextStyleVariants[variant].main.fontWeight,
    mini: TextStyleVariants[variant].mini.fontWeight,
  };
}

export default TextStyles;
export { TextStyleVariants as TextVariants };