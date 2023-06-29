import TextProps from "./types";
import * as Styles from "./styles";
import { getFontSize, getFontStyle, getFontWeight } from "#theme/typography";
import { ReactPropTypes } from "react";
import { getColor } from "#theme/colors";

export default function Text(props: TextProps) {
  const { variant, color, children, ...childProps } = props;

  return (
    <Styles.Text
      $fontStyle={getFontStyle(variant)}
      $fontWeight={getFontWeight(variant)}
      $fontSize={getFontSize(variant)}
      $color={getColor(color)}
      {...childProps}
    >
      {children}
    </Styles.Text>
  );
}
