import styled from "styled-components";

export const Wrapper = styled.div`
	padding: 50px 0 100px;
	min-height: 200px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	box-shadow: 1px 1px 5px #000;
	padding: 80px;
	border-radius: 40px;
	&:hover {
		box-shadow: 2px 2px 8px #000;
	}
`;

export const Input = styled.input`
	margin: 10px;
	padding: 20px;
	color: #000;
	border-radius: 20px;
	font-size: 18px;
	outline: none;
	border: 2px solid #000;
	&:hover {
		border: 2px solid #4c8bfc;
	}
`;

export const Button = styled.button`
	margin: 10px;
	cursor: pointer;
	padding: 10px 30px;
	color: #fff;
	background-color: #4c8bfc;
	border-radius: 22px;
	font-size: 20px;
	transition: all 0.1s;
	box-shadow: 0px;
	border: 2px solid #4c8bfc;
	&:active {
		box-shadow: 0 1px 5px #000000;
	}
	&:hover {
		color: #4c8bfc;
		background: ${(p) => p.theme.surface};
		border: 2px solid #4c8bfc;
	}
`;
