import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { PhotoIcon } from '@heroicons/react/24/outline'
import axios from '@/libs/axios'

function Update(props) {
    const [photo, setPhoto] = useState(null)
    const [selectedImage, setSelectedImage] = useState(null)

    const id = props.id.toString()
    const testData = props.testData
    const result = testData.find(item => item.id === id)

    useEffect(() => {
        setPhoto(result.cover)
    }, [])

    const handleImageChange = e => {
        const selectedFile = e.target.files[0]
        if (selectedFile != undefined) {
            setSelectedImage(URL.createObjectURL(selectedFile))
            setPhoto(selectedFile)
        }
    }

    const handleSubmit = e => {
        e.preventDefault()
        axios.get('/api/videogames').then(function (response) {
            console.log(response.data)
        })
        Swal.fire({
            icon: 'success',
            title: 'Videogame updated successfully',
            showConfirmButton: false,
            timer: 1500,
        }).then(() => {
            window.location.reload()
        })
    }

    return (
        <div className="flex justify-center p-8">
            <form onSubmit={handleSubmit} className="md:w-[800px]">
                <div className="space-y-6">
                    <div className="border-b border-gray-900/10 pb-2">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">
                            Update Videogame
                        </h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">
                            Here we going to add the new videogame
                        </p>
                    </div>
                    <div className="border-b border-gray-900/10 ">
                        <div>
                            <div>
                                <label
                                    htmlFor="title"
                                    className="block text-sm font-medium text-gray-900">
                                    Title
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        id="title"
                                        autoComplete="off"
                                        required
                                        value={result.title}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="description"
                                    className="block text-sm font-medium leading-6 text-gray-900">
                                    Description
                                </label>
                                <div className="mt-2">
                                    <textarea
                                        maxLength="255"
                                        id="description"
                                        type="text"
                                        autoComplete="off"
                                        required
                                        value={result.description}
                                        className="block w-full max-h-[100px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="price"
                                    className="block text-sm font-medium leading-6 text-gray-900">
                                    Price
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="price"
                                        type="number"
                                        autoComplete="off"
                                        required
                                        value={result.price}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="cover-photo"
                                    className="block text-sm font-medium leading-6 text-gray-900">
                                    Cover photo
                                </label>
                                <div className="mt-2 flex justify-around rounded-lg border border-dashed border-gray-900/25 px-6 py-2">
                                    <div>
                                        <h3 className="flex justify-center text-sm text-gray-500 font-semibold">
                                            Current cover
                                        </h3>
                                        <img
                                            src={
                                                selectedImage
                                                    ? selectedImage
                                                    : photo
                                            }
                                            alt=""
                                            className="w-[150px]"
                                        />
                                    </div>
                                    <div className="text-center flex flex-col justify-center items-center">
                                        <PhotoIcon
                                            className="mx-auto h-12 w-12 text-gray-300"
                                            aria-hidden="true"
                                        />
                                        <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                            <label
                                                htmlFor="file-upload"
                                                className="relative cursor-pointer rounded-md bg-white font-semibold text-orange-600 focus-within:outline-none  hover:text-orange-500">
                                                <span>Upload a file</span>
                                                <input
                                                    onChange={handleImageChange}
                                                    required
                                                    id="file-upload"
                                                    name="file-upload"
                                                    type="file"
                                                    accept="image/*"
                                                    className="sr-only"
                                                />
                                            </label>
                                            <p className="pl-1">
                                                or drag and drop
                                            </p>
                                        </div>
                                        <p className="text-xs leading-5 text-gray-600">
                                            PNG, JPG, GIF up to 10MB
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
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

export default Update
