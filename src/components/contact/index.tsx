import * as Styles from "./styles";
import Section from "#components/section";
import { MediumText } from "#components/text";
import useMobile from "#hooks/useMobile";
import { contactLinks } from "#config/links";

function Contact() {
    const isMobile = useMobile();

    return (
        <Section backgroundColor={"white"}>
            <Styles.ContentWrapper>
                <MediumText style={{
                    position: "absolute",
                    top: 30
                }} color="primaryDark">Connect with me</MediumText>
                <Styles.ContactRowWrapper>
                    {contactLinks.map((link) => (
                        <Styles.SocialIconWrapper key={link.name}>
                            <Styles.Link target="_blank" href={link.url}>
                                <Styles.SocialIcon src={link.icon} alt={link.name} />
                            </Styles.Link>
                        </Styles.SocialIconWrapper>
                    ))}
                </Styles.ContactRowWrapper>
            </Styles.ContentWrapper>
        </Section>
    );
}

export default Contact;
