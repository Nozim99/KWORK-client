import { faXmark, faUserTie } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setSignin, setSignup } from '../../redux/slices/config';

export default function Signup() {
  const dispatch = useDispatch()
  const [status, setStatus] = useState<"buyer" | "seller">("buyer")

  return (
    <>
      <div onClick={() => dispatch(setSignup(false))} className='fixed item_center w-full h-full bg-black/20 z-30'></div>
      <div className='fixed item_center z-30 px-6 py-10 bg-white rounded login_page w-96'>
        <div className='flex justify-between login_page_header'><span className='font-medium text-2xl'>Sign Un</span> <FontAwesomeIcon onClick={() => dispatch(setSignup(false))} className='text-2xl text-neutral-400 cursor-pointer' icon={faXmark} /></div>
        <div className='text-center mt-6'>
          <button onClick={() => setStatus("buyer")} className={'border border-neutral-400 w-1/2 py-2 ' + (status === "buyer" ? "bg-[#177DE5] text-white" : "")}><FontAwesomeIcon icon={faUserTie} /> Buyer</button>
          <button onClick={() => setStatus("seller")} className={'border border-neutral-400 w-1/2 py-2 ' + (status === "seller" ? "bg-[#177DE5] text-white" : "")}><FontAwesomeIcon icon={faUser} /> Seller</button>
        </div>
        <input className='mb-5 w-full mt-6 border py-2 px-4 rounded outline-none border-neutral-400 focus:border-blue-400' type="text" placeholder='Email address or username' />
        <div className='flex items-center mb-4'>
          <input className='font-bold' id='input-checked' type="checkbox" />
          <label className='cursor-pointer ml-3 text-xs' htmlFor="input-checked">I have read, understand and accept Kwork <span className='text-blue-500'>Terms of Service, Privacy Policy,</span> and agree to receive emails from Kwork.</label>
        </div>
        <button className='bg-[#04B70A] text-white w-full py-2 rounded font-medium hover:bg-green-500'>Next</button>
        <div className='border-b border-neutral-300 relative my-8'>
          <div className='absolute item_center bg-white px-2'>or</div>
        </div>
        <div className='flex justify-center'>
          <div className='w-14 h-14 mr-10'><img className='w-full h-full cursor-pointer' src="https://seeklogo.com/images/F/facebook-icon-circle-logo-09F32F61FF-seeklogo.com.png" alt="" /></div>
          <div className='w-14 h-14 relative border border-neutral-400 rounded-full'><img className='w-7 absolute item_center cursor-pointer' src="https://img.freepik.com/free-icon/search_318-265146.jpg" alt="" /></div>
          <div><img src="" alt="" /></div>
        </div>
        <div className='text-center mt-6 text-sm'>Already have an account? <span onClick={() => { dispatch(setSignup(false)); dispatch(setSignin(true)) }} className='text-blue-400 underline underline-offset-2 cursor-pointer hover:no-underline'>Sign In</span></div>
      </div>
    </>
  )
}
