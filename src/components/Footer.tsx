import React from 'react'

export default function Footer() {
  return (
    <div>
      <div className='container mx-auto flex justify-between border-b-2 pb-10'>
        <div className='text-2xl font-bold'>KWORK</div>

        <div>
          <h3 className='text-lg font-medium mb-2'>About</h3>
          <ul>
            <li className='hover:text-blue-400 cursor-pointer text-gray-600 mb-2'>About Kwork</li>
            <li className='hover:text-blue-400 cursor-pointer text-gray-600 mb-2'>Buyer Protection Program</li>
            <li className='hover:text-blue-400 cursor-pointer text-gray-600 mb-2'>Terms of Service</li>
            <li className='hover:text-blue-400 cursor-pointer text-gray-600 mb-2'>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <h3 className='text-lg font-medium mb-2'>Resources</h3>
          <ul>
            <li className='hover:text-blue-400 cursor-pointer text-gray-600 mb-2'>For Freelancers</li>
            <li className='hover:text-blue-400 cursor-pointer text-gray-600 mb-2'>How to Earn on Kwork</li>
            <li className='hover:text-blue-400 cursor-pointer text-gray-600 mb-2'>Categories</li>
            <li className='hover:text-blue-400 cursor-pointer text-gray-600 mb-2'>Affiliate Program</li>
            <li className='hover:text-blue-400 cursor-pointer text-gray-600 mb-2'>Kwork Reviews</li>
            <li className='hover:text-blue-400 cursor-pointer text-gray-600 mb-2'>Kwork Mobile App</li>
          </ul>
        </div>

        <div>
          <h3 className='text-lg font-medium mb-2'>Help Center</h3>
          <ul>
            <li className='hover:text-blue-400 cursor-pointer text-gray-600 mb-2'>Prohibited Services</li>
            <li className='hover:text-blue-400 cursor-pointer text-gray-600 mb-2'>Approval process for kworks</li>
            <li className='hover:text-blue-400 cursor-pointer text-gray-600 mb-2'>FAQ</li>
            <li className='hover:text-blue-400 cursor-pointer text-gray-600 mb-2'>Contact Support</li>
          </ul>
        </div>
      </div>

      <div className='container mx-auto mt-8 flex justify-between pb-10'>
        <ul>
          <li className='text-sm text-gray-500'>2015 - 2022 Kwork ©</li>
          <li className='text-sm text-gray-500'>Paperjet Technologies Ltd.</li>
          <li className='text-sm text-gray-500'>Pythagora 3, PYTHAGORAS COURT,</li>
          <li className='text-sm text-gray-500'>Flat/Office 102, 3027, Limassol, Cyprus</li>
        </ul>

        <div className='flex items-end'>
          <div className='mr-6 cursor-pointer'>
            <img src="https://cdn.kwork.com/images/footer/app-appstore-en.png" alt="" />
          </div>
          <div className='cursor-pointer'>
            <img src="https://cdn.kwork.com/images/footer/app-gplay-en.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
