import { createContext, useState } from 'react';

export const ShopContext = createContext();

export const ShopContextProvider = ({children}) => {
    const [shop, setShop] = useState(null);
    return(
      <ShopContext.Provider value={{shop,setShop }}>
        {children}
      </ShopContext.Provider>
    )
  }
  
