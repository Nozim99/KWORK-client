import { faAngleDown, faBell, faComment, faEnvelope, faMagnifyingGlass, faMessage, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import Signin from './modals/Signin'
import Signup from './modals/Signup'
import { setSignin, setSignup } from '../redux/slices/config'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { useLocation } from 'react-router-dom'

export default function Navbar() {
  const dispatch = useDispatch()
  const [search, setSearch] = useState("")
  const { signin, signup } = useSelector((state: RootState) => state.config)
  const [login, setLogin] = useState(true)

  return (
    <div className='bg-neutral-800'>
      <div className='flex justify-between text-white container mx-auto py-3'>
        <div className='flex items-center'>
          <h1 className='mr-10 text-2xl font-bold tracking-wider max-md:mr-4 md:mr-2'>KWORK</h1>
          <div className='flex items-center max-sm:hidden'>
            <FontAwesomeIcon className='text-gray-500 relative left-5 text-sm pointer-events-none' icon={faMagnifyingGlass} />
            <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" className='outline-none text-black text-sm py-1 pl-8 pr-7 w-72 rounded-l max-md:w-44 max-md:text-xs' placeholder='Find Services' />
            <FontAwesomeIcon onClick={() => setSearch("")} className={'text-gray-400 relative right-5 cursor-pointer ' + (search ? "" : "opacity-0 pointer-events-none")} icon={faXmark} />
            <button className='bg-[#04B70A] hover:bg-green-500 px-4 text-sm py-1 relative right-2.5 rounded-r max-md:text-xs max-md:px-2'>Qidirish</button>
          </div>
        </div>
        {
          login
            ? <>
              <div className='flex items-center md:hidden'>
                <FontAwesomeIcon className='text-neutral-300 mr-4 text-lg cursor-pointer' icon={faComment} />
                <FontAwesomeIcon className='text-neutral-300 text-lg cursor-pointer' icon={faBell} />
              </div>
              <div className='hidden md:flex md:items-center md:mr-6'>
                <button className=' hover:text-blue-500'>Kworks</button>
                <button className='mx-3 hover:text-blue-500'>Orders</button>
                <FontAwesomeIcon className='cursor-pointer hover:text-blue-500 min-[840px]:hidden' icon={faEnvelope} />
                <button className='hidden min-[840px]:inline-block'>Chat</button>
                <button className='mx-3 hover:text-blue-500'>$ 0</button>
                <div className='w-8 h-8 rounded-full flex items-center cursor-pointer'><img className='h-full w-full rounded-full mr-1' src="https://cdn.kwork.com/files/avatar/large_r/15/14654678-1.jpg" alt="" /> <FontAwesomeIcon className='text-sm text-neutral-300' icon={faAngleDown} /></div>
              </div>
            </>
            : <div className='flex items-center'>
              <button onClick={() => dispatch(setSignin(true))} className='mr-10 hover:text-blue-400 max-md:text-sm max-md:mr-6'>Sign In</button>
              <button onClick={() => dispatch(setSignup(true))} className='hover:text-blue-400 max-md:text-sm'>Sign Up</button>
            </div>

        }
      </div>
      {signin ? <Signin /> : ""}
      {signup ? <Signup /> : ""}
    </div>
  )
}
