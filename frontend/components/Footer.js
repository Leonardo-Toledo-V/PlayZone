import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
	return (
		<>
			<div className="bg-gray-800 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
				<div className="p-5">
					<ul>
						<p className="text-gray-200 font-bold text-lg pb-4">Videogames</p>
						<li className="text-gray-400 text-sm pb-2  hover:text-white cursor-pointer">
							Categories
						</li>
						<li className="text-gray-400 text-sm pb-2  hover:text-white cursor-pointer">
							Discounts
						</li>
						<li className="text-gray-400 text-sm pb-2  hover:text-white cursor-pointer">
							New
						</li>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-gray-200 font-bold text-lg pb-4">Company</p>
						<li className="text-gray-400 text-sm pb-2  hover:text-white cursor-pointer">
							About
						</li>
                        <li className="text-gray-400 text-sm pb-2  hover:text-white cursor-pointer">
							Why us?
						</li>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-gray-200 font-bold text-lg pb-4">Support</p>
						<li className="text-gray-400  pb-2 text-sm hover:text-white cursor-pointer">
							Contact
						</li>
						<li className="text-gray-400 text-sm pb-2  hover:text-white cursor-pointer">
							Support Portals
						</li>
					</ul>
				</div>
                <div className="p-5 ">
					<ul>
						<p className="text-orange-400 font-bold text-3xl pb-6">
							Play<span className="text-orange-500">Zone</span>
						</p>
						<div className="flex gap-6 pb-5">
							<FaInstagram className="text-2xl text-orange-400 cursor-pointer hover:text-yellow-600" />
							<FaTwitter className="text-2xl text-orange-400 cursor-pointer hover:text-blue-600" />
							<FaLinkedin className="text-2xl text-orange-400 cursor-pointer hover:text-blue-600" />
							<FaYoutube className="text-2xl text-orange-400 cursor-pointer hover:text-red-600" />
						</div>
					</ul>
				</div>
			</div>
			<div className="flex flex-col justify-center items-center text-center p-4 bg-slate-700">
				<h1 className=" text-gray-200 text-base ">
					© 2023 All rights reserved
				</h1>
			</div>
		</>
	);
}

export default Footer;