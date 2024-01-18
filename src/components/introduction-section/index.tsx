import Section from "#components/section";
import { SmallText } from "#components/text";
import useMobile from "#hooks/useMobile";
import devCoding from "#assets/dev-coding.svg";
import Spacer from "#components/spacer";
import SectionImage from "#components/section-image";

function IntroductionSection() {
    const isMobile = useMobile();
    return (
        <Section backgroundColor="white">
            {!isMobile && (
                <>
                    <SectionImage src={devCoding} alt="dev-coding" />
                    <Spacer width="60px" />
                    <SmallText style={{
                        width: "60%"
                    }} color="primaryDark" highlightColor="primary">
                        I am a Software Engineer from <span>Coimbatore</span>, Tamil Nadu.<br />
                        I love building apps and websites for different platforms using <span>modern frameworks</span>.
                    </SmallText>
                </>
            )}
            {isMobile && (
                <>
                    <SmallText style={{
                        textAlign: "center",
                        padding: "0 30px",
                    }} color="primaryDark" highlightColor="primary">
                        I am a Software Engineer from <span>Coimbatore</span>, Tamil Nadu.
                    </SmallText>
                    <SmallText style={{
                        textAlign: "center",
                        padding: "0 30px",
                    }} color="primaryDark" highlightColor="primary">
                        I love building apps and websites for different platforms using <span>modern frameworks</span>.
                    </SmallText>
                </>
            )}
        </Section>
    )
}

export default IntroductionSection;
