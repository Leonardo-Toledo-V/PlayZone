import React, { Fragment, useState } from 'react';
import Modal from '../Modal';
import InfoGame from './InfoGame';

function GameCard({ game }) {
    const { id, title, cover, price } = game;
    const [showModal, setShowModal] = useState(false);
    return (
      <Fragment>
        <div onClick={()=>setShowModal(true)}>
            <div className="bg-white shadow-xl h-[300px] mb-4 relative cursor-pointer hover:scale-105 transition duration-300 border-t-4 border-orange-400">
                <div className="overflow-hidden group transition">
                    <div className="w-full h-full flex justify-center items-center">
                        <div className="w-[200px] mx-auto flex justify-center items-center">
                            <img
                                className="max-h-[200px] "
                                src={cover}
                                alt=""
                            />
                        </div>
                    </div>
                </div>

                <div className="m-3">
                    <div className="font-bold">{title}</div>
                    <h2 className="font-semibold text-orange-600 mb-1">
                        ${price}
                    </h2>
                </div>
            </div>
        </div>
        <Modal isVisible={showModal} onClose={()=> setShowModal(false)}>
          <InfoGame key={id} info={game}></InfoGame>
        </Modal>
      </Fragment>
        
    )
}

export default GameCard
