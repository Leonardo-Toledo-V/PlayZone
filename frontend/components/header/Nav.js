import React from 'react'

function Nav() {
    return (
        <nav className="flex justify-between items-center w-[92%] mt-4 mx-auto">
            <div>
                <img className="w-32 cursor-pointer" src="logo.png" alt="..." />
            </div>
            <div className="duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5">
                <div class="pt-2 relative mx-auto text-gray-600">
                    <input
                        className="border-2 border-gray-300 bg-white h-10 px-5 pr-32 rounded-lg text-sm focus:outline-none"
                        type="search"
                        name="search"
                        placeholder="Search"
                    />
                    <button
                        type="submit"
                        class="absolute right-0 top-0 mt-5 mr-4"></button>
                </div>
            </div>
            <div className="flex items-center gap-6">
                <button className="bg-orange-400 text-white px-4 py-1 rounded-md hover:bg-orange-500 transition duration-300">
                    Login
                </button>
                <ion-icon
                    onclick="onToggleMenu(this)"
                    name="menu"
                    className="text-3xl cursor-pointer md:hidden"></ion-icon>
            </div>
        </nav>
    )
}

export default Nav
