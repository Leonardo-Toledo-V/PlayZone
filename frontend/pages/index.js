import Head from 'next/head'
import Feed from '@/components/Feed'
import Nav from '@/components/header/Nav'

export default function Home() {
    return (
        <>
            <Head>
                <title>Videogame Store</title>
            </Head>
                <Nav></Nav>
                {/* Feed */}         
                <Feed></Feed>
        </>
    )
}
