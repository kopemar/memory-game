import {COLORS} from "./constant/Constants";

export class Game {

    constructor(count) {
        if (count % 2 === 0) {
            this.cards = [];
            for (let i = 0; i < count/2; i++) {
               for (let j = 0; j < 2; j++) {
                   this.cards.push(new Card(i))
               }
            }
            this.activeCard = null;
            this.shuffle()
        } else {
            console.error("Not even number of cards")
        }
    }

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

        console.log(this.cards);
    }
}

export class Card {
    constructor(number) {
        this.number = number;
        this.src = Card.image[number];
        this.active = false;
        this.id = Card.getId();
    }

    isTheSame = (card) => this.equals(card) && this.id === card.id;

    equals (card) {
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
        0: `${COLORS.DARK_WASSERMANN}`,
        1: `${COLORS.GREEN_AGAIN}`,
        2: `${COLORS.GRAY_BUT_GREEN}`,
        3: `${COLORS.ANOTHER_GREEN}`,
        4: `${COLORS.YELLOW_GREEN}`,
        5: `${COLORS.WASSERMANN}`,
        6: `${COLORS.LIGHT_WASSERMANN}`,
        7: `${COLORS.POISON}`,
    }
}