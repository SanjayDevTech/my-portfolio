export default interface ProjectProps {
    title: string;
    description: string;
    imageUrl: string;
    codeUrl?: string;
    demoUrl?: string;
    tags: Tag[];
}

export type Tag = "react" | "android" | "javascript" | "html" | "python" | "kotlin" | "java" | "firebase" | "node" | "aws";
