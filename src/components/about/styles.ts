import styled from "styled-components";

export const Wrapper = styled.div`
	padding: 0 100px;
	height: clamp(600px, 681px, calc(100vh - 120px));
	background-color: ${(p) => p.theme.colors.primaryDark};
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const MobileWrapper = styled(Wrapper)`
	padding: 0 20px;
	flex-direction: column;
	justify-content: center;
	row-gap: 35px;
`;

export const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;
