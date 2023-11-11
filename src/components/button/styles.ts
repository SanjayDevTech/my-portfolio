import styled from "styled-components";

export const Wrapper = styled.button<{
    $backgroundColor: string;
    $color: string;
}>`
    width: 304px;
    height: 95px;
    background-color: ${p => p.$backgroundColor};
    color: ${p => p.$color};
    border-radius: 12px;
    border: none;
    cursor: pointer;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;
