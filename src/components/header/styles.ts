import Text, { SmallText } from "#components/text";
import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	height: 80px;
	padding: 8px;
	background-color: #fff;
`;

export const BrandImage = styled.img`
	height: 64px;
	width: 64px;
	margin: 0 18px 0 10px;
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

export const ActionText = styled(SmallText)`
	margin: 0 35px 0 0;
	padding: 5px;
	cursor: pointer;
	position: relative;
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
		background-color: ${(p) => p.theme.colors.primaryDark};
		width: 100%;
		border-radius: 10px;
		visibility: hidden;
		transform: scaleX(0);
		transition: all 0.3s ease-in-out;
	}
	&:hover:after {
		visibility: visible;
		transform: scaleX(0.5);
	}
`;
