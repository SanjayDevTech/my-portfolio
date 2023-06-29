import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	height: 60px;
	padding: 8px;
	background-color: ${(p) => p.theme.surface};
`;

export const BrandImage = styled.img`
	height: 80%;
	margin: 0 10px;
`;

export const ActionIcon = styled.img`
	margin: 0 8px;
	padding: 10px;
	height: 30px;
	cursor: pointer;
	border-radius: 30%;
	background-color: #fff;
`;

export const Grow = styled.div`
	flex-grow: 1;
`;

export const ActionText = styled(Link)`
	font-size: 22px;
	margin: 0 40px 0 0;
	padding: 5px;
	cursor: pointer;
	position: relative;
	color: ${(p) => p.theme.text};
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	text-decoration: none;

	&:after {
		position: absolute;
		content: "";
		bottom: 0;
		left: 0;
		height: 2px;
		background-color: ${(p) => p.theme.text};
		width: 100%;
		visibility: hidden;
		transform: scaleX(0);
		transition: all 0.3s ease-in-out;
	}
	&:hover:after {
		visibility: visible;
		transform: scaleX(1);
	}
`;
