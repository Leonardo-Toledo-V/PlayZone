import React, { useContext, useEffect, useState } from 'react'
import TableMobile from './TableMobile';
import TableCard from './TableCard';
import DashboardSearch from './DashboardSearch';
import axios from '@/libs/axios';
import { PageContext } from '@/context/PageProvider';
import Pagination from './Pagination';

function Table() {
    const { page, setLastPage } = useContext(PageContext);
    const [data, setData] = useState([]);
    useEffect(()=>{
        axios.get(`/api/videogames?page=${page}`).then(function(response){
            setLastPage(response.data.last_page);
            setData(response.data.data)
           });
    },[page])

  return (
    <>
                <DashboardSearch/>
                <div className='p-5  bg-gray-100 flex-grow'>
                        <Pagination/>
                        <TableCard data={data}/>
                        <TableMobile data={data}/>
                </div>
    </>
  )
}

export default Table;

