import styled from "styled-components";

export const Wrapper = styled.div`
	width: 350px;
	height: 350px;
	padding: 20px;
	margin: 15px;
	border-radius: 30px;
	box-shadow: 1px 1px 10px #000;
	background-color: ${(p) => p.theme.surface};
	&:hover {
		box-shadow: 4px 5px 11px #000;
	}
`;

export const Content = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
`;

export const Banner = styled.img`
	width: 100%;
	height: 100%;
	position: relative;
	object-fit: cover;
	background-color: #121212;
`;

export const Overlay = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 50px;
	background-image: linear-gradient(
		rgba(255, 255, 255, 0.4),
		${(p) =>
			p.theme.darkMode ? "rgba(0, 0, 0, 0.9)" : "rgba(255, 255, 255, 0.8)"}
	);
`;

export const Title = styled.div`
	position: absolute;
	bottom: 10px;
	left: 10px;
	color: ${(p) => p.theme.text};
	font-size: 18px;
`;
