import { FontSizeNumber, FontStyleString, FontWeightNumber, SubVariant } from "#theme/types";
import styled from "styled-components";

export const Text = styled.span<{
    $color: string;
    $fontSize: SubVariant<FontSizeNumber>;
    $fontWeight: SubVariant<FontWeightNumber>;
    $fontStyle: SubVariant<FontStyleString>;
    $highlightColor?: string;
    $center?: boolean;
}>`
    display: inline-block;
    color: ${p => p.$color};
    font-size: ${p => p.$fontSize.main}px;
    font-weight: ${p => p.$fontWeight.main};
    font-style: ${p => p.$fontStyle.main};
    @media only screen and (max-width : 992px) {
        font-size: ${p => p.$fontSize.mini}px;
        font-weight: ${p => p.$fontWeight.mini};
        font-style: ${p => p.$fontStyle.mini};
    }
    & > span {
        color: ${p => p.$highlightColor};
    }
    text-align: ${p => p.$center ? "center" : "left"};
`;
