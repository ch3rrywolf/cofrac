import React, { useEffect, useState, useContext } from 'react'
import {FaEye, FaEdit, FaTrash} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { base_url} from '../config/config'
import storeContext from '../../context/storeContext'

const Clients = () => {
  const {store} = useContext(storeContext)
  const [clients, setClients] = useState([])
  const get_clients = async()=> {
    
    try {
      
      const {data} = await axios.get(`${base_url}/api/clients`, {
        headers : {
          'Authorization' : `Bearer ${store.token}`
        }
      })
      setClients(data.clients)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    get_clients()
  }, [])
  return (
    <div className='bg-white rounded-md'>
      <div className='flex justify-between p-4'>
        <h2 className='text-xl font-medium'>Clients</h2>
        <Link className='px-3 py-[6px] bg-purple-500 rounded-sm text-white hover:bg-purple-600' to='/dashboard/clients/add'>Ajoute Client</Link>
      </div>
      <div className='relative overflow-y-auto p-4'>
            <table className='w-full text-sm text-left text-slate-600'>
                <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
                    <tr>
                        <th className='px-7 py-3'>Etat</th>
                        <th className='px-7 py-3'>Intitulée</th>
                        <th className='px-7 py-3'>email</th>
                        <th className='px-7 py-3'>Numéro de Téléphone</th>
                        <th className='px-7 py-3'>email Contact</th>
                        <th className='px-7 py-3'>Adresse</th>
                        <th className='px-7 py-3'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                      clients.map((r,i)=> <tr key={i} className='bg-white border-b'>
                      <td className='px-6 py-4'><span className='px-2 py-[2px] bg-green-100 text-green-800 rounded-lg text-xs cursor-pointer'>{r.clientStatus}</span></td>
                      <td className='px-6 py-4'>{r.clientName}</td>
                      <td className='px-6 py-4'>{r.clientEmail}</td>
                      <td className='px-6 py-4'>{r.clientPhone}</td>
                      <td className='px-6 py-4'>{r.clientEmailContact}</td>
                      <td className='px-6 py-4'>{r.clientAdresse}</td>
                      <td className='px-6 py-4'>
                          <div className='flex justify-start items-center gap-x-4 text-white'>
                              <Link to={`/dashboard/clients/${r._id}`} className='p-[6px] bg-green-500 rounded hover:shadow-lg hover:shadow-green-500/50'><FaEye/></Link>
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

export default Clients;
