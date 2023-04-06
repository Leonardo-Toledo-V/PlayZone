import React from 'react'

function Table() {
  return (
    <>
                <div className='p-5 h-screen bg-gray-100'>
                        <div className='overflow-auto rounded-sm shadow-lg hidden lg:block'>
                            <table className='shadow-2xl font-extralight border-2 border-slate-200 w-full'>
                                <thead className='text-white bg-gray-50 border-b-2 border-gray-200'>
                                    <tr className='text-center'>
                                        <th className='py-3 px-6 bg-slate-800 text-sm font-semibold tracking-wide'>id</th>
                                        <th className='py-3 px-6 bg-slate-800 text-sm font-semibold tracking-wide'>Cover</th>
                                        <th className='py-3 px-6 bg-slate-800 text-sm font-semibold tracking-wide'>Title</th>
                                        <th className='py-3 px-6 bg-slate-800 text-sm font-semibold tracking-wide'>Description</th>
                                        <th className='py-3 px-6 bg-slate-800 text-sm font-semibold tracking-wide'>Price</th>
                                        <th className='py-3 px-6 bg-slate-800 text-sm font-semibold tracking-wide'>Update</th>
                                        <th className='py-3 px-6 bg-slate-800 text-sm font-semibold tracking-wide'>Delete</th>
                                        <th className='py-3 px-6 bg-slate-800 text-sm font-semibold tracking-wide'>Add</th>
                                    </tr>
                                </thead>
                                <tbody className='text-center divide-y divide-gray-100'>
                                    <tr className='bg-white duration-300 '>
                                        <td className='py-3 px-6 text-sm text-gray-700 whitespace-nowrap'>1</td>
                                        <td className='py-3 px-6 text-sm text-gray-700 whitespace-nowrap'>img</td>
                                        <td className='py-3 px-6 text-sm text-gray-700 whitespace-nowrap'>Minecraft</td>
                                        <td className='py-3 px-6 text-sm text-gray-700 whitespace-nowrap'>El mejor juego</td>
                                        <td className='py-3 px-6 text-sm text-gray-700 whitespace-nowrap'>19.99</td>
                                        <td className='py-3 px-6 text-sm text-gray-700 whitespace-nowrap'>
                                            <span className='cursor-pointer p-1.5 text-sm font-medium uppercase tracking-wider text-blue-800 bg-blue-200 rounded-sm bg-opacity-50'>Update</span>
                                        </td>
                                        <td className='py-3 px-6 text-sm text-gray-700 whitespace-nowrap'>
                                            <span className=' cursor-pointer p-1.5 text-sm font-medium uppercase tracking-wider text-red-800 bg-red-200 rounded-sm bg-opacity-50'>Delete</span>
                                        </td>
                                        <td className='py-3 px-6 text-sm text-gray-700 whitespace-nowrap'>
                                            <span className='cursor-pointer p-1.5 text-sm font-medium uppercase tracking-wider text-gren-800 bg-green-200 rounded-sm bg-opacity-50'>Add</span>    
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div> 
                         {/* Mobile */}
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 lg:hidden'>
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

                        </div>
                </div>
                   
                   

    </>
  )
}

export default Table;


/* 
<div className="max-w-7xl mx-auto lg:px-8">
                    <div className='flex justify-center items-center'>
                            <table className='shadow-2xl font-extralight border-2 border-slate-200 w-auto'>
                                <thead className='text-white'>
                                    <tr className='text-center'>
                                        <th className='py-3 px-6 bg-slate-800'>id</th>
                                        <th className='py-3 px-6 bg-slate-800'>cover</th>
                                        <th className='py-3 px-6 bg-slate-800'>title</th>
                                        <th className='py-3 px-6 bg-slate-800'>description</th>
                                        <th className='py-3 px-6 bg-slate-800'>price</th>
                                        <th className='py-3 px-6 bg-slate-800'>update</th>
                                        <th className='py-3 px-6 bg-slate-800'>delete</th>
                                        <th className='py-3 px-6 bg-slate-800'>add</th>
                                    </tr>
                                </thead>
                                <tbody className='text-center'>
                                    <tr className='bg-slate-200 cursor-pointer duration-300'>
                                        <td className='py-3 px-6'>1</td>
                                        <td className='py-3 px-6'>img</td>
                                        <td className='py-3 px-6'>Minecraft</td>
                                        <td className='py-3 px-6'>El mejor juego</td>
                                        <td className='py-3 px-6'>19.99</td>
                                        <td className='py-3 px-6'><button className='bg-blue-600 px-4' onClick={handleUpdate}>Update</button></td>
                                        <td className='py-3 px-6'><button className='bg-red-600' onClick={handleDelete}>Delete</button></td>
                                        <td className='py-3 px-6'><button className='bg-green-600' onClick={handleAdd}>Add</button></td>
                                    </tr>
                                </tbody>
                            </table>
                    </div>
                </div>


*/
