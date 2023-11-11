import { ButtonText } from "#components/text";
import { getColor, getTextColor } from "#theme/Colors";
import * as Styles from "./styles";
import ButtonProps from "./types";

function Button(props: ButtonProps) {
    const { color, children, ...childProps } = props;
    return (<Styles.Wrapper $backgroundColor={getColor(color)} $color={getTextColor(color)} {...childProps}>
        {typeof children === "string" ? <ButtonText color={color.startsWith("tertiary") ? "primaryDark": "white"}>{children}</ButtonText> : children}
    </Styles.Wrapper>);
}

export default Button;
