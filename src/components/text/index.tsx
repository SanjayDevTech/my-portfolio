import TextProps from "./types";
import * as Styles from "./styles";
import { getFontSize, getFontStyle, getFontWeight, TextVariants } from "#theme/TextStyles";
import { getColor } from "#theme/Colors";

export default function Text(props: TextProps) {
  const { variant, color, ...childProps } = props;

  return (
    <Styles.Text
      $fontStyle={getFontStyle(variant)}
      $fontWeight={getFontWeight(variant)}
      $fontSize={getFontSize(variant)}
      $color={getColor(color)}
      {...childProps}
    />
  );
}

export function SmallText(props: Omit<TextProps, "variant">) {
  const { color, ...childProps } = props;
  return <Text variant="small" color={color} {...childProps}  />;
}

export function LargeText(props: Omit<TextProps, "variant">) {
  const { color, ...childProps } = props;
  return <Text variant="large" color={color} {...childProps}  />;
}

export function MediumText(props: Omit<TextProps, "variant">) {
  const { color, ...childProps } = props;
  return <Text variant="medium" color={color} {...childProps}  />;
}
