import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

const items = [
    {
        id: 1,
        title: 'Back End Developer',
        department: 'Engineering',
        type: 'Full-time',
        location: 'Remote',
    },
    {
        id: 2,
        title: 'Front End Developer',
        department: 'Engineering',
        type: 'Full-time',
        location: 'Remote',
    },
    {
        id: 3,
        title: 'User Interface Designer',
        department: 'Design',
        type: 'Full-time',
        location: 'Remote',
    },
]

export default function Pagination() {
    return (
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 bottom-0 ">
            <div className="flex flex-1 items-center justify-end">
                <div>
                    <nav
                        className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                        aria-label="Pagination">
                             <a
                            href="#"
                            aria-current="page"
                            className="relative z-10 inline-flex items-center bg-gray-800 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            1
                        </a>
                        <a
                            href="#"
                            className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                            2
                        </a>
                        <a
                            href="#"
                            className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ">
                            3
                        </a>
                        <a
                            href="#"
                            className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ">
                            4
                        </a>
                        <a
                            href="#"
                            className="relative hidden  items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">
                            5
                        </a>

                    </nav>
                </div>
            </div>
        </div>
    )
}
