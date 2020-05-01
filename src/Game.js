export class Game {

    constructor(count) {
        if (count % 2 === 0) {
            this.cards = [];
            for (let i = 0; i < count/2; i++) {
               for (let j = 0; j < 2; j++) {
                   this.cards.push(new Card(i))
               }
            }
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

class Card {
    constructor(number) {
        this.number = number
    }

    equals (card) {
        if (card.hasOwnProperty("number")) {
            return card.number === this.number
        }
        return false
    }
}