import React, { createContext} from 'react';

export const UserContext = createContext({});

const UserContextProvider = ({children})=>{
    return <UserContext.Provider value={{userName: 'Regymatrix',age:18}}>{children}</UserContext.Provider>
}

export {UserContextProvider}



