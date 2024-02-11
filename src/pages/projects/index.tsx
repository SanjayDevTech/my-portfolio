import Project from "#components/project";

export default function ProjectsPage() {
    return (
        <ul style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            padding: "10px",
            margin: "0",
        }}>
            <Project
                title="SaKo"
                description="SaKo is an initiative by the Coimbatore Police Department to prevent burglary in locked houses."
                imageUrl="/images/sako-banner.png"
                demoUrl="https://play.google.com/store/apps/details?id=com.police.crimedetection.user"
                tags={["android", "kotlin", "firebase", "aws"]}
            />
            <Project
                title="RemoveIt"
                description="RemoveIt helps users to detect and remove Malicious Chinese apps on their Android devices."
                imageUrl="/images/removeit-banner.png"
                demoUrl="https://play.google.com/store/apps/details?id=tech.sanjaydev.removeit"
                tags={["android", "firebase", "java"]}
            />
            <Project
                title="Wave Meet"
                description="Wave is a video call application for Hearing and Speech Impaired people."
                imageUrl="https://via.placeholder.com/512"
                tags={["react", "javascript", "node"]}
            />
            <Project
                title="Logglytics"
                description="Logglytics is a logging platform for your applications and servers."
                imageUrl="https://via.placeholder.com/512"
                tags={["react", "javascript", "node"]}
            />
        </ul>
    );
}
