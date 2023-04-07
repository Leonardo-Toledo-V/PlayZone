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
        <div className="flex flex-col items-center">
            <div className="flex justify-center items-center h-300 w-300 bg-cover bg-no-repeat bg-center max-w-sm max-h-sm">
                <img className='max-w-[200px] mt-4 shadow-xl' alt="" src={cover} />
            </div>
            <h2 className="text-2xl font-bold mt-2">{title}</h2>
            <p className="text-lg text-orange-500 mb-2">Price: ${price}</p>
            <p className="text-base mb-4">
                {description}
            </p>
            <button onClick={handleBuy} className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded cursor-pointer transition duration-300 mb-4">
                Comprar
            </button>
        </div>
    )
}

export default InfoGame;
