import styled from "styled-components";

export const Wrapper = styled.div<{
    $backgroundColor: string;
}>`
	padding: 0 100px;
	height: clamp(636px, 681px, calc(100vh - 120px));
	background-color: ${(p) => p.$backgroundColor};
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: relative;
`;

export const MobileWrapper = styled(Wrapper)`
	padding: 20px;
	flex-direction: column;
	justify-content: center;
	row-gap: 35px;
	position: relative;
`;