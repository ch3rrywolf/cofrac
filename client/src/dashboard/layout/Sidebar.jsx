import React, {useContext} from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AiFillDashboard, AiOutlinePlus } from 'react-icons/ai'
import { ImProfile } from 'react-icons/im'
import { BiNews } from 'react-icons/bi'
import { FiUsers } from 'react-icons/fi'
import { FaPlus } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import storeContext from '../../context/storeContext'

const Sidebar = () => {

    const navigate = useNavigate()
    const { pathname } = useLocation()

    const {store, dispatch} = useContext(storeContext)
    const logout = ()=>{
        localStorage.removeItem('newsToken')
        dispatch({type:'logout', payload : ''})
        navigate('/login')
    }

    return (
        <div className='w-[250px] h-screen fixed left-0 top-0 bg-white'>
            <div className='h-[70px] flex justify-center items-center'>
                <Link to='/'>
                    <img className='w-[190px] h-[35px]' src="/src/assets/laLogo.png" alt="logo" />
                </Link>
            </div>
            <ul className='px-3 flex flex-col gap-y-1 font-medium'>
                    {
                        store.userInfo?.role === 'admin' ? <>
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
                            <Link to='/dashboard/chantiers' className={`px-3 ${pathname === '/dashboard/chantiers' ? 'bg-indigo-500 text-white' : 'bg-white text-[#404040f6]'} py-2 hover:shadow-lg hover:shadow-indigo-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-indigo-500 hover:text-white`}>
                                <span className='text-xl'><FaPlus /></span>
                                <span>Chantiers</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/dashboard/operations' className={`px-3 ${pathname === '/dashboard/operations' ? 'bg-indigo-500 text-white' : 'bg-white text-[#404040f6]'} py-2 hover:shadow-lg hover:shadow-indigo-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-indigo-500 hover:text-white`}>
                                <span className='text-xl'><BiNews /></span>
                                <span>Opérations</span>
                            </Link>
                        </li>                        
                        <li>
                            <Link to='/dashboard/clients' className={`px-3 ${pathname === '/dashboard/clients' ? 'bg-indigo-500 text-white' : 'bg-white text-[#404040f6]'} py-2 hover:shadow-lg hover:shadow-indigo-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-indigo-500 hover:text-white`}>
                                <span className='text-xl'><FiUsers /></span>
                                <span>Clients</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/dashboard/inspecteurs' className={`px-3 ${pathname === '/dashboard/inspecteurs' ? 'bg-indigo-500 text-white' : 'bg-white text-[#404040f6]'} py-2 hover:shadow-lg hover:shadow-indigo-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-indigo-500 hover:text-white`}>
                                <span className='text-xl'><FiUsers /></span>
                                <span>Inspecteurs</span>
                            </Link>
                        </li>
                        {/* <li>
                            <Link to='/dashboard/inspections/create' className={`px-3 ${pathname === '/dashboard/inspections/create' ? 'bg-indigo-500 text-white' : 'bg-white text-[#404040f6]'} py-2 hover:shadow-lg hover:shadow-indigo-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-indigo-500 hover:text-white`}>
                                <span className='text-xl'><FaPlus /></span>
                                <span>Ajouté Inspection</span>
                            </Link>
                        </li> */}
                        {/* <li>
                            <Link to='/dashboard/inspecteur/add' className={`px-3 ${pathname === '/dashboard/inspecteur/add' ? 'bg-indigo-500 text-white' : 'bg-white text-[#404040f6]'} py-2 hover:shadow-lg hover:shadow-indigo-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-indigo-500 hover:text-white`}>
                                <span className='text-xl'><AiOutlinePlus/></span>
                                <span>Ajoute inspecteur</span>
                            </Link>
                        </li> */}
                        {/* 
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
                        </li> */}
                        


                        </>:<>


                        <li>
                            <Link to='/dashboard/inspecteur' className={`px-3 ${pathname === '/dashboard/inspecteur' ? 'bg-indigo-500 text-white' : 'bg-white text-[#404040f6]'} py-2 hover:shadow-lg hover:shadow-indigo-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-indigo-500 hover:text-white`}>
                                <span className='text-xl'><AiFillDashboard /></span>
                                <span>Dashboard</span>
                            </Link>
                        </li>
                         <li>
                            <Link to='/dashboard/inspections/create' className={`px-3 ${pathname === '/dashboard/inspections/create' ? 'bg-indigo-500 text-white' : 'bg-white text-[#404040f6]'} py-2 hover:shadow-lg hover:shadow-indigo-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-indigo-500 hover:text-white`}>
                                <span className='text-xl'><FaPlus /></span>
                                <span>Ajouté Inspection</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/dashboard/inspections' className={`px-3 ${pathname === '/dashboard/inspections' ? 'bg-indigo-500 text-white' : 'bg-white text-[#404040f6]'} py-2 hover:shadow-lg hover:shadow-indigo-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-indigo-500 hover:text-white`}>
                                <span className='text-xl'><BiNews /></span>
                                <span>Inspections</span>
                            </Link>
                        </li>
                        </>
                    }              
                

                <li>
                    <Link to='/dashboard/profile' className={`px-3 ${pathname === '/dashboard/profile' ? 'bg-indigo-500 text-white' : 'bg-white text-[#404040f6]'} py-2 hover:shadow-lg hover:shadow-indigo-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-indigo-500 hover:text-white`}>
                        <span className='text-xl'><ImProfile /></span>
                        <span>Profile</span>
                    </Link>
                </li>

                

                <li>
                    <div onClick={logout} className={`px-3  py-2 hover:shadow-lg hover:shadow-red-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-red-500 hover:text-white cursor-pointer`}>
                        <span className='text-xl'><IoLogOutOutline /></span>
                        <span>Logout</span>
                    </div>
                </li>

            </ul>
        </div>
    )
}

export default Sidebar