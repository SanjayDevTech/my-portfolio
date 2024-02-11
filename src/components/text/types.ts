import Colors from "#theme/colors";

export default interface TextProps extends React.HTMLProps<HTMLSpanElement> {
    variant: "small" | "medium" | "large" | "button" | "mini";
    color: keyof typeof Colors;
    highlightColor?: keyof typeof Colors;
    center?: boolean;
}
