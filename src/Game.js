import {COLORS, IMAGES} from "./constant/Constants";
import {decorate, observable} from "mobx";

class Game {
    static fromProps(props) {
        try {
            const game = new Game(props.cards.length);
            this.readGameProps(props, game)
            return game;
        } catch {
            throw "Not a valid JSON game"
        }
    }

    static readGameProps(props, game) {
        game.cards = [];

        for (const card of props.cards) {
            card && game.cards.push(Card.fromProps(card));
        }

        game.activeCard = props.activeCard == null ? null : Card.fromProps(props.activeCard);
        game.discovered = props.discovered;
    }

    constructor(count) {
        console.log("Game constructor")
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
        console.log(this)
    }

    isWon () { return this.count === this.discovered;}

    handleMatch() {
        // to be defined in subclasses
    }

    handlePairing (first, second, winHandler = () => {}, matchHandler = () => {}, lossHandler =  () => {}) {
        // match
        if (first.pairsWith(second)) {
            if (!second.discovered && !first.discovered) this.discovered += 2;
            first.discovered = true;
            second.discovered = true;
            this.handleMatch();
            matchHandler()

            if (this.isWon()) winHandler();
        } else {
            this.handleLoss();
            first.active = false;
            second.active = false;
            lossHandler()
        }

        this.activeCard = null;
    }

    handleLoss() {
        // to be defined in subclasses
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
    }
}

export class MultiplayerGame extends Game {
    activePlayer = 0;
    timeout = null;

    static fromProps(props) {
        try {
            const game = new MultiplayerGame(props.cards.length, []);
            super.readGameProps(props, game)

            for (const player of props.players) {
                game.players.push(player === null ? null : Player.fromProps(player))
            }
            game.activePlayer = props.activePlayer;
            return game;
        } catch (e) {
            throw 'Invalid card'
        }
    }

    handleMatch() {
        super.handleMatch();
        console.log(this)
        if (this.activePlayer !== null) this.players[this.activePlayer].score += 2;
    }

    handleLoss() {
        super.handleLoss();
        this.activePlayer = this.activePlayer + 2 > this.players.length ? this.getFirstPlayerIndex(): this.activePlayer + 1;
        console.log(this.activePlayer)
    }

    constructor(count, players) {
        super(count);
        this.players = players;
        this.activePlayer = this.getFirstPlayerIndex();
    }

    getFirstPlayerIndex() {
        console.log(this.players)
        for (const player of this.players) {
            if (player !== undefined && player !== null) return this.players.indexOf(player)
        }

    }

}

export class SinglePlayerGame extends Game {
    constructor(count) {
        super(count)
    }
}

export class Card {
    static fromProps(props) {
        try {
            const card = new Card(props.number);
            card.active = props.active;
            card.id = props.id;
            card.discovered = props.discovered;
            card.remainining = props.remainining;
            return card;
        } catch {
            throw 'Invalid card'
        }
    }

    constructor(number) {
        this.number = number;
        this.props = Card.image[number];
        this.active = false;
        this.id = Card.getId();
        this.discovered = false;
        this.timeout = null;
        this.remainining = 0;
    }

    isTheSame(card) {
        return this.valueEquals(card) && this.id === card.id;
    }

    pairsWith (card) {
        return this.valueEquals(card) && !this.isTheSame(card);
    }

    valueEquals (card) {
        if (card === undefined) return this === undefined;
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
    score = 0;
    static fromProps (props) {
        try {
            const player = new Player(props.name);
            player.score = props.score;
            return player;
        } catch {
            throw 'Invalid player'
        }
    }

    constructor(name) {
        this.name = name;
    }
}

// makes Player class variables observable
decorate(Player, {
    score: observable
})

// makes MultiplayerGame class variables observable
decorate(MultiplayerGame, {
    activePlayer: observable,
    timeout: observable
})