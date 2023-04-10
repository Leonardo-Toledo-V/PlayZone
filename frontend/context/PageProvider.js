import { createContext, useState } from 'react';

export const PageContext = createContext();

export const PageContextProvider = ({children}) => {
    const [page, setPage] = useState(1);
    const [lastPage, setLastPage] = useState("");
    return(
      <PageContext.Provider value={{page, setPage, lastPage, setLastPage}}>
        {children}
      </PageContext.Provider>
    )
  }
  
