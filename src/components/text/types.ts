import Colors from "#theme/Colors";
import { TextStyle } from "#theme/types";

export default interface TextProps extends React.HTMLProps<HTMLSpanElement> {
    variant: "small" | "medium" | "large";
    color: keyof typeof Colors;
}