import styled from "styled-components";

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 6% 0;
`;

export const ContactRowWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 80%;
`;

export const SocialIconWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	height: 96px;
	width: 96px;
	margin: 30px;
    @media (max-width: 870px) {
        margin: 20px;
    }
`;

export const Link = styled.a`
	display: block;
	height: 100%;
`;

export const SocialIcon = styled.img`
	height: 100%;
	width: 100%;
	background-color: ${(p) => p.theme.colors.white};
`;

