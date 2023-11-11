import styled from "styled-components";

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
`;

export const MobileContentWrapper = styled(ContentWrapper)`
    align-items: center;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: clamp(50px, 122px, calc(0.10 * 100vh));
`;
