import React, {createContext, useState} from 'react';

export const AppContext = createContext({
        cCard: null,
        setCCard: cCard => cCard,
        welcome: false,
        setWelcome: welcome => welcome
    }
)

export const GlobalContext = ({children}) => {
    const [cCard, setCard] = useState(null);
    const [welcome, setWWelcome] = useState(false);

    const setCCard = cCard => setCard(cCard);

    const setWelcome = welcome => setWWelcome(welcome);

    return (
        <AppContext.Provider
            value={{
                cCard,
                setCCard,
                welcome,
                setWelcome
            }}
        >
            {children}
        </AppContext.Provider>
    )
}