import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AiFillDashboard, AiOutlinePlus } from 'react-icons/ai'
import { ImProfile } from 'react-icons/im'
import { BiNews } from 'react-icons/bi'
import { FiUsers } from 'react-icons/fi'
import { FaPlus } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";

const Sidebar = () => {

    const { pathname } = useLocation()

  
    return (
        <div className='w-[250px] h-screen fixed left-0 top-0 bg-white'>
            <div className='h-[70px] flex justify-center items-center'>
                <Link to='/'>
                    <img className='w-[190px] h-[35px]' src="" alt="" />
                </Link>
            </div>
            <ul className='px-3 flex flex-col gap-y-1 font-medium'>
                
                        <li>
                            <Link to='/dashboard/admin' className={`px-3 ${pathname === '/dashboard/admin' ? 'bg-indigo-500 text-white' : 'bg-white text-[#404040f6]'} py-2 hover:shadow-lg hover:shadow-indigo-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-indigo-500 hover:text-white`}>
                                <span className='text-xl'><AiFillDashboard /></span>
                                <span>Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/dashboard/inspections' className={`px-3 ${pathname === '/dashboard/inspections' ? 'bg-indigo-500 text-white' : 'bg-white text-[#404040f6]'} py-2 hover:shadow-lg hover:shadow-indigo-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-indigo-500 hover:text-white`}>
                                <span className='text-xl'><BiNews /></span>
                                <span>Inspections</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/dashboard/inspecteurs' className={`px-3 ${pathname === '/dashboard/inspecteurs' ? 'bg-indigo-500 text-white' : 'bg-white text-[#404040f6]'} py-2 hover:shadow-lg hover:shadow-indigo-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-indigo-500 hover:text-white`}>
                                <span className='text-xl'><FiUsers /></span>
                                <span>Inspecteurs</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/dashboard/inspecteurs/add' className={`px-3 ${pathname === '/dashboard/inspecteurs/add' ? 'bg-indigo-500 text-white' : 'bg-white text-[#404040f6]'} py-2 hover:shadow-lg hover:shadow-indigo-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-indigo-500 hover:text-white`}>
                                <span className='text-xl'><AiOutlinePlus/></span>
                                <span>Ajoute inspecteur</span>
                            </Link>
                        </li>
                     
                        <li>
                            <Link to='/dashboard/clients' className={`px-3 ${pathname === '/dashboard/clients' ? 'bg-indigo-500 text-white' : 'bg-white text-[#404040f6]'} py-2 hover:shadow-lg hover:shadow-indigo-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-indigo-500 hover:text-white`}>
                                <span className='text-xl'><FiUsers /></span>
                                <span>Clients</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/dashboard/contrats' className={`px-3 ${pathname === '/dashboard/contrats' ? 'bg-indigo-500 text-white' : 'bg-white text-[#404040f6]'} py-2 hover:shadow-lg hover:shadow-indigo-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-indigo-500 hover:text-white`}>
                                <span className='text-xl'><FaPlus /></span>
                                <span>Contrats</span>
                            </Link>
                        </li>
                    
                

                <li>
                    <Link to='/dashboard/commandes' className={`px-3 ${pathname === '/dashboard/commandes' ? 'bg-indigo-500 text-white' : 'bg-white text-[#404040f6]'} py-2 hover:shadow-lg hover:shadow-indigo-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-indigo-500 hover:text-white`}>
                        <span className='text-xl'><BiNews /></span>
                        <span>Commandes</span>
                    </Link>
                </li>
                <li>
                    <Link to='/dashboard/factures' className={`px-3 ${pathname === '/dashboard/factures' ? 'bg-indigo-500 text-white' : 'bg-white text-[#404040f6]'} py-2 hover:shadow-lg hover:shadow-indigo-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-indigo-500 hover:text-white`}>
                        <span className='text-xl'><BiNews /></span>
                        <span>Factures</span>
                    </Link>
                </li>
                

                <li>
                    <Link to='/dashboard/profile' className={`px-3 ${pathname === '/dashboard/profile' ? 'bg-indigo-500 text-white' : 'bg-white text-[#404040f6]'} py-2 hover:shadow-lg hover:shadow-indigo-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-indigo-500 hover:text-white`}>
                        <span className='text-xl'><ImProfile /></span>
                        <span>Profile</span>
                    </Link>
                </li>

                <li>
                    <div  className={`px-3  py-2 hover:shadow-lg hover:shadow-red-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-red-500 hover:text-white cursor-pointer`}>
                        <span className='text-xl'><IoLogOutOutline /></span>
                        <span>Logout</span>
                    </div>
                </li>

            </ul>
        </div>
    )
}

export default Sidebar