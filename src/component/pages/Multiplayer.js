import {Component} from "react";
import {MultiplayerLoad} from "../settings/MultiplayerLoad";
import {PlayerCount} from "../settings/PlayerCount";
import {PlayerNames} from "../settings/PlayerNames";
import {MultiplayerGame} from "../../Game";
import {PlayerBar} from "../game/PlayerBar";
import {Playground} from "../game/Playground";
import React from "react";
import {isWelcome, saveMultiplayer, welcome} from "../../App";

export class Multiplayer extends Component {
    // start new game
    initGame (players){
        const game = new MultiplayerGame(16, players)
        this.setState({game: game})
        saveMultiplayer(game)
    }

    constructor(props) {
        super(props);
        if (!isWelcome()) welcome();
        console.log("Multiplayer constructor");
        this.state = {
            game: null,
            welcome: isWelcome(),
            playerCount: false,
            activeCard: null
        };
    }

    componentWillUnmount(): void {
        if (this.state.game !== null) saveMultiplayer(this.state.game)
    }

    render() {
        return <>
            {!this.state.loaded &&
            <MultiplayerLoad onSelected={(game) => {
                this.setState({loaded: true});
                if (game === null) {
                    this.setState({playerCount: 0})
                }
                this.setState({game: game})
            }}/>
            }
            {this.state.loaded && this.state.playerCount === 0 &&
            <PlayerCount onFinished={(playerCount) => this.setState({playerCount: playerCount})}/>
            }
            {this.state.loaded && this.state.playerCount > 0 && !this.state.game && <>
                <PlayerNames count={this.state.playerCount} onFinished={players => this.initGame(players)}/></>}
            {this.state.loaded && this.state.game && this.state.game.players && <>
                {this.state.game instanceof MultiplayerGame && <PlayerBar game={this.state.game}/>}
                <Playground game={this.state.game}/>
            </>}
        </>
    }
}