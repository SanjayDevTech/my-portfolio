import Colors from "#theme/colors";

export default interface TextProps extends React.HTMLProps<HTMLSpanElement> {
    variant: "small" | "medium" | "large" | "button";
    color: keyof typeof Colors;
    highlightColor?: keyof typeof Colors;
}
