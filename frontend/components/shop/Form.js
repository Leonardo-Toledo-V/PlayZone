import { ShopContext } from '@/context/ShopProvider'
import React, { useContext, useEffect, useState } from 'react'
import NotShop from './NotShop'
import { useRouter } from 'next/router'
import Swal from 'sweetalert2'
import axios from '@/libs/axios'
import { PageContext } from '@/context/PageProvider'

function Form() {
    const [data, setData] = useState([])
    const { shop } = useContext(ShopContext)
    const router = useRouter()
    const form = new FormData()
    const [email, setEmail] = useState('');
    const [fullName, setfullName] = useState('');
    const { page } = useContext(PageContext);
    useEffect(()=>{
        axios.get(`/api/videogames?page=${page}`).then(function(response){
            setData(response.data.data)
           });
    },[]);
    

    if (!shop) {
        return <NotShop />
    }
    const result = data.find(item => item.id === shop)
    if (!result) {
        return (
            <div className="flex justify-center mt-32 items-center font-medium text-sm text-gray-500">
                Loading...
            </div>
        )
    }

    const handleExit = () => {
        router.push('/')
    }
    const handleSubmit = e => {
        e.preventDefault()
        form.append('fullName', fullName)
        form.append('email', email)
        form.append('id_videogame', shop)
        axios
            .post('/api/shoppings', form)
            .then(function (response) {
                Swal.fire({
                    icon: response.data.status,
                    title: 'Thanks for your buy ' + fullName,
                    showConfirmButton: false,
                    timer: 1500,
                }).then(() => {
                    router.push('/')
                })
            })
            .catch(err => {
                console.err(err)
            })
    }

    return (
        <div className="flex justify-center p-8">
            <form onSubmit={handleSubmit} className="mt-14">
                <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">
                            Shopping details
                        </h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">
                            This information is about your order
                        </p>
                        <div className="mt-10">
                            <div className="">
                                <label
                                    htmlFor="username"
                                    className="block text-sm font-medium leading-6 text-gray-900">
                                    Item
                                </label>
                                <table className="w-full">
                                    <tbody>
                                        <tr>
                                            <td className="tableGame flex justify-center items-center">
                                                <img
                                                    className="w-[90px]"
                                                    src={result.cover}
                                                />
                                            </td>
                                            <td className="tableGame">
                                                {result.title}
                                            </td>
                                            <td className="tableGame">
                                                $ {result.price}.00
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">
                            Personal Information
                        </h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">
                            We need to use this personal information only to
                            complete your order.
                        </p>

                        <div className="mt-10 ">
                            <div className="">
                                <label
                                    htmlFor="first-name"
                                    className="block text-sm font-medium leading-6 text-gray-900">
                                    First name
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        autoComplete="off"
                                        required
                                        onChange={e =>
                                            setfullName(e.target.value)
                                        }
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium leading-6 text-gray-900">
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="off"
                                        required
                                        onChange={e => setEmail(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button
                        type="button"
                        onClick={handleExit}
                        className="text-sm font-semibold leading-6 text-gray-900">
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
export default Form
