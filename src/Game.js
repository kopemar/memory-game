import {COLORS} from "./constant/Constants";

export class Game {

    constructor(count) {
        this.count = count;
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
        this.number = number;
        this.src = Card.image[number];
        this.active = false;
        this.id = Card.getId();
        this.discovered = false;
    }

    isTheSame = (card) => this.equals(card) && this.id === card.id;

    equals (card) {
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
        0: `${COLORS.ORANGE}`,
        1: `${COLORS.BARBIE}`,
        2: `${COLORS.COMMIE}`,
        3: `${COLORS.DEEP_PURPLE}`,
        4: `${COLORS.JUST_GOLD}`,
        5: `${COLORS.TURQUOISE}`,
        6: `${COLORS.MARINE}`,
        7: `${COLORS.POISON}`,
    }
}