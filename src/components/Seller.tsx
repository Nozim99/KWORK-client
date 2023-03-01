import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons';

export default function Seller() {
  return (
    <div className='bg-[#F6F6F6] pb-10 lg:flex lg:justify-between lg:items-start lg:pt-10'>
      {/* Left */}
      <div className='text-center py-6 border-neutral-300 bg-white border-b border-neutral-300 min-[860px]:flex min-[860px]:justify-between min-[860px]:items-center lg:w-3/6 lg:flex-col lg:ml-4 lg:border lg:rounded-lg xl:w-2/6'>
        <div className='rounded-full w-32 h-32 overflow-hidden mx-auto min-[860px]:mx-0'><img className='w-full h-full' src="https://cdn.kwork.com/files/avatar/large/15/14654678-1.jpg" alt="" /></div>
        <div>
          <h1 className='font-medium text-xl mt-4'>Nozimbek</h1>
          <div className='text-sm text-neutral-500'>Seller</div>
        </div>
        <div className='pb-4 lg:pb-0 lg:w-full'>
          <div className='border-t border-neutral-300 mx-6 pt-4 mt-3 pb-5 min-[860px]:border-t-0 min-[860px]:border-l min-[860px]:pl-6 lg:border-l-0 lg:pl-0 lg:text-sm '>
            <div className='flex justify-between'>
              <div className='min-[860px]:mr-32 lg:mr-0'>Reliability</div>
              <div className='flex items-center lg:flex lg:justify-between'>
                <div className='bg-neutral-100 border border-neutral-300 w-44 h-2.5 rounded-full mr-4 overflow-hidden lg:w-24 lg:mr-2'>
                  <div style={{ width: `100%` }} className='bg-[#04B70A] h-full'></div>
                </div>
                <div className='lg:text-sm'>100%</div>
              </div>
            </div>

            <div className='flex justify-between min-[860px]:my-2'>
              <div className='min-[860px]:mr-32 lg:mr-0'>Punctuality</div>
              <div className='flex items-center lg:flex lg:justify-between'>
                <div className='bg-neutral-100 border border-neutral-300 w-44 h-2.5 overflow-hidden rounded-full mr-4 lg:w-24 lg:mr-2'>
                  <div style={{ width: `100%` }} className='bg-[#04B70A] h-full'></div>
                </div>
                <div className='lg:text-sm'>100%</div>
              </div>
            </div>

            <div className='flex justify-between'>
              <div className='min-[860px]:mr-32 lg:mr-0'>Response Rate</div>
              <div className='flex items-center lg:flex lg:justify-between'>
                <div className='bg-neutral-100 border border-neutral-300 w-44 h-2.5 overflow-hidden rounded-full mr-4 lg:w-24 lg:mr-2'>
                  <div style={{ width: `100%` }} className='bg-[#04B70A] h-full'></div>
                </div>
                <div className='lg:text-sm'>100%</div>
              </div>
            </div>

            <div className='flex justify-between min-[860px]:mt-2'>
              <div className='min-[860px]:mr-32 lg:mr-0'>Response Time</div>
              <div className='flex items-center lg:flex lg:justify-between'>
                <div className='bg-neutral-100 border border-neutral-300 w-44 h-2.5 overflow-hidden rounded-full mr-4 lg:w-24 lg:mr-2'>
                  <div style={{ width: `100%` }} className='bg-[#04B70A] h-full'></div>
                </div>
                <div className='lg:text-sm'>100%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Right */}
      <div className='container mx-auto'>
        <div className='mx-4 mt-6 lg:mt-0'>
          <div className='text-start text-xl border px-3 py-5 border-neutral-300 bg-white rounded-lg'>
            <span className='font-medium'>My Orders</span> <span className='text-neutral-400'>- 0</span>
          </div>

          <div className='text-start text-xl border px-3 py-5 border-neutral-300 flex justify-between mt-6 bg-white rounded-lg'>
            <div className='flex items-center'><span className='font-medium mr-2'>My Kworks</span> <span className='text-neutral-400'>- 0</span></div>
            <button className='border border-green-500 text-green-500 px-8 py-1 text-base rounded transition-colors hover:bg-green-500 hover:text-white'>Create a Kwork</button>
          </div>

          <div className='bg-white border border-neutral-300 my-6 rounded-lg px-3'>
            <div className='border-b border-neutral-300 min-[860px]:flex min-[860px]:items-center min-[860px]:flex-row-reverse'>
              <img className='mx-auto py-6' src="https://cdn.kwork.com/images/index/kwork-steps.svg" alt="" />
              <div className='min-[860px]:mr-10'>
                <h2 className='font-medium text-lg mb-2'>Four Simple Steps to Kwork Success</h2>
                <p className='text-sm mb-4'>The secret to success on Kwork is starting off on the right foot and actively maintaining your ratings. Here are some tips to help you become a top seller on Kwork.</p>
              </div>
            </div>

            <div className='border-b border-neutral-300 min-[860px]:flex min-[860px]:items-center min-[860px]:justify-between'>
              <div className='min-[860px]:w-9/12'>
                <div className='flex items-center my-8'>
                  <img className='mr-6' src="https://cdn.kwork.com/images/index/magic-wand.svg" alt="" />
                  <div className='text-xl font-medium'>Step 1: Create your kworks—the more, the better</div>
                </div>
                <div className='min-[860px]:flex min-[860px]:flex-col-reverse'>
                  <div className='flex items-center mb-0.5 min-[860px]:mb-6'><span className='text-blue-500 mr-2'>0/9 active kworks</span> <FontAwesomeIcon className='text-sm text-neutral-400' icon={faCircleQuestion} /></div>
                  <div className='w-40 h-2 bg-neutral-100 rounded-full overflow-hidden mb-6 border border-neutral-300 min-[860px]:mb-0.5'><div style={{ width: `5%` }} className='h-full bg-orange-500'></div></div>
                </div>
              </div>
              <button className='mb-8 border border-green-500 text-green-500 px-8 py-1 text-base rounded transition-colors hover:bg-green-500 hover:text-white min-[860px]:m-0'>Learn more</button>
            </div>

            <div className='border-b border-neutral-300 min-[860px]:flex min-[860px]:items-center min-[860px]:justify-between'>
              <div className='min-[860px]:w-9/12'>
                <div className='flex items-center my-8'>
                  <img className='mr-6' src="	https://cdn.kwork.com/images/index/promotion.svg" alt="" />
                  <div className='text-xl font-medium'>Step 2: Share your kworks to get your first orders and reviews!</div>
                </div>
                <div className='min-[860px]:flex min-[860px]:flex-col-reverse'>
                  <div className='flex items-center mb-0.5 min-[860px]:mb-6'><span className='mr-2'>0/10 revies</span> <FontAwesomeIcon className='text-sm text-neutral-400' icon={faCircleQuestion} /></div>
                  <div className='w-40 h-2 bg-neutral-100 rounded-full overflow-hidden mb-6 border border-neutral-300 min-[860px]:mb-0.5'><div style={{ width: `5%` }} className='h-full bg-orange-500'></div></div>
                </div>
              </div>
              <button className='mb-8 border border-green-500 text-green-500 px-8 py-1 text-base rounded transition-colors hover:bg-green-500 hover:text-white'>Learn more</button>
            </div>

            <div className='border-b border-neutral-300 min-[860px]:flex min-[860px]:items-center min-[860px]:justify-between'>
              <div className='min-[860px]:w-9/12'>
                <div className='flex items-center my-8'>
                  <img className='mr-6' src="https://cdn.kwork.com/images/index/smartphone.svg" alt="" />
                  <div className='text-xl font-medium'>Step 3: Get the Kwork app</div>
                </div>
                <div className='min-[860px]:flex min-[860px]:flex-col-reverse'>
                  <div className='mb-0.5 min-[860px]:mb-6'>You haven't downloaded the app yet</div>
                  <div className='w-40 h-2 bg-neutral-100 rounded-full overflow-hidden mb-6 border border-neutral-300 min-[860px]:mb-0.5'><div style={{ width: `5%` }} className='h-full bg-orange-500'></div></div>
                </div>
              </div>
              <button className='mb-8 border border-green-500 text-green-500 px-8 py-1 text-base rounded transition-colors hover:bg-green-500 hover:text-white'>Learn more</button>
            </div>

            <div className='min-[860px]:flex min-[860px]:items-center min-[860px]:justify-between'>
              <div className='min-[860px]:w-9/12'>
                <div className='flex items-center my-8'>
                  <img className='mr-6' src="	https://cdn.kwork.com/images/index/hat.svg" alt="" />
                  <div className='text-xl font-medium'>Step 4: Take our free introductory course <b>How To Earn on Kwork</b></div>
                </div>
                <div className='min-[860px]:flex min-[860px]:flex-col-reverse'>
                  <div className='mb-0.5 min-[860px]:mb-6'>0/7 lessons completed</div>
                  <div className='w-40 h-2 bg-neutral-100 rounded-full overflow-hidden mb-6 border border-neutral-300 min-[860px]:mb-0.5'><div style={{ width: `5%` }} className='h-full bg-orange-500'></div></div>
                </div>
              </div>
              <button className='mb-8 border border-green-500 text-green-500 px-8 py-1 text-base rounded transition-colors hover:bg-green-500 hover:text-white'>Learn more</button>
            </div>
          </div>

          <div className='min-[860px]:flex min-[860px]:justify-between min-[860px]:items-center'>
            <div className='bg-white border border-neutral-300 rounded-lg px-3 min-[860px]:mr-5'>
              <div className='flex justify-between items-center mt-6'>
                <span className='font-medium text-lg'>Tip #1</span>
                <img src="https://cdn.kwork.com/images/index/lamp.svg" alt="" />
              </div>
              <p className='my-6'>
                The more orders you complete on Kwork, the higher your kworks will rank in the Marketplace.
              </p>
            </div>

            <div className='bg-white border border-neutral-300 rounded-lg px-3 mt-8 min-[860px]:mt-0'>
              <div className='flex justify-between items-center mt-6'>
                <span className='font-medium text-lg'>Tip #15</span>
                <img src="https://cdn.kwork.com/images/index/lamp.svg" alt="" />
              </div>
              <p className='my-6'>
                Never start working on an order until it is placed. This guarantees that you will be paid for your services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
