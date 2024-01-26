import styled from "styled-components";

export const Wrapper = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

export const ItemWrapper = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 10px;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
    &:hover {
        transform: scale(1.1);
    }
`;
