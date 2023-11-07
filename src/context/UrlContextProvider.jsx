import React, { useState } from "react";
import UrlContext from "./UrlContext"

const UrlContextProvider = ({children}) => {
    const [link, setLink] = useState('')

    return(
        <UrlContext.Provider value={{link, setLink}}>
            {children}
        </UrlContext.Provider>
    )
}

export default UrlContextProvider