import styled from "styled-components";

export const Wrapper = styled.div`
	margin: 50px 0 30px;
	min-height: 200px;
	display: flex;
	align-items: center;
	justify-content: flex-start;
`;

export const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 50%;
	padding: 10px;
	align-items: center;
`;

export const TitleText = styled.div`
	font-weight: bold;
	font-size: 50px;
	color: ${(p) => p.theme.text};
	width: 75%;
`;

export const SubTitleText = styled.div`
	font-size: 35px;
	width: 75%;
	color: ${(p) => p.theme.text};
`;
