import { SearchContext } from '@/context/SearchProvider';
import React, { Fragment, useContext } from 'react'

function TableCard(props) {
    const testData = props.testData;
    const { searchTerm } = useContext(SearchContext);

    const filteredGames = testData.filter((game) => {
        return (
          game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          game.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
      });

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
                    <td className='tableGame'>{game.description}</td>
                    <td className='tableGame'>{game.price}</td>
                    <td className='tableGame'>
                        <span className='cursor-pointer p-1.5 text-sm font-medium uppercase tracking-wider text-blue-800 bg-blue-200 rounded-sm bg-opacity-50'>Update</span>
                    </td>
                    <td className='tableGame'>
                        <span className=' cursor-pointer p-1.5 text-sm font-medium uppercase tracking-wider text-red-800 bg-red-200 rounded-sm bg-opacity-50'>Delete</span>
                    </td>
            </tr>
                    </Fragment>)
                })}
          
        </tbody>
    </table>
</div> 
  )
}

export default TableCard;
