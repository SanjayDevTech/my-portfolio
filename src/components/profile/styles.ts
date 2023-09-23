import styled from "styled-components";

export const ProfileImage = styled.img<{
	$size: number;
}>`
	border-radius: 50%;
	height: ${(p) => p.$size}px;
	width: ${(p) => p.$size}px;
	object-fit: contain;
`;
