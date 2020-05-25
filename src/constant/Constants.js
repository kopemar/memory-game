import {css} from 'styled-components'

export const IMAGES = {
    IMG_1: "img/img_1.svg",
    IMG_2: "img/img_2.svg",
    IMG_3: "img/img_3.svg",
    IMG_4: "img/img_4.svg",
    IMG_5: "img/img_5.svg",
    IMG_6: "img/img_6.svg",
    IMG_7: "img/img_7.svg",
    IMG_8: "img/img_8.svg",
}

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
    GRAY: "#BCBDBC",
    LIGHT_BLUE: "#7AD9EF",
    LIGHT_GRAY: "#D7D7D7",
    LIGHT_YELLOW: "#E7DEB1",
    LIGHT_ORANGE: "#E7C3B1",
    LIGHT_BROWN: "#877467"
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

export const PATH = {
    MULTIPLAYER: "/multiplayer",
    ABOUT: "/about",
    HOME: "/",
    BASENAME: "/memory-game"
}

export const HASH = {
    HOME: `#/`
}

export const API = {
    GITHUB_PATH: "https://api.github.com/users/kopemar"
}

export const STORAGE = {
    MULTIPLAYER: "multiplayer_in_storage",
    WELCOME: "has_been_welcome",
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