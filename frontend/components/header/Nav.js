import { SearchContext } from '@/context/SearchProvider';
import { useRouter } from 'next/router';
import React, { useContext } from 'react'
import Cookies from 'js-cookie'

function Nav() {
    const router = useRouter();
    const { searchTerm, setSearchTerm } = useContext(SearchContext)

    const handleLogin =(e)=>{
        e.preventDefault();
        if(Cookies.get('username')){
            router.push('/dashboard');
        }else{
            router.push("/login")
        }
    }
    const handleSearch =(e)=>{
        setSearchTerm(e.target.value);
    }


    return (
        <nav className="flex justify-around items-center w-full px-6 pb-4 pt-4 mx-auto shadow-lg sticky top-0 z-50 bg-gray-800">
            <div>
                <img className="w-36 cursor-pointer" src="logo.png" alt="..."/>
            </div>
            <div className="static md:w-auto  w-full flex items-center px-5">
                <div className="pt-2 relative mx-auto text-gray-600">
                    <input
                        className="hidden md:inline-flex border-2 border-gray-200 bg-gray-200 h-10 px-5 pr-32 rounded-lg text-sm focus:outline-none"
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
                <button onClick={handleLogin} className="bg-orange-400 text-gray-200 text-sm px-4 py-1 rounded-md hover:bg-orange-500 transition duration-300">
                    admin
                </button>
            </div>
        </nav>
    )
}

export default Nav
