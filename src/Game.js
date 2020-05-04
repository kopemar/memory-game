import {COLORS, IMAGES} from "./constant/Constants";

export class Game {

    constructor(count, players) {
        console.log("Game constructor")
        this.count = count;
        this.players = players;
        if (count % 2 === 0) {
            this.cards = [];
            for (let i = 0; i < count/2; i++) {
               for (let j = 0; j < 2; j++) {
                   this.cards.push(new Card(i))
               }
            }
            this.activeCard = null;
            this.discovered = 0;
            this.shuffle()
        } else {
            console.error("Not even number of cards")
        }
        console.log(this)
    }

    isWon = () => this.count === this.discovered;

    shuffle() {
        let counter = this.cards.length;

        // shuffle algorithm from https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
        while (counter > 0) {
            const index = Math.floor(Math.random() * counter);

            counter--;
            const temp = this.cards[counter];
            this.cards[counter] = this.cards[index];
            this.cards[index] = temp;
        }
    }
}

export class Card {
    constructor(number) {
        console.log("card constructor")
        this.number = number;
        this.props = Card.image[number];
        this.active = false;
        this.id = Card.getId();
        this.discovered = false;
        this.timeout = null;
    }

    isTheSame(card) {
        return this.valueEquals(card) && this.id === card.id;
    }

    pairsWith (card) {
        return this.valueEquals(card) && !this.isTheSame(card);
    }

    valueEquals (card) {
        if (card === null) return this === null;
        if (card.hasOwnProperty("number")) {
            return card.number === this.number
        }
        return false
    }

    static counter = 0;

    static getId = () => {
        return Card.counter++;
    }

    static image = {
        0: {color: COLORS.SILLY_GREEN, src: IMAGES.IMG_1},
        1: {color: COLORS.LIGHT_ORANGE, src: IMAGES.IMG_2},
        2: {color: COLORS.LIGHT_GRAY, src: IMAGES.IMG_3},
        3: {color: COLORS.LIGHT_BROWN, src: IMAGES.IMG_4},
        4: {color: COLORS.LIGHT_YELLOW, src: IMAGES.IMG_5},
        5: {color: COLORS.LIGHT_BLUE, src: IMAGES.IMG_6},
        6: {color: COLORS.LIGHT_GRAY, src: IMAGES.IMG_7},
        7: {color: COLORS.LIGHT_YELLOW, src: IMAGES.IMG_8},
    }
}

export class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;
    }
}