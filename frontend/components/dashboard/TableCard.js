import { SearchContext } from '@/context/SearchProvider';
import React, { Fragment, useContext, useState } from 'react'
import Swal from 'sweetalert2';
import Modal from '../Modal';
import Update from './crud/Update';
import axios from '@/libs/axios';

function TableCard(props) {
    const data = props.data;
    const { searchTerm } = useContext(SearchContext);

    const [showModal, setShowModal] = useState(false);
    const [id, setId] = useState(null);

    const filteredGames = data.filter((game) => {
        return (
          game.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
      });

      const handleUpdate = (e)=>{
        setShowModal(true);
        setId(e.target.id)
      }

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
  return (
    <div className='overflow-auto rounded-sm shadow-lg hidden lg:block'>
    <table className='shadow-2xl font-extralight border-2 border-slate-200 w-full'>
        <thead className='text-white bg-gray-50 border-b-2 border-gray-200'>
            <tr className='text-center'>
                <th className='tableItem'>id</th>
                <th className='tableItem'>Cover</th>
                <th className='tableItem'>Title</th>
                <th className='tableItem'>Description</th>
                <th className='tableItem'>Price</th>
                <th className='tableItem'>Update</th>
                <th className='tableItem'>Delete</th>
            </tr>
        </thead>
        <tbody className='text-center divide-y divide-gray-100'>
        {filteredGames.map((game, index) =>{
                    return (
                    <Fragment key={index}>
                    <tr className='bg-white duration-300 '>
                    <td className='tableGame'>{game.id}</td>
                    <td className='tableGame flex justify-center items-center'><img className='w-[70px]' src={game.cover}/></td>
                    <td className='tableGame'>{game.title}</td>
                    <td className='tableGame truncate max-w-[5px]'>{game.description}</td>
                    <td className='tableGame'>$ {game.price} USD</td>
                    <td className='tableGame'>
                        <span id={game.id} onClick={handleUpdate} className='cursor-pointer p-1.5 text-sm font-medium uppercase tracking-wider text-blue-800 bg-blue-200 rounded-sm bg-opacity-50'>Update</span>
                    </td>
                    <td className='tableGame'>
                        <span id={game.id} onClick={handleDelete} className='cursor-pointer p-1.5 text-sm font-medium uppercase tracking-wider text-red-800 bg-red-200 rounded-sm bg-opacity-50'>Delete</span>
                    </td>
            </tr>
                    </Fragment>)
                })}
          
        </tbody>
    </table>
    <Fragment>
        <Modal isVisible={showModal} onClose={()=> setShowModal(false)}>
            <Update data={data} id={id}/>
        </Modal>
    </Fragment>
</div> 
  )
}
export default TableCard;
