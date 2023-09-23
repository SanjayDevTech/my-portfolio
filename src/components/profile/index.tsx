import * as Styles from "./styles";
import profile from "#config/profile";
import useMobile from "#hooks/useMobile";

const IMAGE_URL = `https://github.com/${profile.githubUserName}.png`;

function Profile() {
	const isMobile = useMobile();
	const size = isMobile ? 254 : 442;
	return (
		<Styles.ProfileImage $size={size} src={IMAGE_URL} alt={profile.githubUserName} />
	);
}

export default Profile;
