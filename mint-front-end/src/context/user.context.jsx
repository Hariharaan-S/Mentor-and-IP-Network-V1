import { createContext } from "react";
import { useState } from "react";



export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => { },
    isLoading: null,
    setIsLoading: () => { },
    isFrameVisible: null,
    setIsFrameVisible: () => { }
})

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [isLoaading, setIsLoading] = useState(null);
    const [isFrameVisible, setIsFrameVisible] = useState(null);
    const value = { currentUser, setCurrentUser, isLoaading, setIsLoading, isFrameVisible, setIsFrameVisible };

    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    )
}