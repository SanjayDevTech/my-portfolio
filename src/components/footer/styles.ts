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
	height: 50px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	color: ${(p) => p.theme.text};
	font-size: 20px;
	margin: 60px 0 0;
`;

export const Attribution = styled.div`
	height: 50px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	color: ${(p) => p.theme.text};
	font-size: 14px;
	& * {
		margin: 2px;
	}
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
	cursor: pointer;
`;

export const Link = styled.a`
	display: block;
	height: 100%;
`;

export const SocialIcon = styled.img`
	padding: 5px;
	height: 35px;
`;
