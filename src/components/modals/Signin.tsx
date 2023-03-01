import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useDispatch } from 'react-redux';
import { setSignin, setSignup } from '../../redux/slices/config';

export default function Signin() {
  const dispatch = useDispatch()

  return (
    <>
      <div onClick={() => dispatch(setSignin(false))} className='fixed item_center w-full h-full bg-black/20 z-30'></div>
      <div className='fixed item_center z-30 px-6 py-10 bg-white rounded login_page'>
        <div className='flex justify-between login_page_header'><span className='font-medium text-2xl'>Sign In</span> <FontAwesomeIcon onClick={() => dispatch(setSignin(false))} className='text-2xl text-neutral-400 cursor-pointer' icon={faXmark} /></div>
        <input className='w-full mt-6 border py-2 px-4 rounded outline-none border-neutral-400 focus:border-blue-400' type="text" placeholder='Email address or username' />
        <input className='w-full my-4 border py-2 px-4 rounded outline-none border-neutral-400 focus:border-blue-400' type="password" placeholder='Password' />
        <button className='bg-[#04B70A] text-white w-full py-2 rounded font-medium hover:bg-green-500'>Sign In</button>
        <div className='flex justify-between mt-5'>
          <div className='flex items-center'>
            <input className='font-bold' id='input-checked' type="checkbox" />
            <label className='cursor-pointer ml-3 text-sm' htmlFor="input-checked">Remember me</label>
          </div>
          <span className='text-blue-500'>Forgot your password?</span>
        </div>
        <div className='border-b border-neutral-300 relative my-8'>
          <div className='absolute item_center bg-white px-2'>or</div>
        </div>
        <div className='flex justify-center'>
          <div className='w-14 h-14 mr-10'><img className='w-full h-full cursor-pointer' src="https://seeklogo.com/images/F/facebook-icon-circle-logo-09F32F61FF-seeklogo.com.png" alt="" /></div>
          <div className='w-14 h-14 relative border border-neutral-400 rounded-full'><img className='w-7 absolute item_center cursor-pointer' src="https://img.freepik.com/free-icon/search_318-265146.jpg" alt="" /></div>
          <div><img src="" alt="" /></div>
        </div>
        <div className='text-center mt-6 text-sm'>New to Kwork? <span onClick={() => { dispatch(setSignin(false)); dispatch(setSignup(true)) }} className='text-blue-400 underline underline-offset-2 cursor-pointer hover:no-underline'>Join now</span></div>
      </div>
    </>
  )
}
