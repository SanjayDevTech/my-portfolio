import Text from "#components/text";
import ProjectProps, { Tag } from "./types";
import githubIcon from "#assets/github-mark.svg";
import linkIcon from "#assets/link.svg";
import playIcon from "#assets/play.svg";

const getTagBgColor = (tag: Tag) => {
    switch (tag) {
        case "aws":
            return "#252F3E";
        case "node":
            return "#026e00";
        case "react":
            return "#00d8ff";
        case "android":
            return "#2d6638";
        case "javascript":
            return "#F0DB4F";
        case "html":
            return "#e34c26";
        case "python":
            return "#306998";
        case "kotlin":
            return "#B125EA";
        case "java":
            return "#f89820";
        case "firebase":
            return "#F57C00";
        default:
            return "gray";
    }
};

const getTagColor = (tag: Tag) => {
    switch (tag) {
        case "javascript":
            return "black";
        case "react":
                return "black";
        default:
            return "white";
    }
};

const CONTAINER_SIZE = 400;
const IMAGE_PERCENT = 70;
const TEXT_PERCENT = 100-IMAGE_PERCENT;

export default function Project(props: ProjectProps) {
    const options = [];
    if (props.codeUrl) {
        options.push({
            name: "source code",
            url: props.codeUrl,
            icon: githubIcon,
        });
    }
    if (props.deployedUrl) {
        options.push({
            name: "deployed",
            url: props.deployedUrl,
            icon: linkIcon,
        });
    }
    if (props.demoUrl) {
        options.push({
            name: "demo",
            url: props.demoUrl,
            icon: playIcon,
        });
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
            width: `${CONTAINER_SIZE}px`,
            margin: "10px",
            height: `${CONTAINER_SIZE}px`,
            borderRadius: "20px",
            border: "1px solid #000000",
        }}>
            {options.length > 0 && <div style={{
                position: "absolute",
                top: 10,
                right: 10,
                display: "flex",
                flexDirection: "column",
            }}>
                {options.map((option, index) => (
                    <a title={option.name} href={option.url} target="_blank" style={{
                        background: "white",
                        borderRadius: "50%",
                        width: "40px",
                        height: "40px",
                        marginTop: `${index ? 10 : 0}px`,
                    }} key={index}>
                        <img src={option.icon} alt={option.name} style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "center",
                        }} />
                    </a>
                ))}
            </div>
            }
            
            <div style={{
                width: "100%",
                height: `${IMAGE_PERCENT}%`,
            }}>
                <img src={props.imageUrl} alt={props.title} style={{
                    width: "100%",
                    height: "100%",
                    borderTopLeftRadius: "20px",
                    borderTopRightRadius: "20px",
                    objectFit: "cover",
                }} />
            </div>
            <div style={{
                borderBottomLeftRadius: "20px",
                borderBottomRightRadius: "20px",
                background: "white",
                height: `${TEXT_PERCENT}%`,
                padding: "0 20px",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-evenly",
            }}>
                <Text color="black" variant="small">{props.title}</Text>
                <Text color="black" style={{
                    textAlign: "center",
                }} variant="mini">{props.description}</Text>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                }}>
                    {props.tags.map((tag, index) => (
                        <Text color={getTagColor(tag)} variant="mini" key={index} style={{
                            background: getTagBgColor(tag),
                            padding: "2px 5px",
                            margin: "5px",
                            borderRadius: "5px",
                        }}>
                            {tag}
                        </Text>
                    ))}
                </div>
            </div>
        </div>
    );
}
