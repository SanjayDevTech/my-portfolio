import colors from "#theme/colors";

export default interface TextProps extends React.HTMLProps<HTMLSpanElement> {
    variant: "large" | "medium" | "small";
    color: keyof typeof colors;
    children: React.ReactNode;
}