import { SearchContext } from '@/context/SearchProvider';
import React, { useContext } from 'react'

function SalesSearch() {

const { searchTerm, setSearchTerm } = useContext (SearchContext);
const handleSearch =(e)=>{
    setSearchTerm(e.target.value);
  }

  return (
    <header className="bg-white shadow-lg mb-1">
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex justify-around">
      <h1 className="hidden sm:inline-flex text-3xl font-bold tracking-tight text-gray-900">Sales</h1>
      <input
                  className="inline-flex border-2 border-gray-200 bg-gray-200 h-10 px-5 sm:pr-32 rounded-lg text-sm focus:outline-none"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={handleSearch}
              />
      </div>
  </header>
  )
}

export default SalesSearch;
