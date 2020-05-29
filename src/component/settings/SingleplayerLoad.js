import React from 'react';
import styled from 'styled-components'
import {MoveFromRight} from "../visuals/Animations";
import {Subheading} from "../visuals/Heading";
import {CustomButton} from "../visuals/Button";
import {SCREEN, STORAGE} from "../../constant/Constants";
import {SinglePlayerGame} from "../../model/Game";
import saveAs from 'file-saver';

const Container = styled(MoveFromRight)`
    text-align: center; 
    
    form > button {
    margin: 15px 30px;
    margin-top: 0px;
        ${SCREEN.BELOW_PHONE} {
            margin-bottom: 30px;
        }
    }
`

export const SingleplayerLoad = ({onSelected}) => {

    async function importGame(){
        let file = await selectFile();
        const reader = new FileReader();
        reader.readAsText(file,'UTF-8');

        reader.onload = readerEvent => {
            onSelected(SinglePlayerGame.fromProps(JSON.parse(readerEvent.target.result)));
        }
    }

    function selectFile (){
        return new Promise(resolve => {
            let input = document.createElement('input');
            input.type = 'file';
            input.multiple = false;
            input.accept = ".json";

            input.onchange = _ => {
                let files = Array.from(input.files);
                resolve(files[0]);
            };

            input.click();
        });
    }

    const exportGame = () => {
        saveAs(
            new Blob(
                [window.localStorage.getItem(STORAGE.SINGLEPLAYER)],
                {type: "application/json;charset=utf-8"}),
            `memory${Date.now().toString()}.json`
        )
    }

    const isSingleplayerInStorage = window.localStorage.getItem(STORAGE.SINGLEPLAYER) !== undefined && window.localStorage.getItem(STORAGE.SINGLEPLAYER) !== null
    return <section>
        <Container>
            <form>
                <Subheading>Singleplayer Game</Subheading>
                <CustomButton disabled={!isSingleplayerInStorage}
                              onClick={() => {
                                  console.log(window.localStorage.getItem(STORAGE.SINGLEPLAYER));
                                  onSelected(SinglePlayerGame.fromProps(
                                      JSON.parse(window.localStorage.getItem(STORAGE.SINGLEPLAYER)))
                                  )
                              }}
                >
                    Load Game
                </CustomButton>
                <CustomButton disabled={!isSingleplayerInStorage} onClick={() => exportGame()}>Export game</CustomButton>
                <br/>
                <CustomButton onClick={() => importGame()}>Import game</CustomButton>
                <CustomButton onClick={() => onSelected(null)}>New Game</CustomButton>
            </form>
        </Container>
    </section>
}