import React, { useContext, useEffect, useState } from 'react'
import GameCard from './GameCard';
import { SearchContext } from '@/context/SearchProvider';
import axios from '@/libs/axios';
import { PageContext } from '@/context/PageProvider';
import Pagination from '../dashboard/Pagination';

function Games() {
    const [data, setData] = useState([]);
    const { page, setLastPage } = useContext(PageContext);
    const { searchTerm, setSearchTerm } = useContext(SearchContext);
    useEffect(()=>{
        axios.get(`/api/videogames?page=${page}`).then(function(response){
            setLastPage(response.data.last_page);
            setData(response.data.data)
           });
    },[page]);

    

  
    const filteredGames = data.filter((game) => {
        return (
          game.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
      });

      if(data.length === 0){
        return(
          <div className='flex justify-center  items-center h-[400px] flex-grow text-gray-500 text-sm font-semibold my-12'>
          We don't have videogames to show you, but we are going to add more later, thanks for your patience!:)
          </div>
        )
      }

      const handleSearch =(e)=>{
        setSearchTerm(e.target.value);
    }

  return (
    <>
    <div className="flex items-center mt-6 pt-8">
      <hr className="w-full mr-8 h-0.5 bg-orange-400" />
      <span className="text-xl font-sm text-orange-500">Videogames</span>
      <hr className="w-full ml-8 h-0.5 bg-orange-400" />
    </div>
        
    <div className='flex justify-center '>
      <input
         className="inline-flex md:hidden border-2 border-gray-300 bg-white h-10 px-5 pr-32 rounded-lg text-sm focus:outline-none"
        placeholder="Search"
         value={searchTerm}
        onChange={handleSearch}
        />
      </div>
      <Pagination/>
        <section className='py-16'>
            <div className='container mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm
                mx-auto md:max-w-none md:mx-0'>
                {filteredGames.map((game) =>{
                    return <GameCard game={game} key={game.id}/>
                })}
                </div>
            </div>
        </section>
    </>
  );
};

export default Games;

  /* const testData =[
        {
            id: '122',
            title: 'Grand Theft Auto V',
            cover: 'https://imgs.search.brave.com/MNtLpkSpWwl8BBlOgOLQleamkBBW9z4MKrojHHApWqU/rs:fit:616:768:1/g:ce/aHR0cHM6Ly9jb25z/b2xlZ2FtZXMuY29t/LnVhL3dhLWRhdGEv/cHVibGljL3Nob3Av/cHJvZHVjdHMvNTMv/MjcvMjc1My9pbWFn/ZXMvODgwMC84ODAw/Ljc1MHgwLmpwZw',
            price: 22.99,
            description: 'This is the best game'
        },
        {
            id: '123',
            title: 'Minecraft',
            cover: 'https://imgs.search.brave.com/BipG1dwEAZbEYR2UHggZNOpBSSiTWmDjT0H8nsFIpSc/rs:fit:882:1080:1/g:ce/aHR0cHM6Ly9kaXhn/YW1lci5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjEvMDYv/bWluZWNyYWZ0LXBz/NS5qcGc',
            price: 10.99,
            description: 'This is the best game'
        },
        {
            id: '124',
            title: 'God of war',
            cover: 'https://imgs.search.brave.com/r1l5cfsKVZKjiIhF8S46P6rxExW2JqFZD49ippNAZVE/rs:fit:768:960:1/g:ce/aHR0cHM6Ly9nYW1l/c2NlbnRlci5wZS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMS8w/NC9HT0QtT0YtV0FS/LVBTNS03Njh4OTYw/LmpwZw',
            price: 11.99,
            description: 'This is the best game'
        },
        {
            id: '125',
            title: 'Red Dead Redemption 2',
            cover: 'https://imgs.search.brave.com/edjQXvD_XLg82XHTdyNjb3eeRDMhvSVF1e5hZwguqes/rs:fit:882:1080:1/g:ce/aHR0cHM6Ly9kaXhn/YW1lci5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjEvMDYv/cmVkLWRlYWQtcmVk/ZW1wdGlvbi1wczUu/anBn',
            price: 15.99,
            description: 'This is the best game'
        },
        {
            id: '126',
            title: 'Spiderman',
            cover: 'https://imgs.search.brave.com/ERn6HLLGIS80iRAJ0yDCcWerHvGB69DzV6qealJDDQI/rs:fit:800:1000:1/g:ce/aHR0cHM6Ly9nYW1l/c2NlbnRlci5wZS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMS8w/NC9NYXJ2ZWxzLVNw/aWRlci1NYW4tR2Ft/ZS1vZi10aGUtWWVh/ci1FZGl0aW9uLVBT/NS5qcGc',
            price: 12.99,
            description: 'This is the best game'
        },
        {
            id: '127',
            title: 'Spiderman Miles Morales',
            cover: 'https://imgs.search.brave.com/qWPqcdylo9NvCXzfq6Y9SBnENJh7860HLBaR8EiaajQ/rs:fit:822:1024:1/g:ce/aHR0cHM6Ly9nbG9i/YWwtaW1nLmdhbWVy/Z2VuLmNvbS9tYXJ2/ZWwtc3BpZGVyLW1h/bi1taWxlcy1tb3Jh/bGVzLXBzNS1ib2l0/ZS1qYXF1ZXR0ZS1j/b3ZlcjA0XzA5MDA5/NTcyOTguanBn',
            price: 12.99,
            description: 'This is the best game'
        },
        {
            id: '128',
            title: 'Assassins Creed Valhalla',
            cover: 'https://imgs.search.brave.com/NAX1FqMM7QjsRO6Je0cfCStBFEOBB_hUQWk3zg4B_fQ/rs:fit:1000:1200:1/g:ce/aHR0cHM6Ly93d3cu/cHduZWRnYW1lcy5j/by56YS9pbWFnZXMv/c3Rvcmllcy92aXJ0/dWVtYXJ0L3Byb2R1/Y3QvYXNzYXNzaW5z/X2NyZWVkX3ZhbGhh/bGxhX3VsdGltYXRl/X2VkaXRpb25fcHM1/LmpwZw',
            price: 12.99,
            description: 'This is the best game'
        },
        {
            id: '129',
            title: 'FIFA 23',
            cover: 'https://imgs.search.brave.com/frHQsy1svYSJPtNYggcC-c25X2bDV5QtUYL1iHU2tNY/rs:fit:445:554:1/g:ce/aHR0cHM6Ly9pbWFn/ZXMucHVzaHNxdWFy/ZS5jb20vOGI4OWE5/ODY3NGQ3NC9maWZh/LTIzLXBzNS1wbGF5/c3RhdGlvbi01LTEu/NDQ1eC5qcGc',
            price: 12.99,
            description: 'This is the best game'
        },
        {
            id: '130',
            title: 'Batman Return to Arkham',
            cover: 'https://imgs.search.brave.com/TzdDpVWRpqEqo4LoxcRf9llZHxBMlZOM6LZx-IF6YUU/rs:fit:600:748:1/g:ce/aHR0cHM6Ly9nYW1l/c3RvcmVwZXJ1LmNv/bS9maWxlcy9pbWFn/ZXMvcHJvZHVjdG9z/LzE2MjUxODE5NTMt/Mi1qdWVnb3MtZW4t/MS1iYXRtYW4tcmV0/dXJuLXRvLWFya2hh/bS1wczUuanBn',
            price: 12.99,
            description: 'This is the best game'
        },
        {
            id: '131',
            title: 'Injustice Gods Among Us',
            cover: 'https://imgs.search.brave.com/ds3PrEjB0XwSTVV3HzI313-pYrsvf_CuuTfu1bxVLcs/rs:fit:882:1080:1/g:ce/aHR0cHM6Ly9kaXhn/YW1lci5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjEvMDcv/aW5qdXN0aWNlLWdv/ZHMtYW1vbmctdXMt/dWx0aW1hdGUtZWRp/dGlvbi1wczUuanBn',
            price: 12.99,
            description: 'This is the best game'
        }
    ]; */
