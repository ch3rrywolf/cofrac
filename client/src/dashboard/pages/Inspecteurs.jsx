import React from 'react'
import {FaEye, FaEdit, FaTrash} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Inspecteurs = () => {
  return (
    <div className='bg-white rounded-md'>
      <div className='flex justify-between p-4'>
        <h2 className='text-xl font-medium'>Inspecteurs</h2>
        <Link className='px-3 py-[6px] bg-purple-500 rounded-sm text-white hover:bg-purple-600' to='/dashboard/inspecteurs/add'>Ajoute Inspecteur</Link>
      </div>
      <div className='relative overflow-y-auto p-4'>
            <table className='w-full text-sm text-left text-slate-600'>
                <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
                    <tr>
                        <th className='px-7 py-3'>Etat</th>
                        <th className='px-7 py-3'>Référence</th>
                        <th className='px-7 py-3'>Intitulée</th>
                        <th className='px-7 py-3'>email</th>
                        <th className='px-7 py-3'>Numéro de Téléphone</th>
                        <th className='px-7 py-3'>Adresse</th>
                        <th className='px-7 py-3'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                      [1,2,3,4,5,6,7].map((n,i)=> <tr key={i} className='bg-white border-b'>
                      <td className='px-6 py-4'><span className='px-2 py-[2px] bg-green-100 text-green-800 rounded-lg text-xs cursor-pointer'>Active</span></td>
                      <td className='px-6 py-4'>#RF454646587</td>
                      <td className='px-6 py-4'>Ali</td>
                      <td className='px-6 py-4'>Ali@gmail.com</td>
                      <td className='px-6 py-4'>+884571256</td>
                      <td className='px-6 py-4'>Rue madina 1547</td>
                      <td className='px-6 py-4'>
                          <div className='flex justify-start items-center gap-x-4 text-white'>
                              <Link className='p-[6px] bg-green-500 rounded hover:shadow-lg hover:shadow-green-500/50'><FaEye/></Link>
                          </div>
                      </td>
                  </tr>)
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Inspecteurs