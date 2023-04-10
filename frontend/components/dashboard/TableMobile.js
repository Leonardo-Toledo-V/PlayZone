import { SearchContext } from '@/context/SearchProvider';
import React, { Fragment, useContext, useState } from 'react'
import Swal from 'sweetalert2';
import Modal from '../Modal';
import Update from './crud/Update';
import axios from '@/libs/axios';

function TableMobile(props) {
    const data = props.data;
    if(data.length === 0){
      return(
        <div className='flex justify-center h-[400px] flex-grow text-gray-500 text-sm font-semibold my-12'>There is not games to show</div>
      )
    }
    const { searchTerm } = useContext(SearchContext);

    const [showModal, setShowModal] = useState(false);
    const [id, setId] = useState(null);

    const filteredGames = data.filter((game) => {
        return (
          game.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
      });


      const handleDelete =(e)=>{
        e.preventDefault();
        const id = e.target.id;
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'cursor-pointer p-1.5 text-sm font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-sm bg-opacity-50 m-2',
              cancelButton: 'cursor-pointer p-1.5 text-sm font-medium uppercase tracking-wider text-red-800 bg-red-200 rounded-sm bg-opacity-50 m-2',
            },
            buttonsStyling: false
          })
          
          swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
          }).then((result) => {
            if (result.isConfirmed) {
              axios.delete(`api/videogames/${id}`)
              swalWithBootstrapButtons.fire(
                'Deleted!',
                'Your videogame has been deleted.',
                'success'
              ).then(() => {window.location.reload();});
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                'Cancelled',
                'Your imaginary file is safe :)',
                'error',
              )
            }
            
          })
        
      }

      const handleUpdate = (e)=>{
        setShowModal(true);
        setId(e.target.id)
      }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:hidden">
            {filteredGames.map((game, index) => {
                return (
                    <Fragment key={index}>
                        <div className="bg-white space-y-3 p-4 rounded-sm shadow">
                            <div className="flex items-center justify-center space-x-2 text-sm">
                                <div>
                                    <a className="text-orange-500 font-bold hover:underline">
                                        {game.title}
                                    </a>
                                </div>
                                <div className="text-gray-500">
                                    ${game.price}
                                </div>
                            </div>
                            <div className="flex justify-center items-center text-sm text-gray-700">
                                {game.description}
                            </div>
                            <div className='flex items-center justify-center space-x-2'>
                            <div>
                                    <span id={game.id} onClick={handleUpdate} className="cursor-pointer p-1.5 text-sm font-medium  tracking-wider text-blue-800 bg-blue-200 rounded-sm bg-opacity-50">
                                        Update
                                    </span>
                                </div>
                                <div>
                                    <span id={game.id} onClick={handleDelete} className="cursor-pointer p-1.5 text-sm font-medium  tracking-wider text-red-800 bg-red-200 rounded-sm bg-opacity-50">
                                        Delete
                                    </span>
                                </div>
                            </div>
                            <div className="text-sm font-medium text-black flex justify-center items-center">
                                <img className='w-[200px]' src={game.cover}/>
                            </div>
                        </div>
                    </Fragment>
                )
            })}
              <Fragment>
        <Modal isVisible={showModal} onClose={()=> setShowModal(false)}>
            <Update data={data} id={id}/>
        </Modal>
    </Fragment>
        </div>
    )
}

export default TableMobile

/*       {testData.map((game, index) =>{
                    return (
                    <Fragment key={index}>
                    <div className='bg-white space-y-3 p-4 rounded-sm shadow'>
        <div className='flex items-center space-x-2 text-sm'>
            <div>
                <a className='text-orange-500 font-bold hover:underline'>Order</a>
            </div>
            <div className='text-gray-500'>10/20/2023</div>
            <div><span className='cursor-pointer p-1.5 text-sm font-medium  tracking-wider text-blue-800 bg-blue-200 rounded-sm bg-opacity-50'>Update</span>    </div>
            <div><span className='cursor-pointer p-1.5 text-sm font-medium  tracking-wider text-red-800 bg-red-200 rounded-sm bg-opacity-50'>Delete</span>    </div>
            <div><span className='cursor-pointer p-1.5 text-sm font-medium  tracking-wider text-green-800 bg-green-200 rounded-sm bg-opacity-50'>Add</span>    </div>
        </div>
        <div className='text-sm text-gray-700'>Description</div>
        <div className='text-sm font-medium text-black'>Total</div>
    </div>
                    
                    </Fragment>)
                })}

                    */
