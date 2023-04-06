import { SearchContext } from '@/context/SearchProvider';
import { useRouter } from 'next/router';
import React, { useContext } from 'react'

function Nav() {
    const router = useRouter();
    const { searchTerm, setSearchTerm } = useContext(SearchContext)

    const handleLogin =(e)=>{
        e.preventDefault();
        router.push("/login")
    }

    const handleSearch =(e)=>{
        setSearchTerm(e.target.value);
    }

    return (
        <nav className="flex justify-around items-center w-full px-6 pb-4 mt-4 mx-auto shadow-lg sticky top-0 z-50 bg-white">
            <div>
                <img className="w-36 cursor-pointer" src="logo.png" alt="..." />
            </div>
            <div className="static md:w-auto  w-full flex items-center px-5">
                <div className="pt-2 relative mx-auto text-gray-600">
                    <input
                        className="hidden md:inline-flex border-2 border-gray-300 bg-white h-10 px-5 pr-32 rounded-lg text-sm focus:outline-none"
                        placeholder="Search"
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                    <button
                        type="submit"
                        className="absolute right-0 top-0 mt-5 mr-4"></button>
                </div>
            </div>
            <div className="flex items-center gap-6">
                <button onClick={handleLogin} className="bg-orange-400 text-white px-4 py-1 rounded-md hover:bg-orange-500 transition duration-300">
                    Login
                </button>
            </div>
        </nav>
    )
}

export default Nav
