import BioSection from "#components/bio-section";
import Contact from "#components/contact";
import IntroductionSection from "#components/introduction-section";
import ResumeSection from "#components/resume-section";

export default function HomePage() {
  return (
    <>
      <BioSection />
      <IntroductionSection />
      <ResumeSection />
      <Contact />
    </>
  );
}
