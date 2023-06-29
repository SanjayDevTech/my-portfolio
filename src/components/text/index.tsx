import TextProps from "./types";
import * as Styles from "./styles";
import { getFontSize, getFontStyle, getFontWeight } from "#theme/typography";
import { ReactPropTypes } from "react";

export default function Text(props: TextProps) {
  const { variant, color, children } = props;

  return (
    <Styles.Text
      fontStyle={getFontStyle(variant)}
      fontWeight={getFontWeight(variant)}
      fontSize={getFontSize(variant)}
      color={color}
    >
      {children}
    </Styles.Text>
  );
}
