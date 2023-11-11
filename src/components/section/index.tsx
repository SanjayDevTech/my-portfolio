import useMobile from "#hooks/useMobile";
import { getColor } from "#theme/Colors";
import * as Styles from "./styles";
import SectionProps from "./types";

function Section(props: SectionProps) {
    const { backgroundColor, children } = props;
    const isMobile = useMobile();
    return isMobile ? (
        <Styles.MobileWrapper $backgroundColor={getColor(backgroundColor)}>{children}</Styles.MobileWrapper>
    ) : (
        <Styles.Wrapper $backgroundColor={getColor(backgroundColor)}>{children}</Styles.Wrapper>
    );
}

export default Section;
