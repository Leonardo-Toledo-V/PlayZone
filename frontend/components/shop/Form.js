import { ShopContext } from '@/context/ShopProvider';
import React, { useContext } from 'react'
import NotShop from './NotShop';
import { useRouter } from 'next/router';
import Swal from 'sweetalert2'
 
 function Form() {
  const {shop} = useContext(ShopContext);
  const router = useRouter();
  if(!shop){
    return(
      <NotShop/>
    )
  }
  const testData =[
    {
      id: null,
      title: 'Grand Theft Auto V',
      cover: 'https://imgs.search.brave.com/MNtLpkSpWwl8BBlOgOLQleamkBBW9z4MKrojHHApWqU/rs:fit:616:768:1/g:ce/aHR0cHM6Ly9jb25z/b2xlZ2FtZXMuY29t/LnVhL3dhLWRhdGEv/cHVibGljL3Nob3Av/cHJvZHVjdHMvNTMv/MjcvMjc1My9pbWFn/ZXMvODgwMC84ODAw/Ljc1MHgwLmpwZw',
      price: 22.99,
      description: 'This is the best game'
  },

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
    },
    {
        id: '132',
        title: 'Grand Theft Auto V',
        cover: 'https://imgs.search.brave.com/MNtLpkSpWwl8BBlOgOLQleamkBBW9z4MKrojHHApWqU/rs:fit:616:768:1/g:ce/aHR0cHM6Ly9jb25z/b2xlZ2FtZXMuY29t/LnVhL3dhLWRhdGEv/cHVibGljL3Nob3Av/cHJvZHVjdHMvNTMv/MjcvMjc1My9pbWFn/ZXMvODgwMC84ODAw/Ljc1MHgwLmpwZw',
        price: 22.99,
        description: 'This is the best game'
    },
    {
        id: '133',
        title: 'Minecraft',
        cover: 'https://imgs.search.brave.com/BipG1dwEAZbEYR2UHggZNOpBSSiTWmDjT0H8nsFIpSc/rs:fit:882:1080:1/g:ce/aHR0cHM6Ly9kaXhn/YW1lci5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjEvMDYv/bWluZWNyYWZ0LXBz/NS5qcGc',
        price: 10.99,
        description: 'This is the best game'
    },
    {
        id: '134',
        title: 'God of war',
        cover: 'https://imgs.search.brave.com/r1l5cfsKVZKjiIhF8S46P6rxExW2JqFZD49ippNAZVE/rs:fit:768:960:1/g:ce/aHR0cHM6Ly9nYW1l/c2NlbnRlci5wZS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMS8w/NC9HT0QtT0YtV0FS/LVBTNS03Njh4OTYw/LmpwZw',
        price: 11.99,
        description: 'This is the best game'
    },
    {
        id: '135',
        title: 'Red Dead Redemption 2',
        cover: 'https://imgs.search.brave.com/edjQXvD_XLg82XHTdyNjb3eeRDMhvSVF1e5hZwguqes/rs:fit:882:1080:1/g:ce/aHR0cHM6Ly9kaXhn/YW1lci5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjEvMDYv/cmVkLWRlYWQtcmVk/ZW1wdGlvbi1wczUu/anBn',
        price: 15.99,
        description: 'This is the best game'
    },
    {
        id: '136',
        title: 'Spiderman',
        cover: 'https://imgs.search.brave.com/ERn6HLLGIS80iRAJ0yDCcWerHvGB69DzV6qealJDDQI/rs:fit:800:1000:1/g:ce/aHR0cHM6Ly9nYW1l/c2NlbnRlci5wZS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMS8w/NC9NYXJ2ZWxzLVNw/aWRlci1NYW4tR2Ft/ZS1vZi10aGUtWWVh/ci1FZGl0aW9uLVBT/NS5qcGc',
        price: 12.99,
        description: 'This is the best game'
    },
    {
        id: '137',
        title: 'Spiderman Miles Morales',
        cover: 'https://imgs.search.brave.com/qWPqcdylo9NvCXzfq6Y9SBnENJh7860HLBaR8EiaajQ/rs:fit:822:1024:1/g:ce/aHR0cHM6Ly9nbG9i/YWwtaW1nLmdhbWVy/Z2VuLmNvbS9tYXJ2/ZWwtc3BpZGVyLW1h/bi1taWxlcy1tb3Jh/bGVzLXBzNS1ib2l0/ZS1qYXF1ZXR0ZS1j/b3ZlcjA0XzA5MDA5/NTcyOTguanBn',
        price: 12.99,
        description: 'This is the best game'
    },
    {
        id: '138',
        title: 'Assassins Creed Valhalla',
        cover: 'https://imgs.search.brave.com/NAX1FqMM7QjsRO6Je0cfCStBFEOBB_hUQWk3zg4B_fQ/rs:fit:1000:1200:1/g:ce/aHR0cHM6Ly93d3cu/cHduZWRnYW1lcy5j/by56YS9pbWFnZXMv/c3Rvcmllcy92aXJ0/dWVtYXJ0L3Byb2R1/Y3QvYXNzYXNzaW5z/X2NyZWVkX3ZhbGhh/bGxhX3VsdGltYXRl/X2VkaXRpb25fcHM1/LmpwZw',
        price: 12.99,
        description: 'This is the best game'
    },
    {
        id: '139',
        title: 'FIFA 23',
        cover: 'https://imgs.search.brave.com/frHQsy1svYSJPtNYggcC-c25X2bDV5QtUYL1iHU2tNY/rs:fit:445:554:1/g:ce/aHR0cHM6Ly9pbWFn/ZXMucHVzaHNxdWFy/ZS5jb20vOGI4OWE5/ODY3NGQ3NC9maWZh/LTIzLXBzNS1wbGF5/c3RhdGlvbi01LTEu/NDQ1eC5qcGc',
        price: 12.99,
        description: 'This is the best game'
    },
    {
        id: '140',
        title: 'Batman Return to Arkham',
        cover: 'https://imgs.search.brave.com/TzdDpVWRpqEqo4LoxcRf9llZHxBMlZOM6LZx-IF6YUU/rs:fit:600:748:1/g:ce/aHR0cHM6Ly9nYW1l/c3RvcmVwZXJ1LmNv/bS9maWxlcy9pbWFn/ZXMvcHJvZHVjdG9z/LzE2MjUxODE5NTMt/Mi1qdWVnb3MtZW4t/MS1iYXRtYW4tcmV0/dXJuLXRvLWFya2hh/bS1wczUuanBn',
        price: 12.99,
        description: 'This is the best game'
    },
    {
        id: '141',
        title: 'Injustice Gods Among Us',
        cover: 'https://imgs.search.brave.com/ds3PrEjB0XwSTVV3HzI313-pYrsvf_CuuTfu1bxVLcs/rs:fit:882:1080:1/g:ce/aHR0cHM6Ly9kaXhn/YW1lci5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjEvMDcv/aW5qdXN0aWNlLWdv/ZHMtYW1vbmctdXMt/dWx0aW1hdGUtZWRp/dGlvbi1wczUuanBn',
        price: 12.99,
        description: 'This is the best game'
    },
];

  const result = testData.find((item) => item.id === shop);

  const handleExit =()=>{
    router.push("/")
}
  const handleSubmit =(e)=>{
    e.preventDefault();
    Swal.fire({
      icon: 'success',
      title: 'Thanks for your purchase',
      showConfirmButton: false,
      timer: 1500
    }).then(() => {
      router.push("/");
  });
    
}

  return (
    <div className='flex justify-center p-8'>
       <form onSubmit={handleSubmit} className='mt-14'>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Shopping details</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            This information is about your order
          </p>
          <div className="mt-10">
            <div className="">
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                Item
              </label>
              <table className='w-full'>
                <tbody>
                  <tr>
                  <td className='tableGame flex justify-center items-center'><img className='w-[90px]' src={result.cover}/></td>
                  <td className='tableGame'>{result.title}</td>
                  <td className='tableGame'>{result.price}</td>
                  </tr>
                </tbody>
              </table>

            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">We need to use this personal information only to complete your order.</p>

          <div className="mt-10 ">
            <div className="">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" onClick={handleExit} className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 transition duration-300">
          Save
        </button>
      </div>
    </form>
    
    </div>
 
  )
}
export default Form;