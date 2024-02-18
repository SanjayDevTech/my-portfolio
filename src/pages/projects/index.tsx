import Project from "#components/project";
import useMobile from "#hooks/useMobile";

export default function ProjectsPage() {
    const isMobile = useMobile();
    const styles: any = {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        padding: "10px",
        margin: "0",
    };

    if (isMobile) {
        styles.justifyContent = "center";
    }

    return (
        <ul style={styles}>
            <Project
                title="SaKo"
                description="SaKo is an initiative by the Coimbatore Police Department to prevent burglary in locked houses."
                imageUrl="/images/sako-banner.png"
                deployedUrl="https://play.google.com/store/apps/details?id=com.police.crimedetection.user"
                tags={["android", "kotlin", "firebase", "aws"]}
            />
            <Project
                title="RemoveIt"
                description="RemoveIt helps users to detect and remove Malicious Chinese apps on their Android devices."
                imageUrl="/images/removeit-banner.png"
                deployedUrl="https://drive.google.com/file/d/1cT3lUu7tKn-kGXYFhJcLoj99i7YepyTK/view?usp=sharing"
                demoUrl="https://youtube.com/shorts/Ch3PL5uIRTE?feature=share"
                codeUrl="https://github.com/2020victory/removeit"
                tags={["android", "firebase", "java"]}
            />
            <Project
                title="Wave Meet"
                description="Wave is a video call application for Hearing and Speech Impaired people."
                imageUrl="/images/wave-banner.jpg"
                demoUrl="https://youtu.be/DfLI_DFgBLo?t=45"
                tags={["react", "javascript", "node"]}
            />
            <Project
                title="Logglytics"
                description="Logglytics is a logging platform for your applications and servers."
                imageUrl="/images/logglytics-banner.jpg"
                demoUrl="https://youtu.be/XW2ISS94JEQ?t=223"
                tags={["react", "javascript", "node"]}
            />
        </ul>
    );
}
