import { SearchContext } from '@/context/SearchProvider';
import React, { Fragment, useContext, useState } from 'react'
import Modal from '../Modal';
import Add from './crud/Add';

function DashboardSearch() {
  const [showModal, setShowModal] = useState(false);

const { searchTerm, setSearchTerm } = useContext (SearchContext);
const handleSearch =(e)=>{
    setSearchTerm(e.target.value);
  }

  return (
    <header className="bg-white shadow-lg mb-1">
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex justify-between">
      <h1 className="hidden sm:inline-flex text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
      <input
                  className="inline-flex border-2 border-gray-200 bg-gray-200 h-10 px-5 sm:pr-32 rounded-lg text-sm focus:outline-none"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={handleSearch}
              />
              <Fragment>
              <span onClick={()=>setShowModal(true)} className="cursor-pointer px-8 py-2 text-sm font-medium  tracking-wider text-green-800 bg-green-200 rounded-sm bg-opacity-50">Add</span>             
              <Modal isVisible={showModal} onClose={()=> setShowModal(false)}>
                  <Add/>
              </Modal>
              </Fragment>
       </div>
  </header>
  )
}

export default DashboardSearch;
