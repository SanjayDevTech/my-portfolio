import useMobile from "#hooks/useMobile";
import * as Styles from "./styles";
import SectionProps from "./types";

function Section(props: SectionProps) {
    const { backgroundColor, children } = props;
    const isMobile = useMobile();
    return isMobile ? (
        <Styles.MobileWrapper $backgroundColor={backgroundColor}>{children}</Styles.MobileWrapper>
    ) : (
        <Styles.Wrapper $backgroundColor={backgroundColor}>{children}</Styles.Wrapper>
    );
}

export default Section;
