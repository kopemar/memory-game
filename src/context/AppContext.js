import React, {createContext, useState} from 'react';

export const AppContext = createContext({
        cCard: null,
        setCCard: cCard => cCard,
    }
)

export const GlobalContext = ({children}) => {
    const [cCard, setCard] = useState(null);

    const setCCard = cCard => setCard(cCard);

    return (
        <AppContext.Provider
            value={{
                cCard,
                setCCard
            }}
        >
            {children}
        </AppContext.Provider>
    )
}