import { SearchContextProvider } from '@/context/SearchProvider'
import '@/styles/global.css'

export default function App({ Component, pageProps }) {
  return (
  <SearchContextProvider>
    <Component {...pageProps} />
    </SearchContextProvider>)
};