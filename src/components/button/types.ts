import Colors from "#theme/colors";

type ButtonProps = React.ComponentProps<"button"> & {
    color: keyof typeof Colors;
}

export default ButtonProps;
