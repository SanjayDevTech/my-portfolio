import styled from "styled-components";

export const Wrapper = styled.div<{
    $width: string;
}>`
    width: ${(p) => p.$width};
`;
