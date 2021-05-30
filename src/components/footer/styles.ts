import styled from "styled-components";

export const Wrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	background-color: ${(p) => p.theme.surface};
	${(p) =>
		!p.theme.darkMode &&
		`
		box-shadow: 0 3px 30px;
	`}
`;

export const ContentWrapper = styled.div`
	height: 120px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	color: ${(p) => p.theme.text};
	font-size: 16px;
`;

export const SocialMediaRow = styled.div`
	position: absolute;
	top: -30px;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
`;

export const SocialIconWrapper = styled.div`
	border-radius: 50%;
	padding: 10px;
	margin: 0 10px 0;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${(p) => p.theme.onSurface};
`;

export const SocialIcon = styled.img`
	padding: 5px;
	height: 35px;
`;
