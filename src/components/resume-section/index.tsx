import Section from "#components/section";
import useMobile from "#hooks/useMobile";
import resume from "#assets/resume.svg";
import SectionImage from "#components/section-image";
import { SmallText } from "#components/text";
import Button from "#components/button";

import * as Styles from "./styles";

function ResumeSection() {
    const isMobile = useMobile();
    const CONTENT = (
        <>
            <SmallText color="white">
                Looking for Freelancing opportunities in:
                <ul>
                    <li>Android Development</li>
                    <li>Web Development</li>
                    <li>Flutter Development</li>
                </ul>
            </SmallText>
            <Styles.ButtonWrapper>
                <Button color="primaryDark" onClick={() => {
                    window.open("https://drive.google.com/file/d/1DlNnI20uP2-9sJeQs2nCu3LlbLPNvLzB/view?usp=sharing", "_blank");
                }}>
                    View Resume
                </Button>
            </Styles.ButtonWrapper>
        </>
    );
    return (
        <Section backgroundColor="secondary">
            {isMobile ? (
                <Styles.MobileContentWrapper>
                    {CONTENT}
                </Styles.MobileContentWrapper>
            ) : (<Styles.ContentWrapper>
                {CONTENT}
            </Styles.ContentWrapper>)}
            {!isMobile && <SectionImage src={resume} alt={"Resume"} />}
        </Section>
    )
}

export default ResumeSection;
