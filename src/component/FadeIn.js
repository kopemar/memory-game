import styled from "styled-components";

export const FadeIn = styled.div`
    @keyframes fade-in {
        from {opacity: 0;}
        to {opacity: 1;}
    }
    animation-name: fade-in;
    opacity: 0;
    animation-delay: ${({delay}) => delay ? delay : 0}s;
    animation-duration: ${({duration}) => duration ? duration : 2}s;
    animation-fill-mode: forwards;
`;

export const MoveFromRight = styled.div`
    @keyframes move-from-right {
        from {transform: translateX(100%);}
        to {transform: translateX(0%);}
    }
    animation-name: move-from-right;
    transform: translateX(100%)
    animation-delay: ${({delay}) => delay ? delay : 0}s;
    animation-duration: ${({duration}) => duration ? duration : 2}s;
    animation-fill-mode: forwards;
`