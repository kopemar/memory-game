import React, {Component} from 'react';
import styled from 'styled-components';
import {CardView} from "./CardView";
import {COLORS} from "../../constant/Constants";
import {MultiplayerGame} from "../../Game";
import {saveMultiplayer} from "../../App";

const PlaygroundContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    max-width: 700px;
    padding: 10px;
    background: ${COLORS.WHITE};
    border-radius: 4px;
    border: 1px solid ${COLORS.GRAY_BUT_GREEN};
    margin: 10px auto;
`;

export class Playground extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(): void {
        if (this.props.game instanceof MultiplayerGame) {
            this.setPlayerTimeout();
        }
    }

    setPlayerTimeout () {
        this.props.game.timeout = setTimeout(() => {
            this.props.game.handleLoss();
            this.setPlayerTimeout();
        }, 6000)
    }

    render () {
        const cards = [];

        this.props.game.cards.forEach((card) => {
            cards.push(<CardView clickHandler={(card) => handleCardClick(card)}
                                 card={card}
                                 game={this.props.game}
                                 timeoutHandler={(card) => handleTimeout(card)}/>)
        })

        const handleTimeout = (card) => {
            if (!card.discovered) {
                card.active = false;
            }
            this.props.game.activeCard = null;
        }

        const handleCardClick = (card) => {
            card.active = true;
            console.log(this.props.game);
            if (this.props.game.activeCard === null) {
                this.props.game.activeCard = card;
            } else {
                this.props.game.handlePairing(this.props.game.activeCard, card, () => {
                    setTimeout(() => {
                        if (this.props.game instanceof MultiplayerGame) {
                            alert(`Game has ended! Scores: ${this.props.game.players.map((player) => {
                                return player && `${player.name}: ${player.score}, `
                            })}`);
                            saveMultiplayer(null);
                            window.location.reload();
                        } else {
                            alert("You won this game!")
                        }

                    }, 500)
                });

                if (this.props.game instanceof MultiplayerGame) {
                    clearTimeout(this.props.game.timeout);
                    this.setPlayerTimeout();
                }
            }
        }

        return <PlaygroundContainer>
            {cards}
        </PlaygroundContainer>
    }
}
