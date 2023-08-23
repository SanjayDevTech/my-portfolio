import Colors from "#theme/Colors";

export default interface TextProps extends React.HTMLProps<HTMLSpanElement> {
    variant: "small" | "medium" | "large";
    color: keyof typeof Colors;
}