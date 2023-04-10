import { PageContext } from '@/context/PageProvider';
import React, { useContext } from 'react'

export default function Pagination() {
    const { page, setPage, lastPage } = useContext(PageContext);

    const handleNext =(e)=>{
        e.preventDefault();
        if(page < lastPage){
            setPage(page+1)
        }
       
    }
    const handlePrevious =(e)=>{
        e.preventDefault();
        if(page>=2){
            setPage(page-1)
        }
    }
    return (
        <div className="flex items-center justify-between bg-white px-4 pt-3 sm:px-6  ">
            <div className="flex flex-1 items-center justify-center md:justify-end">
                    <nav
                        className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                        aria-label="Pagination">
                        <a
                            onClick={handlePrevious}
                            href="#"
                            className="relative items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 inline-flex">
                            {"<"}
                        </a>
                        <a
                            href="#"
                            className="relative cursor-text  items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300  focus:outline-offset-0 inline-flex">
                            Page: {page}
                        </a>
                        <a
                            onClick={handleNext}
                            href="#"
                            className="relative items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 inline-flex">
                            {">"}
                        </a>
                    </nav>
            </div>
        </div>
    )
}
