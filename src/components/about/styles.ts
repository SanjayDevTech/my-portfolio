import styled from "styled-components";

export const Wrapper = styled.div`
	padding: 50px 0 30px;
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

export const SubTitleText = styled.div<{
	$margin?: string;
}>`
	${(p) =>
		p.$margin &&
		`
		margin: ${p.$margin};
	`}
	font-size: 30px;
	width: 75%;
	color: ${(p) => p.theme.text};
`;

export const TextListItem = styled.div`
	color: ${(p) => p.theme.text};
	&:before {
		content: "•";
		margin-right: 10px;
	}
`;
