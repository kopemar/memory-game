import React, {useEffect} from 'react';
import styled from 'styled-components';
import {CardView} from "./CardView";
import {COLORS} from "../../constant/Constants";
import {MultiplayerGame} from "../../Game";

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

export const Playground = ({game}) => {
    const cards = [];

    game.cards.forEach((card) => {
        cards.push(<CardView clickHandler={(card) => handleCardClick(card)}
                             card={card}
                             game={game}
                             timeoutHandler={(card) => handleTimeout(card)}/>)
    })

    const handleTimeout = (card) => {
        if (!card.discovered) {
            card.active = false;
        }
        game.activeCard = null;
    }

    function setPlayerTimeout() {
        game.timeout = setTimeout(() => {
            game.handleLoss();
            setPlayerTimeout();
        }, 6000)
    }

    useEffect(() => {
        if (game instanceof MultiplayerGame) {
            setPlayerTimeout();
        }
    }, [])

    function handleCardClick(card) {
        card.active = true;
        console.log(game);
        if (game.activeCard === null) {
            game.activeCard = card;
        } else {
            if (game.activeCard.pairsWith(card)) {
                if (!card.discovered && !game.activeCard.discovered) game.discovered += 2;
                game.activeCard.discovered = true;
                card.discovered = true;
                game.handleMatch()
            } else {
                game.handleLoss();
                game.activeCard.active = false;
                card.active = false;
            }

            if (game instanceof MultiplayerGame) {
                clearTimeout(game.timeout);
                setPlayerTimeout();
            }

            game.activeCard = null;
            if (game.isWon()) {
                setTimeout(() => {
                    if (game instanceof MultiplayerGame) {
                        // todo who is the winner?
                        alert("Game has ended!")
                    } else {
                        alert("You won this game!")
                    }

                }, 1000)
            }
        }
    }

    return <PlaygroundContainer>
        {cards}
    </PlaygroundContainer>
};