import React, {createContext, useState} from 'react';

export const AppContext = createContext({
        cCard: null,
        setCCard: cCard => cCard,
        welcome: false,
        setWelcome: welcome => welcome,
        players: [],
        setPlayers: players => players,
    }
)

export const GlobalContext = ({children}) => {
    const [cCard, setCard] = useState(null);
    const [welcome, setWWelcome] = useState(false);
    const [players, setPPlayers] = useState([])

    const setCCard = cCard => setCard(cCard);

    const setWelcome = welcome => setWWelcome(welcome);

    const setPlayers = players => setPPlayers(players);

    return (
        <AppContext.Provider
            value={{
                cCard,
                setCCard,
                welcome,
                setWelcome,
                players,
                setPlayers
            }}
        >
            {children}
        </AppContext.Provider>
    )
}