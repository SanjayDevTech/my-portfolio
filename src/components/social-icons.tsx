import clsx from "clsx";

interface SocialIconProps {
    className?: string;
}

export const GitHubIcon = (props: SocialIconProps) => <i className={clsx("fab", "fa-github", props.className)}/>;

export const LinkedInIcon = (props: SocialIconProps) => <i className={clsx("fab", "fa-linkedin-in", props.className)}/>;

export const TwitterIcon = (props: SocialIconProps) => <i className={clsx("fab", "fa-x-twitter", props.className)}/>;

export const YoutubeIcon = (props: SocialIconProps) => <i className={clsx("fab", "fa-youtube", props.className)}/>;

export const MediumIcon = (props: SocialIconProps) => <i className={clsx("fab", "fa-medium-m", props.className)}/>;

export const GmailIcon = (props: SocialIconProps) => <i className={clsx("fa", "fa-envelope", props.className)}/>;
