import React, {createContext} from 'react';

export const AppContext = createContext({
        activeCard: null,
        setActiveCard: () => {},
        welcome: false,
        setWelcome: welcome => welcome,
        players: [],
        setPlayers: players => players,
        loaded: false,
        setGameLoaded: () => {}
    }
)
