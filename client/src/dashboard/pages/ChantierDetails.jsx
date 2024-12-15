import React, {useState, useRef, useContext, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import {FaEye} from "react-icons/fa"
import JoditEditor from 'jodit-react'
import {base_url} from '../config/config'
import axios from 'axios'
import storeContext from '../../context/storeContext'
import toast from 'react-hot-toast'


const ChantierDetails = () => {
    const {chantiers_id} = useParams()
    const {store} = useContext(storeContext)
    const [show, setShow] = useState(false)

    const [operationName, setOperationName] = useState('')

      
    const get_chantiers = async()=>{
        try {
            const { data } = await axios.get(`${base_url}/api/chantiers/${chantiers_id}`, {
                headers: {
                    "Authorization": `Bearer ${store.token}`
                }
            })
            setOperationName(data?.chantiers?.operationName)
            
        } catch (error) {
            console.log(error)            
        }
    }



       useEffect(()=>{
            get_chantiers()
          },[chantiers_id])
  return (
    <div className='mt-3'>
      <div className='grid grid-cols-1 gap-x-4'>
        
        
        
        <div className='w-full p-8 flex justify-center flex-col rounded-ms items-center gap-y-2 bg-white text-slate-700'>
          <span className='text-xl font-bold'>Ref#{chantiers_id}</span>
          <span>Opération : {operationName} </span>
        </div>
      </div>
      <div className='bg-white p-4 mt-5'>
        <div className="flex justify-between p-4">
                <Link
                  to="/dashboard/chantiers/form"
                  className="px-3 py-2 bg-purple-500 rounded text-white hover:bg-purple-600"
                >
                  + Formulaire Après
                </Link>
              </div>
        <div className='flex justify-between items-center pb-4'>
          <h2>Recent Rapport</h2>
          <Link >View all</Link>
        </div>
        
        <div className='relative overflow-y-auto p-4'>
            <table className='w-full text-sm text-left text-slate-600'>
                <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
                    <tr>
                        
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
                    {
                      [1,2,3,4,5,6,7].map((n,i)=> <tr key={i} className='bg-white border-b'>
                      <td className='px-6 py-4'><span className='px-2 py-[2px] bg-green-100 text-green-800 rounded-lg text-xs cursor-pointer'>Généré</span></td>
                     
                      <td className='px-6 py-4'>#CH4546</td>
                      <td className='px-6 py-4'>Ali</td>
                      <td className='px-6 py-4'>BALON THERMODYNAMIQUE</td>

                      <td className='px-6 py-4'>11-12-2024</td>
                      <td className='px-6 py-4'>11-12-2024</td>
                      <td className='px-6 py-4'>InspecteurOne</td>
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
    </div>
  )
}

export default ChantierDetails 