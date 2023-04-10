import { SearchContext } from '@/context/SearchProvider';
import axios from '@/libs/axios';
import React, { Fragment, useContext, useEffect, useState } from 'react'
import Swal from 'sweetalert2';

function SalesCard() {
  const [data, setData] = useState([]);
  const { searchTerm } = useContext(SearchContext);
  useEffect(()=>{
    axios.get('/api/shoppings').then(function(response){
        setData(response.data)
       });
},[1]);

  if(data.length === 0){
    return(
      <div className='flex justify-center h-[400px] flex-grow text-gray-500 text-sm font-semibold my-12'>There is not purchases to show</div>
    )
  }
  const filteredGames = data.filter((game) => {
    return (
      game.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      game.email.toLowerCase().includes(searchTerm.toLowerCase())||
      game.videogame.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const handleDelete =(e)=>{
    e.preventDefault();
    const id = e.target.id;
    axios.delete(`api/shoppings/${id}`)
    Swal.fire({
      icon: 'success',
      title: 'Deleted',
      showConfirmButton: false,
      timer: 600
    }
    ).then(() => {window.location.reload();});
  }

  return (
    <div className='flex justify-center mt-4 mb-12'>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 lg:grid-cols-4 ">
      {filteredGames.map((game, index) => {
        return (
          <Fragment key={index}>
            <div className="bg-white space-y-3 p-4 rounded-sm shadow">
              <div className="flex justify-end space-x-2 text-sm ">
                <div>
                  <span onClick={handleDelete} id={game.id} className='py-1 px-4 text-sm font-bold  tracking-wider text-red-800 cursor-pointer rounded-sm bg-opacity-50  bg-red-200 '>
                    X
                  </span>
                </div>
              </div>
              <a className="text-red-500 font-bold flex justify-center mt-0">
                {game.videogame.title} </a>

              <div className="text-sm font-medium text-black flex justify-center items-center">
                <img className='w-[150px]' src={game.videogame.cover} />
              </div>
              <div className='text-sm text-gray-500 ml-4'>Buyer: {game.fullName}</div>
              <div className='text-sm text-gray-500 ml-4 '>Email: {game.email}</div>
              <div className="flex items-center justify-center space-x-2 text-sm">
                <div>
                  <a className="text-red-500 font-bold">
                    Profit:
                  </a>
                </div>
                <div className="text-gray-500">
                  ${game.videogame.price}
                </div>
              </div>

            </div>
          </Fragment>
        )
      })}
    </div>
    </div>

  )
}

export default SalesCard;
