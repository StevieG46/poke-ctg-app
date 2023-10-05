import { createContext, useEffect, useState } from "react";
export const ApiContext = createContext(null)

export default function ApiProvider({children}){

    const [apiUrl, setApiUrl] = useState("https://api.pokemonetcg.io/v2/");

    // useEffect(() => {
    //     setApiUrl("https://api.pokemonetcg.io");
    // });

    return(
        <ApiContext.Provider value={
            {
                apiUrl: apiUrl, 
                setApi: setApiUrl
            }
        }>

            {children}


        </ApiContext.Provider>

    )

}