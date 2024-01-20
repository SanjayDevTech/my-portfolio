import styled from "styled-components";

export const ContentWrapper = styled.div<{
	center?: boolean;
}>`
	display: flex;
	flex-direction: column;
	align-items: ${({ center }) => (center ? "center" : "flex-start")};
`;
