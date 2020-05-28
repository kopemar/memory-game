import {Component} from "react";
import {SingleplayerLoad} from "../settings/SingleplayerLoad";
import {SinglePlayerGame} from "../../Game";
import {Playground} from "../game/Playground";
import React from "react";
import {saveSingleplayer} from "../../App";

export class Singleplayer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            game: null,
            loaded: false,
        }
    }

    componentWillUnmount(): void {
        console.log(this.state.game);
        if (this.state.game !== null) saveSingleplayer(this.state.game)
    }

    render() {
        const onSelected = (game) => {
            const g = game === null ? new SinglePlayerGame(16) : game;
            this.setState({loaded: true, game: g});
            saveSingleplayer(g);
        }

        return <>{!this.state.loaded && <SingleplayerLoad onSelected={(game) => {
            onSelected(game)
        }}/>}
            {this.state.loaded &&
            <Playground game={this.state.game}/>
            } </>;
    }

}