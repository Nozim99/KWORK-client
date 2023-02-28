import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

export default function Navbar() {
  const [search, setSearch] = useState("")

  return (
    <div className='bg-neutral-800'>
      <div className='flex justify-between text-white container mx-auto py-3'>
        <div className='flex items-center'>
          <h1 className='mr-10 text-2xl font-bold tracking-wider'>KWORK</h1>
          <div className='flex items-center'>
            <FontAwesomeIcon className='text-gray-500 relative left-5 text-sm pointer-events-none' icon={faMagnifyingGlass} />
            <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" className='outline-none text-black text-sm py-1 pl-8 pr-7 w-72 rounded-l' placeholder='Find Services' />
            <FontAwesomeIcon onClick={() => setSearch("")} className={'text-gray-400 relative right-5 cursor-pointer ' + (search ? "" : "opacity-0 pointer-events-none")} icon={faXmark} />
            <button className='bg-[#04B70A] hover:bg-green-500 px-4 text-sm py-1 relative right-2.5 rounded-r'>Qidirish</button>
          </div>
        </div>
        <div className='flex items-center'>
          <button className='mr-10 hover:text-blue-400'>Sign In</button>
          <button className='hover:text-blue-400'>Sign Up</button>
        </div>
      </div>
    </div>
  )
}
