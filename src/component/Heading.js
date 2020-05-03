import styled from "styled-components";
import {COLORS, FONT_SIZE, SCREEN} from "../constant/Constants";

export const Subheading = styled.h2`
    margin: 50px;
    color: ${COLORS.WHITE}; 
    font-size: ${FONT_SIZE.XLARGE};
    font-weight: 500;
    text-align: center;
    
    ${SCREEN.BELOW_PHONE} {
        font-size: ${FONT_SIZE.LARGE};
    }
`