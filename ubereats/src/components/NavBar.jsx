import React, {useState} from 'react'
import { AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'
import { BsFillCartFill, BsFillSaveFill } from 'react-icons/bs'
import { TbTruckDelivery } from 'react-icons/tb'
import { MdFavorite, MdHelp } from 'react-icons/md'
import { FaUserFriends, FaWallet } from 'react-icons/fa'

const NavBar = () => {
    const [nav, setNav] = useState(false);

    return (
        <div className='max-w-[1640] mx-auto flex justify-between items-center p-4'>
            <div className='flex items-center'>
                <div onClick={()=> setNav(!nav)} className='cursor-pointer'>
                    <AiOutlineMenu size={30}/>
                </div>
                <h1 className='text-2xl sm:text-3xl lg:text-4xl px-5'>Best <span className='font-bold '>Eats</span></h1>
                <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
                    <p className='bg-black text-white rounded-full p-2'>Delivery</p>
                    <p className='p-2'>Pickup</p>
                </div>
            </div>

            <div className='bg-gray-200 rounded-full flex items-center ps-2 w-[200px] sm:w-[400px] lg:w-[500px] xl:w-[900px]'>
                <AiOutlineSearch size={25}/>
                <input className='bg-transparent p-2 focus:outline-none w-full' type="text" placeholder='Search foods'/>
            </div>

            <button className='bg-black text-white hidden md:flex items-center py-2 rounded-full'>
                <BsFillCartFill size={20} className='mr-2'/> Cart
            </button>

            {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div>: null}

            <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300': 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
                <AiOutlineClose onClick={()=> setNav(!nav)} size={30} className='cursor-pointer absolute top-5 right-5'/>
                <h2 className='text-2xl p-4'>Best <span className='font-bold'>Eats</span></h2>
                <nav>
                    <ul className='flex flex-col p-4 text-gray-800'>
                        <li className='text-xl py-4 flex'><TbTruckDelivery size={30} className='mr-4'/> Orders </li>
                        <li className='text-xl py-4 flex'><MdFavorite size={30} className='mr-4'/>Favorites  </li>
                        <li className='text-xl py-4 flex'><FaWallet size={30} className='mr-4'/>Wallet  </li>
                        <li className='text-xl py-4 flex'><MdHelp size={30} className='mr-4'/>Help  </li>
                        <li className='text-xl py-4 flex'><AiFillTag size={30} className='mr-4'/>Promotions  </li>
                        <li className='text-xl py-4 flex'><BsFillSaveFill size={30} className='mr-4'/>Best Ones  </li>
                        <li className='text-xl py-4 flex'><FaUserFriends size={30} className='mr-4'/>Invite Friends  </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default NavBar