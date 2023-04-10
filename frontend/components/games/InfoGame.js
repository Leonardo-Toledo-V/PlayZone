import { ShopContext } from '@/context/ShopProvider';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';

function InfoGame({ info }) {
    const {id, title, cover, price, description } = info;
    const router = useRouter();
    const { setShop } = useContext(ShopContext);

    const handleBuy = (e) => {
        e.preventDefault();
        setShop(id);
        router.push("/shop");
    }

    return (
        <>
        <div className="flex flex-col md:flex-row md:w-full">
            <div className="bg-cover bg-no-repeat bg-center flex justify-center md:p-6 md:w-1/2">
                <img className='w-[250px] sm:w-[300px] md:w-[350px] lg:w-[450px]  2xl:w-[600px] max-h-[570px] max-w-[400px] mt-4 shadow-xl mb-4' alt="" src={cover} />
            </div>
            <div className='flex flex-col pt-6 px-12 md:p-6 md:w-1/2'>
            <h2 className="text-2xl font-sm text-gray-600 mt-2">{title}</h2>
            <p className="text-lg text-orange-500 mb-2">Price: ${price}</p>
            <p className="text-base mb-4 truncate  md:whitespace-pre-wrap md:flex-grow md:max-h-[350px] lg:max-h-[450px] 2xl:max-h-[600px]">
                {description}
            </p>
            <button onClick={handleBuy} className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded cursor-pointer transition duration-300 mb-4 md:mb-0">
                Comprar
            </button>
            </div>
            
        </div>
        </>
        
    )
}

export default InfoGame;
