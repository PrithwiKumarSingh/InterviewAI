import React, { useEffect } from 'react'
import { FaTimes } from 'react-icons/fa';
import { useSelector } from 'react-redux'
import Auth from '../pages/Auth';
import {motion} from "motion/react"

const AuthModel = ({onClose}) => {
    const {userData} = useSelector((state)=>state.user);

    useEffect(()=>{
        if(userData){
            onClose(); 
        }
    },[userData,onClose])
  return (
    <div className='fixed inset-0 z-999 flex item-center justify-center bg-black/10 backdrop-blur-sm px-4'>
        <div className='relative w-full max-w-md'>
            <motion.button
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:2.5}}
             onClick={onClose} className='absolute top-70 right-5 text-gray-800 hover:text-black text-xl'>
                <FaTimes size={18}/>
            </motion.button>
            <Auth isModel={true}/>

        </div>
    </div>
  )
}

export default AuthModel