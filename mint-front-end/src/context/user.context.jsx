import { createContext } from "react";
import { useState } from "react";



export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => { },
    isLoading: false,
    setIsLoading: () => { },
    isFrameVisible: null,
    setIsFrameVisible: () => { },
    isNewStartup: false,
    setIsNewStartup: () => { },
    language: null,
    setLanguage: () => { }
})

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [isLoaading, setIsLoading] = useState(null);
    const [isFrameVisible, setIsFrameVisible] = useState(null);
    const [isNewStartup, setIsNewStartup] = useState(false);
    const [language, setLanguage] = useState(null)
    const value = { currentUser, setCurrentUser, isLoaading, setIsLoading, isFrameVisible, setIsFrameVisible, isNewStartup, setIsNewStartup, language, setLanguage };

    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    )
}