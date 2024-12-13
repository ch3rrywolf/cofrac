import React, {useContext, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from 'axios'
import { base_url} from '../config/config'
import storeContext from '../../context/storeContext'

const AddContrat = () => {
  const navigate = useNavigate()
  const {store} = useContext(storeContext)
  const [state, setState] = useState({
    clientName:"",
    clientEmail:"",
    clientPhone:"",
    clientEmailContact:"",
    clientAdresse:""
    
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
      const {data} = await axios.post(`${base_url}/api/contrats/add`,state, {
        headers : {
          'Authorization' : `Bearer ${store.token}`
        }
      })
      setLoader(false)
      toast.success(data.message)
      navigate('/dashboard/contrats')
    } catch (error) {
      setLoader(false)
      toast.error(error.response.data.message)
      // console.log(error)
    }
  }

  return (
    <div className='bg-white rounded-md'>
      <div className='flex justify-between p-4'>
        <h2 className='text-xl font-medium'>Ajoute Contrat</h2>
        <Link className='px-3 py-[6px] bg-purple-500 rounded-sm text-white hover:bg-purple-600' to='/dashboard/contrats'>Contrats</Link>
      </div>
      <div className='p-4'>
        <form onSubmit={submit}>
          <div className='grid grid-cols-1 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='contratTitre'>Titre*</label>
              <input onChange={inputHandler} value={state.contratTitre} required type='text' placeholder='Client Name' name='contratTitre' id='contratTitre' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='contratDescription'>Déscription *</label>
              <textarea onChange={inputHandler} value={state.contratDescription} required rows="3" placeholder="Description" name="contratDescription" id="contratDescription" className="px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500"/>

            </div>
          </div>
          
          <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
            <label className='text-md font-medium text-gray-600' htmlFor='operation'>Opération*</label>
              <select onChange={inputHandler} value={state.operationName}  name="operation" id='operation' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10'>
                <option value="">--select opération--</option>
                <option value="AIR/EAU OU EAU/EAU">AIR/EAU OU EAU/EAU</option>
                <option value="BALON THERMODYNAMIQUE">BALON THERMODYNAMIQUE</option>
              </select>    
            </div>
            <div className='flex flex-col gap-y-2'>
            <label className='text-md font-medium text-gray-600' htmlFor='operationName'>Client*</label>
              <select onChange={inputHandler} value={state.clientName}  name="operationName" id='operationName' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10'>
                <option value="">--select client--</option>
                <option value="Client 2">Client 1</option>
                <option value="Client 1">Client 2</option>
              </select>    
            </div>
          </div>

          <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='dateContratDeb'>Date de début*</label>
              <input onChange={inputHandler} value={state.dateContratDeb} required type='date' placeholder='Date de début' name='dateContratDeb' id='dateContratDeb' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            <div className='flex flex-col gap-y-2'>
            <label className='text-md font-medium text-gray-600' htmlFor='dateContratFin'>Date de début*</label>
              <input onChange={inputHandler} value={state.dateContratFin} required type='date' placeholder='Date de début' name='dateContratFin' id='dateContratFin' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
              </div>
          </div>

          <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='pourcentContrat'>Pourcentage*</label>
              <input onChange={inputHandler} value={state.pourcentContrat} required type='number' min='0' placeholder=' %' name='pourcentContrat' id='pourcentContrat' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            <div className='flex flex-col gap-y-2'>
            <label className='text-md font-medium text-gray-600' htmlFor='tVa'>Confirmer</label>
              <button disabled={loader} className='px-3 py-[6px] bg-purple-500 rounded-sm text-white hover:bg-purple-600'>{loader ? 'Loafing...':'Ajoute Contrat'}</button>
          </div>
          </div>

            
        </form>
      </div>
    </div>
  )
}

export default AddContrat