import * as Styles from './styles';
import githubImage from '#assets/github-mark.svg';

function GithubAccount() {

    const openGithub = () => {
        window.open('https://github.com/SanjayDevTech', '_blank');
    };

    return (
        <Styles.Wrapper onClick={openGithub}>
            <Styles.Circle>
                <Styles.Icon src={githubImage} alt="Github" />
            </Styles.Circle>
        </Styles.Wrapper>
    );
}

export default GithubAccount;
