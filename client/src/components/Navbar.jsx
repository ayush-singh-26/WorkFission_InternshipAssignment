import React from 'react'

const Navbar = () => {
    return (
        <nav className='flex items-center justify-between p-4 bg-red-300 shadow-md'>
            <div className='text-xl font-bold text-indigo-600'>
                E-Commerce Web
            </div>
            <div>
                <ul className='flex space-x-6'>
                    <li>
                        <button className='px-4 py-2 text-gray-600 hover:text-indigo-600 transition-colors'>
                            Login
                        </button>
                    </li>
                    <li>
                        <button className='px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors'>
                            Sign Up
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar