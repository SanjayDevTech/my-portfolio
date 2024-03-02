import clsx from "clsx";

interface SocialIconProps {
    className?: string;
}

export const GitHubIcon = (props: SocialIconProps) => <i aria-hidden className={clsx("lni", "lni-github-original", props.className)} />;

export const LinkedInIcon = (props: SocialIconProps) => <i aria-hidden className={clsx("lni", "lni-linkedin-original", props.className)} />;

export const TwitterIcon = (props: SocialIconProps) => <i aria-hidden className={clsx("lni", "lni-twitter-original", props.className)} />;

export const YoutubeIcon = (props: SocialIconProps) => <i aria-hidden className={clsx("lni", "lni-youtube", props.className)} />;

export const MediumIcon = (props: SocialIconProps) => <i aria-hidden className={clsx("lni", "lni-medium", props.className)} />;

export const GmailIcon = (props: SocialIconProps) => <i aria-hidden className={clsx("lni", "lni-envelope", props.className)} />;
