import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	background-color: ${(p) => p.theme.colors.primaryDark};
	width: 100%;
	padding: 20px;
	justify-content: space-between;
	align-items: center;
	& > * {
		margin: 0 10px;
	}
`;

export const MobileWrapper = styled(Wrapper)`
	flex-direction: column;
	justify-content: center;
	align-items: center;
	& > * {
		margin: 10px 0;
	}
`;

export const SocialMediaRow = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

export const SocialIconWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	height: 45px;
	width: 45px;
	margin: 0 13px;
`;

export const Link = styled.a`
	display: block;
	height: 100%;
`;

export const SocialIcon = styled.img`
	height: 100%;
	width: 100%;
	border-radius: 20px;
	background-color: ${(p) => p.theme.colors.white};
`;
