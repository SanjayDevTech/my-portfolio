import styled from "styled-components";

export const Wrapper = styled.button`
    background: ${(p) => p.theme.colors.primaryDark};
    width: 121px;
    height: 56px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
        background: ${(p) => p.theme.colors.primaryDark}dd;
    }

    @media only screen and (max-width: 576px) {
        margin: 20px 0;
    }
`;

export const Circle = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Icon = styled.img`
    width: 32px;
    height: 32px;
`;
