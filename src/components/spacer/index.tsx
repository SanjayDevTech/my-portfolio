import SpacerProps from "./types";
import * as Styles from "./styles";

function Spacer(props: SpacerProps) {
    const { width } = props;
    
    return <Styles.Wrapper $width={width} />;
}

export default Spacer;
