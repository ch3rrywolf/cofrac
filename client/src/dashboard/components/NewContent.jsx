import React from 'react'
import {FaEye, FaEdit, FaTrash} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

const NewContent = () => {
  return (
    <div>
        <div className='px-4 py-3 flex gap-x-3'>
            <select className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' name='' id=''>
                <option value="">===select type===</option>
                <option value="">Généré</option>
                <option value="">En cours</option>
                <option value="">Cloturé</option>
                <option value="">Annulé</option>
            </select>
            <input type="text" placeholder='search' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
        </div>
        <div className='relative overflow-y-auto p-4'>
            <table className='w-full text-sm text-left text-slate-600'>
                <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
                    <tr>
                        <th className='px-7 py-3'>Etat</th>
                        <th className='px-7 py-3'>Référence</th>
                        <th className='px-7 py-3'>Référence Chantier</th>
                        <th className='px-7 py-3'>Client</th>
                        <th className='px-7 py-3'>Opération</th>

                        <th className='px-7 py-3'>Date d'affectation</th>
                        <th className='px-7 py-3'>Date réalisée</th>
                        <th className='px-7 py-3'>Inspecteur</th>
                        <th className='px-7 py-3'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='bg-white border-b'>
                        <td className='px-6 py-4'><span className='px-2 py-[2px] bg-green-100 text-green-800 rounded-lg text-xs cursor-pointer'>Généré</span></td>
                        <td className='px-6 py-4'>#RF454646587</td>
                        <td className='px-6 py-4'>#CH4546</td>
                        <td className='px-6 py-4'>Ali</td>
                        <td className='px-6 py-4'>BALON THERMODYNAMIQUE</td>

                        <td className='px-6 py-4'>11-12-2024</td>
                        <td className='px-6 py-4'>11-12-2024</td>
                        <td className='px-6 py-4'>InspecteurOne</td>
                        <td className='px-6 py-4'>
                            <div className='flex justify-start items-center gap-x-4 text-white'>
                                <Link className='p-[6px] bg-green-500 rounded hover:shadow-lg hover:shadow-green-500/50'><FaEye/></Link>
                                <Link className='p-[6px] bg-yellow-500 rounded hover:shadow-lg hover:shadow-yellow-500/50'><FaEdit/></Link>
                            
                            <div className='p-[6px] bg-red-500 rounded hover:shadow-lg hover:shadow-red-500/50'><FaTrash/></div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className='flex items-center justify-end px-10 gap-x-3 text-slate-600'>
            <div className='flex gap-x-3 justify-center items-center'>
                <p className='px-4 py-3 font-semibold text-sm'>Inspections par Page</p>
                <select name='' id='' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10'>
                    <option value='5'>5</option>
                    <option value='10'>10</option>
                    <option value='15'>15</option>
                    <option value='20'>20</option>
                </select>
            </div>
            <p className='px-6 py-3 font-semibold text-sm'>6/22 - of 5</p>
            <div className='flex items-center gap-x-3'>
                <IoIosArrowBack className='w-5 h-5 cursor-pointer' />
                <IoIosArrowForward className='w-5 h-5 cursor-pointer' />
            </div>
        </div>
    </div>
  )
}

export default NewContent