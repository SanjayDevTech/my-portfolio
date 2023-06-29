import { FontVariant } from "#theme/types";
import styled from "styled-components";

export const Text = styled.span<{
    $color: string;
    $fontSize: FontVariant<number>;
    $fontWeight: FontVariant<number>;
    $fontStyle: FontVariant<string>;
}>`
    display: inline-block;
    color: ${p => p.$color};
    font-size: ${p => p.$fontSize.desktop}px;
    font-weight: ${p => p.$fontWeight.desktop};
    font-style: ${p => p.$fontStyle.desktop};
    @media only screen and (max-width : 992px) {
        font-size: ${p => p.$fontSize.mobile}px;
        font-weight: ${p => p.$fontWeight.mobile};
        font-style: ${p => p.$fontStyle.mobile};
    }
`;
