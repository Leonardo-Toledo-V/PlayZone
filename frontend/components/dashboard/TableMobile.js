import { SearchContext } from '@/context/SearchProvider';
import React, { Fragment, useContext } from 'react'

function TableMobile(props) {
    const testData = props.testData;
    const { searchTerm } = useContext(SearchContext);

    const filteredGames = testData.filter((game) => {
        return (
          game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          game.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
      });

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
                                    <span className="cursor-pointer p-1.5 text-sm font-medium  tracking-wider text-blue-800 bg-blue-200 rounded-sm bg-opacity-50">
                                        Update
                                    </span>
                                </div>
                                <div>
                                    <span className="cursor-pointer p-1.5 text-sm font-medium  tracking-wider text-red-800 bg-red-200 rounded-sm bg-opacity-50">
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
