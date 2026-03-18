import React from 'react'
import { BsRobot } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className=' bg-[#f3f3f3] flex  justify-center px-4 pb-10 py-4 pt-10 '>
        <div className='w-full max-w-6xl bg-white rounded-[24px] border border-gray-200 py-8 px-3 text-center shadow-sm '>
            <div className='flex justify-center items-center gap-3 mb-3'>
                <div className='bg-black text-white p-2 rounded-lg'><BsRobot size={16}/></div>
                <h2 className='font-semibold'>InterviewAI</h2>
            </div>
            <p className='text-gray-500 text-base max-w-3xl mx-auto'>
                AI-powered interview preparation platform that helps you ace your interviews with confidence. Practice with our intelligent virtual interviewer, receive personalized feedback, and boost your chances of success. Start your journey to interview excellence today!
                </p>


        </div>
        
    </div>
  )
}

export default Footer