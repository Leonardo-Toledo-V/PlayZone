import { useRouter } from 'next/router';
import React from 'react'

function AdminNav() {
    const router = useRouter();

    const handleLogin =(e)=>{
        e.preventDefault();
        router.push("/")
    }

    return (
        <nav className="flex justify-around items-center w-full pb-4 mt-4 mx-auto shadow-lg sticky top-0 z-50 bg-white">
            <div>
                <img className="w-36 cursor-pointer" src="logo.png" alt="..." />
            </div>
            <div className="duration-500 md:static absolute md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5">
            </div>
            <div className="flex items-center gap-6">
                <button onClick={handleLogin} className="bg-orange-400 text-white px-4 py-1 rounded-md hover:bg-orange-500 transition duration-300">
                    Logout
                </button>
            </div>
        </nav>
    )
}

export default AdminNav;

