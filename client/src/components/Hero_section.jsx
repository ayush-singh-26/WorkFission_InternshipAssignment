import React from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'

const Hero_section = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const activeTab = location.pathname.includes('my-products') ? 'my-products' : 'product-submission';

  return (
    <div className='border-b-2 border-gray-200 bg-white'>
      <div className='flex justify-around p-2 bg-indigo-500'>
        <div
          className={`px-6 py-3 cursor-pointer font-medium text-lg ${activeTab === 'product-submission' ? 'text-black bg-white rounded-lg' : 'text-white hover:text-gray-700'}`}
          onClick={() => navigate('/product-submission')}
        >
          Product Submission
        </div>
        <div
          className={`px-6 py-3 cursor-pointer font-medium text-lg ${activeTab === 'my-products' ? 'text-black bg-white rounded-lg' : 'text-white hover:text-gray-700'}`}
          onClick={() => navigate('/my-products')}
        >
          My Products
        </div>
      </div>
      <Outlet />
    </div>
  )
}

export default Hero_section;
