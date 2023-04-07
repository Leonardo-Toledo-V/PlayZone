import { SearchContext } from '@/context/SearchProvider';
import React, { Fragment, useContext } from 'react'

function SalesCard() {
  const { searchTerm } = useContext(SearchContext);
  const testData = [
    {
      id: "1",
      name: "John",
      email: "John",
      videogame: {
        id: '122',
        title: 'Grand Theft Auto V',
        cover: 'https://imgs.search.brave.com/MNtLpkSpWwl8BBlOgOLQleamkBBW9z4MKrojHHApWqU/rs:fit:616:768:1/g:ce/aHR0cHM6Ly9jb25z/b2xlZ2FtZXMuY29t/LnVhL3dhLWRhdGEv/cHVibGljL3Nob3Av/cHJvZHVjdHMvNTMv/MjcvMjc1My9pbWFn/ZXMvODgwMC84ODAw/Ljc1MHgwLmpwZw',
        price: 22.99,
        description: 'This is the best game'
      }
    },
    {
      id: "2",
      name: "John",
      email: "John",
      videogame: {
        id: '123',
        title: 'Minecraft',
        cover: 'https://imgs.search.brave.com/BipG1dwEAZbEYR2UHggZNOpBSSiTWmDjT0H8nsFIpSc/rs:fit:882:1080:1/g:ce/aHR0cHM6Ly9kaXhn/YW1lci5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjEvMDYv/bWluZWNyYWZ0LXBz/NS5qcGc',
        price: 10.99,
        description: 'This is the best game'
      }
    },
    {
      id: "3",
      name: "John",
      email: "John",
      videogame: {
        id: '124',
        title: 'God of war',
        cover: 'https://imgs.search.brave.com/r1l5cfsKVZKjiIhF8S46P6rxExW2JqFZD49ippNAZVE/rs:fit:768:960:1/g:ce/aHR0cHM6Ly9nYW1l/c2NlbnRlci5wZS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMS8w/NC9HT0QtT0YtV0FS/LVBTNS03Njh4OTYw/LmpwZw',
        price: 11.99,
        description: 'This is the best game'
      }
    },
    {
      id: "4",
      name: "John",
      email: "John",
      videogame: {
        id: '125',
        title: 'Red Dead Redemption 2',
        cover: 'https://imgs.search.brave.com/edjQXvD_XLg82XHTdyNjb3eeRDMhvSVF1e5hZwguqes/rs:fit:882:1080:1/g:ce/aHR0cHM6Ly9kaXhn/YW1lci5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjEvMDYv/cmVkLWRlYWQtcmVk/ZW1wdGlvbi1wczUu/anBn',
        price: 15.99,
        description: 'This is the best game'
      }
    },
    {
      id: "5",
      name: "John",
      email: "John",
      videogame: {
        id: '126',
        title: 'Spiderman',
        cover: 'https://imgs.search.brave.com/ERn6HLLGIS80iRAJ0yDCcWerHvGB69DzV6qealJDDQI/rs:fit:800:1000:1/g:ce/aHR0cHM6Ly9nYW1l/c2NlbnRlci5wZS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMS8w/NC9NYXJ2ZWxzLVNw/aWRlci1NYW4tR2Ft/ZS1vZi10aGUtWWVh/ci1FZGl0aW9uLVBT/NS5qcGc',
        price: 12.99,
        description: 'This is the best game'
      }
    },
    {
      id: "6",
      name: "John",
      email: "John",
      videogame: {
        id: '127',
        title: 'Spiderman Miles Morales',
        cover: 'https://imgs.search.brave.com/qWPqcdylo9NvCXzfq6Y9SBnENJh7860HLBaR8EiaajQ/rs:fit:822:1024:1/g:ce/aHR0cHM6Ly9nbG9i/YWwtaW1nLmdhbWVy/Z2VuLmNvbS9tYXJ2/ZWwtc3BpZGVyLW1h/bi1taWxlcy1tb3Jh/bGVzLXBzNS1ib2l0/ZS1qYXF1ZXR0ZS1j/b3ZlcjA0XzA5MDA5/NTcyOTguanBn',
        price: 12.99,
        description: 'This is the best game'
      }
    },
    {
      id: "7",
      name: "John",
      email: "John",
      videogame: {
        id: '128',
        title: 'Assassins Creed Valhalla',
        cover: 'https://imgs.search.brave.com/NAX1FqMM7QjsRO6Je0cfCStBFEOBB_hUQWk3zg4B_fQ/rs:fit:1000:1200:1/g:ce/aHR0cHM6Ly93d3cu/cHduZWRnYW1lcy5j/by56YS9pbWFnZXMv/c3Rvcmllcy92aXJ0/dWVtYXJ0L3Byb2R1/Y3QvYXNzYXNzaW5z/X2NyZWVkX3ZhbGhh/bGxhX3VsdGltYXRl/X2VkaXRpb25fcHM1/LmpwZw',
        price: 12.99,
        description: 'This is the best game'
      }
    },
    {
      id: "8",
      name: "John",
      email: "John",
      videogame: {
        id: '129',
        title: 'FIFA 23',
        cover: 'https://imgs.search.brave.com/frHQsy1svYSJPtNYggcC-c25X2bDV5QtUYL1iHU2tNY/rs:fit:445:554:1/g:ce/aHR0cHM6Ly9pbWFn/ZXMucHVzaHNxdWFy/ZS5jb20vOGI4OWE5/ODY3NGQ3NC9maWZh/LTIzLXBzNS1wbGF5/c3RhdGlvbi01LTEu/NDQ1eC5qcGc',
        price: 12.99,
        description: 'This is the best game'
      }
    },
    {
      id: "9",
      name: "John",
      email: "John",
      videogame: {
        id: '130',
        title: 'Batman Return to Arkham',
        cover: 'https://imgs.search.brave.com/TzdDpVWRpqEqo4LoxcRf9llZHxBMlZOM6LZx-IF6YUU/rs:fit:600:748:1/g:ce/aHR0cHM6Ly9nYW1l/c3RvcmVwZXJ1LmNv/bS9maWxlcy9pbWFn/ZXMvcHJvZHVjdG9z/LzE2MjUxODE5NTMt/Mi1qdWVnb3MtZW4t/MS1iYXRtYW4tcmV0/dXJuLXRvLWFya2hh/bS1wczUuanBn',
        price: 12.99,
        description: 'This is the best game'
      }
    },
    {
      id: "10",
      name: "John",
      email: "John",
      videogame: {
        id: '131',
        title: 'Injustice Gods Among Us',
        cover: 'https://imgs.search.brave.com/ds3PrEjB0XwSTVV3HzI313-pYrsvf_CuuTfu1bxVLcs/rs:fit:882:1080:1/g:ce/aHR0cHM6Ly9kaXhn/YW1lci5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjEvMDcv/aW5qdXN0aWNlLWdv/ZHMtYW1vbmctdXMt/dWx0aW1hdGUtZWRp/dGlvbi1wczUuanBn',
        price: 12.99,
        description: 'This is the best game'
      }
    }
  ]
  const filteredGames = testData.filter((game) => {
    return (
      game.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      game.email.toLowerCase().includes(searchTerm.toLowerCase())||
      game.videogame.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
  return (
    <div className='flex justify-center mt-4'>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 lg:grid-cols-4 ">
      {filteredGames.map((game, index) => {
        return (
          <Fragment key={index}>
            <div className="bg-white space-y-3 p-4 rounded-sm shadow">
              <div className="flex justify-center space-x-2 text-sm">
                <div>
                  <span className="py-1.5 px-14 text-sm font-bold  tracking-wider text-red-800 bg-red-200 rounded-sm bg-opacity-50">
                    Sold
                  </span>
                </div>
              </div>
              <a className="text-red-500 font-bold flex justify-center mt-0">
                {game.videogame.title} </a>

              <div className="text-sm font-medium text-black flex justify-center items-center">
                <img className='w-[150px]' src={game.videogame.cover} />
              </div>
              <div className='text-sm text-gray-500 ml-4'>Comprador: {game.name}</div>
              <div className='text-sm text-gray-500 ml-4 '>Correo: {game.email}</div>
              <div className="flex items-center justify-center space-x-2 text-sm">
                <div>
                  <a className="text-red-500 font-bold">
                    Profit:
                  </a>
                </div>
                <div className="text-gray-500">
                  ${game.videogame.price}
                </div>
              </div>

            </div>
          </Fragment>
        )
      })}
    </div>
    </div>

  )
}

export default SalesCard;
