import {css} from 'styled-components'

export const COLORS = {
    WASSERMANN: "#6AA331",
    LIGHT_WASSERMANN: "#ACD87E",
    DARK_WASSERMANN: "#4a7524",
    GREEN_AGAIN: "#7AB341",
    POISON: "#B8FF2C",
    POISONOUS: "#A0FF4F",
    YELLOW_GREEN: "#D8D365",
    ANOTHER_GREEN: "#B0DD70",
    GRAY_BUT_GREEN: "#9CAF8C",
    UGLY_GREEN: "#B7C59C",
    SILLY_GREEN: "#96E6A1",
    GREEN: "#93D559",
    TURQUOISE: "#1AD7E4",
    BARBIE: "#E41ABB",
    VIOLETTE: "#7C7BC1",
    COMMIE: "#C90000",
    DEEP_PURPLE: "#482666",
    JUST_GOLD: "#FFD100",
    MARINE: "#12407B",
    ORANGE: "#FF6200",
    WHITE: "#FFFFFF",
    WHITE_TRANSPARENT: "rgb(255, 255, 255, 50)",
    GRAY: "#BCBDBC"
}

export const FONT_SIZE = {
    XLARGE: "36px",
    LARGE: "24px"
}

export const SCREEN = {
    ABOVE_TABLET: "@media (min-width: 1000px)",
    BELOW_PHONE: "@media (max-width: 700px)"
}

export const STRING = {
    WELCOME_TEXT: "Hello and welcome to the memory game!",
    NUMBER_OF_PLAYERS: "Select number of players",
    NAME_OF_PLAYER: "Insert name of Player"
}

export const MAX_PLAYER_COUNT = 4;
export const MIN_PLAYER_COUNT = 2;

export const REJECT_ANIMATION = css`
            @keyframes reject {
                0% {transform: translateX(15px);}
                50% {transform: translateX(-15px);}
                100% {transform: translateX(0px)}
            }
            animation-name: reject;
            animation-delay: ${({delay}) => delay ? delay : 0}s;
            animation-duration: ${({duration}) => duration ? duration : 0.5}s;
            animation-fill-mode: forwards;
            `