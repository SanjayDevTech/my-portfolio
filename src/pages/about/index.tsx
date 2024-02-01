import GitHubCalendar from "react-github-calendar";
import useMobile from "#hooks/useMobile";
import { SmallText } from "#components/text";
import { Link } from "react-router-dom";
import Showcase from "#components/showcase";

const skills = [
  { icon: "https://raw.githubusercontent.com/github/explore/8baf984947f4d9c32006bd03fa4c51ff91aadf8d/topics/react/react.png", name: "React" },
  { icon: "https://raw.githubusercontent.com/github/explore/8baf984947f4d9c32006bd03fa4c51ff91aadf8d/topics/nodejs/nodejs.png", name: "NodeJS" },
  { icon: "https://raw.githubusercontent.com/github/explore/8baf984947f4d9c32006bd03fa4c51ff91aadf8d/topics/typescript/typescript.png", name: "TypeScript" },
  { icon: "https://raw.githubusercontent.com/github/explore/8baf984947f4d9c32006bd03fa4c51ff91aadf8d/topics/javascript/javascript.png", name: "JavaScript" },
  { icon: "https://raw.githubusercontent.com/github/explore/8baf984947f4d9c32006bd03fa4c51ff91aadf8d/topics/python/python.png", name: "Python" },
  { icon: "https://raw.githubusercontent.com/github/explore/8baf984947f4d9c32006bd03fa4c51ff91aadf8d/topics/android/android.png", name: "Android" },
  { icon: "https://raw.githubusercontent.com/github/explore/8baf984947f4d9c32006bd03fa4c51ff91aadf8d/topics/kotlin/kotlin.png", name: "Kotlin" },
  { icon: "https://raw.githubusercontent.com/github/explore/8baf984947f4d9c32006bd03fa4c51ff91aadf8d/topics/java/java.png", name: "Java" },
  { icon: "https://raw.githubusercontent.com/github/explore/8baf984947f4d9c32006bd03fa4c51ff91aadf8d/topics/flutter/flutter.png", name: "Flutter" },
];

const tools = [
  { icon: "https://raw.githubusercontent.com/github/explore/8baf984947f4d9c32006bd03fa4c51ff91aadf8d/topics/linux/linux.png", name: "Linux" },
  { icon: "https://raw.githubusercontent.com/github/explore/8baf984947f4d9c32006bd03fa4c51ff91aadf8d/topics/figma/figma.png", name: "Figma" },
  { icon: "https://raw.githubusercontent.com/github/explore/8baf984947f4d9c32006bd03fa4c51ff91aadf8d/topics/visual-studio-code/visual-studio-code.png", name: "VSCode" },
  { icon: "https://raw.githubusercontent.com/github/explore/8baf984947f4d9c32006bd03fa4c51ff91aadf8d/topics/firebase/firebase.png", name: "Firebase" },
  { icon: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/docker/docker.png", name: "Docker" },
  { icon: "https://raw.githubusercontent.com/github/explore/8baf984947f4d9c32006bd03fa4c51ff91aadf8d/topics/aws/aws.png", name: "AWS" },
  { icon: "https://raw.githubusercontent.com/github/explore/b943d5d671b2c6bc956d601746139b1d724658bd/topics/appwrite/appwrite.png", name: "Appwrite" },
  { icon: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/spring-boot/spring-boot.png", name: "Spring Boot" },
]

export default function AboutPage() {
  const isMobile = useMobile();
  return <>
    <div style={{
      padding: isMobile ? "0 20px" : "0 100px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "max-content",
      minHeight: "330px",
    }}>
      <SmallText center color="black">
        Hi, I'm Sanjay 👋
        <br />
        I am a Computer Science Engineering graduate from Tamil Nadu, India 🇮🇳.
        <br />
        I currently working as a Software Engineer with technologies like React, JavaScript, Java, Spring Boot.
        <br />
        On my free time, I work on Android apps.
        <br />
      </SmallText>
      <br />
      <SmallText center color="black">
        I have created some open source projects. Check them out: <Link to="/projects">Projects</Link>
      </SmallText>
    </div>
    <hr style={{ width: "100%", margin: "10px 0" }} />
    <div style={{
      padding: isMobile ? "0 10px" : "0 100px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "200px",
      margin: isMobile ? 10 : 20,
    }}>
      <h2>Skills</h2>
      <Showcase items={skills} />
    </div>
    <hr style={{ width: "100%", margin: "10px 0" }} />
    <div style={{
      padding: isMobile ? "0 10px" : "0 100px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "200px",
      margin: isMobile ? 10 : 20,
    }}>
      <h2>Tools</h2>
      <Showcase items={tools} />
    </div>
    <hr style={{ width: "100%", margin: "10px 0" }} />
    <div style={{
      padding: isMobile ? "5px" : "0 100px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "250px",
      marginBottom: isMobile ? 0 : 60,
    }}>
      <h2>GitHub Contributions Chart</h2>
      <GitHubCalendar username="SanjayDevTech" colorScheme="light" blockSize={isMobile ? 6 : 10} blockMargin={isMobile ? 1.5 : 5} fontSize={isMobile ? 10 : 20} />
    </div>
  </>;
}
