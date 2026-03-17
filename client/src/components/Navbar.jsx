import React from 'react'
import {motion} from "motion/react"
import {BsRobot, BsCoin} from 'react-icons/bs'
import {HiOutlineLogout} from 'react-icons/hi'
import { FaUserAstronaut } from 'react-icons/fa'
import {useDispatch, useSelector } from 'react-redux'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { serverUrl } from '../App'
import { setUserData } from '../redux/userSlice'
import Auth from '../pages/Auth'
import AuthModel from './AuthModel'

const Navbar = () => {
    const {userData} = useSelector((state)=>state.user);
    const [showCreditPopup, setShowCreditPopup] = useState(false);
    const [showUserPopup, setShowUserPopup] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [showAuth, setShowAuth] = useState(false);

    const HandleLogout = async ()=>{
        try{
             await axios.get(serverUrl + "/api/auth/logout", {withCredentials:true});
             dispatch(setUserData(null));
             setShowCreditPopup(false);
             setShowUserPopup(false);
             navigate("/");


        }catch(error){
            console.log("Error : "+error.message)
        }

    }
  return (
    <div className='  flex justify-center px-4 pt-6 '>
        <motion.div
            initial={{opacity:0, y:-40}}
            animate={{opacity:1, y:0}}
            transition={{duration:0.3}}
            className="w-full max-w-6xl bg-white rounded-3xl shadow-sm border border-gray-200 px-8 py-4 flex justify-between item-center relative"
        >

            <div className='flex items-center gap-2 cursor-pointer '> 
                <div className='bg-black text-white p-2 rounded-md'>
                    <BsRobot size={18}/>
                </div>
                <h1 className=' font-semibold md:block hidden text-lg '>InterviewAI</h1>
            </div>

            <div className='flex items-center gap-6 relative'>
                <div className='relative'>
                    <button onClick={()=>{
                        if(!userData){
                            setShowAuth(true)
                            return;
                        }
                        setShowCreditPopup(!showCreditPopup); 
                        setShowUserPopup(false);
                    }}
                     className='flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-md cursor-pointer hover:bg-gray-200 transition '>
                        <BsCoin size={20}/>
                        {userData?.credits || 0}
                    </button>

                    {/* show Credit pop  */}

                    {showCreditPopup && (
                        <motion.div  
                            initial={{opacity:0, y:-20}}
                            animate={{opacity:1, y:0}}
                            transition={{duration:0.3}}
                            className='absolute -right-12.5 mt-3 bg-white shadow-xl z-50 p-5 w-64 rounded border border-gray-200 '>
                            <p className='text-sm text-gray-600 mb-4'>Need more credits to continue interviews?</p>
                            <button
                                onClick={()=>navigate("/pricing")}
                                className='w-full bg-black text-white rounded-lg py-2 text-sm'>
                                    Buy More credits
                            </button>


                        </motion.div>
                    )}
                </div>

                <div className='relative'>
                    <button
                        onClick={()=>{
                            if(!userData){
                                setShowAuth(true)
                                return;
                            }
                            setShowUserPopup(!showUserPopup);
                            setShowCreditPopup(false)
                        }}
                        className='bg-black text-white font-semibold w-9 h-9 flex items-center justify-center rounded-full cursor-pointer hover:shadow-md'>
                        {userData ? userData.name.slice(0,1).toUpperCase(): <FaUserAstronaut size={16}/>}
                    </button>
                    {showUserPopup && (
                        <motion.div
                            initial={{opacity:0, y:-20}}
                            animate={{opacity:1, y:0}}
                            transition={{duration:0.3}}
                         className='bg-white w-48 absolute -right-12 mt-3 shadow-xl z-50 p-5 rounded border border-gray-200'>
                            <p className='text-blue-500 font-medium mb-1 text-md '>{userData?.name}</p>
                            <button className='w-full text-left text-sm font-medium cursor-pointer py-2 hover:text-black text-gray-600 '>Interview History</button>
                            <button onClick={()=>HandleLogout()} className='text-red-500 text-xl flex items-center gap-1 cursor-pointer hover:text-red-600 '>
                                    {<HiOutlineLogout size={24}/>}
                                        Logout

                            </button>

                        </motion.div>
                    )}
                </div>


                <div>

                </div>
            </div>



        </motion.div>
        {showAuth && <AuthModel onClose={()=>setShowAuth(false)}/>}
    </div>
  )
}

export default Navbar