import styled from "styled-components";

export const Wrapper = styled.div`
	padding: 5px;
	margin: 5px;
	position: relative;
	height: 370px;
	width: 370px;
`;

export const ProfileImage = styled.img`
	border: 5px solid ${(p) => p.theme.text};
	border-radius: 80%;
	position: absolute;
	top: 0;
	left: 0;
	height: 320px;
	width: 320px;
	background-color: #121212;
`;

export const BGLayer = styled.div`
	border-radius: 80%;
	position: absolute;
	top: 50px;
	left: 50px;
	height: 320px;
	width: 320px;
	background-color: #4c8bfc;
`;
