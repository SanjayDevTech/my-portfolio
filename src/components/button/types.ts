import Colors from "#theme/Colors";

type ButtonProps = React.ComponentProps<"button"> & {
    color: keyof typeof Colors;
}

export default ButtonProps;
