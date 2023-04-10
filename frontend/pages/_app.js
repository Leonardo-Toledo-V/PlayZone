import { PageContextProvider } from '@/context/PageProvider'
import { SearchContextProvider } from '@/context/SearchProvider'
import { ShopContextProvider } from '@/context/ShopProvider'
import '@/styles/global.css'

export default function App({ Component, pageProps }) {
  return (
    <PageContextProvider>
    <ShopContextProvider>
       <SearchContextProvider>
    <Component {...pageProps} />
    </SearchContextProvider>
    </ShopContextProvider>
    </PageContextProvider>
  )
};