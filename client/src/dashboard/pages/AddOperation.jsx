import React, {useContext, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from 'axios'
import { base_url} from '../config/config'
import storeContext from '../../context/storeContext'

const AddOperation = () => {
  const navigate = useNavigate()
  const {store} = useContext(storeContext)
  const [state, setState] = useState({
    operationName:"",
    limitPres:"",
    prixUnit:"",
    tVa:"",
    dureeInter:""
    
  })

  const inputHandler = (e) => {
    setState({
      ...state,
      [e.target.name] : e.target.value
    })
  }

  const [loader, setLoader] = useState(false)

  const submit = async(e) => {
    e.preventDefault()
    try {
      setLoader(true)
      const {data} = await axios.post(`${base_url}/api/operations/add`,state, {
        headers : {
          'Authorization' : `Bearer ${store.token}`
        }
      })
      setLoader(false)
      toast.success(data.message)
      navigate('/dashboard/operations')
    } catch (error) {
      setLoader(false)
      toast.error(error.response.data.message)
      // console.log(error)
    }
  }

  return (
    <div className='bg-white rounded-md'>
      <div className='flex justify-between p-4'>
        <h2 className='text-xl font-medium'>Ajoute Opération</h2>
        <Link className='px-3 py-[6px] bg-purple-500 rounded-sm text-white hover:bg-purple-600' to='/dashboard/operations'>Opérations</Link>
      </div>
      <div className='p-4'>
        <form onSubmit={submit}>
          <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='operationName'>Opération Name*</label>
              <input onChange={inputHandler} value={state.operationName} required type='text' placeholder='Opération Name' name='operationName' id='operationName' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='limitPres'>Limites prestastion*</label>
              <input onChange={inputHandler} value={state.limitPres} required type='text' placeholder='Limites prestastion' name='limitPres' id='limitPres' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
          </div>
          
          <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='prixUnit'>Prix Unitaire*</label>
              <input onChange={inputHandler} value={state.prixUnit} required type='number' min='0' placeholder='Prix Unitaire' name='prixUnit' id='prixUnit' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='tVa'>T.V.A*</label>
              <input onChange={inputHandler} value={state.tVa} required type='number' min='0' placeholder='T.V.A %' name='tVa' id='tVa' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
          </div>

          <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='dureeInter'>Durée d’intervention*</label>
              <input onChange={inputHandler} value={state.dureeInter} required type='number' min='0' placeholder='Durée d’intervention' name='dureeInter' id='dureeInter' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='tVa'>Confirmer</label>
              <button disabled={loader} className='px-3 py-[6px] bg-purple-500 rounded-sm text-white hover:bg-purple-600'>{loader ? 'Loafing...':'Ajoute Opération'}</button>
              </div>
          </div>

            
        </form>
      </div>
    </div>
  )
}

export default AddOperation