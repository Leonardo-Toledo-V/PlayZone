import { SearchContextProvider } from '@/context/SearchProvider'
import { ShopContextProvider } from '@/context/ShopProvider'
import '@/styles/global.css'

export default function App({ Component, pageProps }) {
  return (
    <ShopContextProvider>
       <SearchContextProvider>
    <Component {...pageProps} />
    </SearchContextProvider>
    </ShopContextProvider>
  )
};