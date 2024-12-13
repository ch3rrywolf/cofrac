import React, {useContext, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from 'axios'
import { base_url} from '../config/config'
import storeContext from '../../context/storeContext'

const AddChantier = () => {
  const navigate = useNavigate()
  const {store} = useContext(storeContext)
  const [state, setState] = useState({
    clientName:"",
    operationName:"",
    benefNom:"",
    benefPreNom:"",
    chantierAdresse:"",
    chantierCodePostal:"",
    chantierVille:"",
    chantierPhone:"",
    chantierEmail:"",
    chantierNomDO:"",
    chantierAdresseDO:"",
    chantierSirenDO:"",
    
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
      const {data} = await axios.post(`${base_url}/api/chantiers/add`,state, {
        headers : {
          'Authorization' : `Bearer ${store.token}`
        }
      })
      setLoader(false)
      toast.success(data.message)
      navigate('/dashboard/chantiers')
    } catch (error) {
      setLoader(false)
      toast.error(error.response.data.message)
      // console.log(error)
    }
  }

  return (
    <div className='bg-white rounded-md'>
      <div className='flex justify-between p-4'>
        <h2 className='text-xl font-medium'>Ajoute Chantier</h2>
        <Link className='px-3 py-[6px] bg-purple-500 rounded-sm text-white hover:bg-purple-600' to='/dashboard/chantiers'>Chantiers</Link>
      </div>
      <div className='p-4'>
        <form onSubmit={submit}>
          <div className='grid grid-cols-2 gap-x-8 mb-3'>
          <div className='flex flex-col gap-y-2'>
            <label className='text-md font-medium text-gray-600' htmlFor='clientName'>Client*</label>
              <select onChange={inputHandler} value={state.clientName}  name="clientName" id='clientName' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10'>
                <option value="">--select Client--</option>
                <option value="mootez">mootez</option>
                <option value="wolf">wolf</option>
              </select>    
            </div>
            <div className='flex flex-col gap-y-2'>
            <label className='text-md font-medium text-gray-600' htmlFor='operationName'>Opération*</label>
              <select onChange={inputHandler} value={state.operationName}  name="operationName" id='operationName' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10'>
                <option value="">--select Opération--</option>
                <option value="PAC AIR/EAU">PAC AIR/EAU</option>
                <option value="BALON THERMODYNAMIQUE">BALON THERMODYNAMIQUE</option>
              </select>    
            </div>
          </div>
          
          <div className='grid grid-cols-2 gap-x-8 mb-3'>
          <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='benefNom'>Nome du bénéficiare*</label>
              <input onChange={inputHandler} value={state.benefNom} required type='text' placeholder='Nome du bénéficiare' name='benefNom' id='benefNom' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='benefPreNom'>Prénom du bénéficiare*</label>
              <input onChange={inputHandler} value={state.benefPreNom} required type='text' placeholder='Prénom du bénéficiare' name='benefPreNom' id='benefPreNom' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
          </div>

          <div className='grid grid-cols-3 gap-x-8 mb-3'>
          <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='chantierAdresse'>Adresse*</label>
              <input onChange={inputHandler} value={state.chantierAdresse} required type='text' placeholder='Adresse' name='chantierAdresse' id='chantierAdresse' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
          <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='chantierCodePostal'>Code postal*</label>
              <input onChange={inputHandler} value={state.chantierCodePostal} required type='number' min='0' placeholder='Code postal' name='chantierCodePostal' id='chantierCodePostal' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='chantierVille'>Ville*</label>
              <input onChange={inputHandler} value={state.chantierVille} required type='text' placeholder='Ville' name='chantierVille' id='chantierVille' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
          </div>

          <div className='grid grid-cols-2 gap-x-8 mb-3'>
          <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='chantierPhone'>Téléphone*</label>
              <input onChange={inputHandler} value={state.chantierPhone} required type='number' min='0' placeholder='Téléphone' name='chantierPhone' id='chantierPhone' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
          <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='chantierEmail'>Email*</label>
              <input onChange={inputHandler} value={state.chantierEmail} required type='email' placeholder='Email' name='chantierEmail' id='chantierEmail' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
          </div>

          <div className='grid grid-cols-3 gap-x-8 mb-3'>            
          <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='chantierNomDO'>Nom Donneur d'ordre*</label>
              <input onChange={inputHandler} value={state.chantierNomDO} required type='text' placeholder="Nom Donneur d'ordre" name='chantierNomDO' id='chantierNomDO' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
          <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='chantierAdresseDO'>Adresse Donneur d'ordre*</label>
              <input onChange={inputHandler} value={state.chantierAdresseDO} required type='text' placeholder="Adresse Donneur d'ordre" name='chantierAdresseDO' id='chantierAdresseDO' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
          <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='chantierSirenDO'>Siren Donneur d'ordre*</label>
              <input onChange={inputHandler} value={state.chantierSirenDO} required type='text' min='0' placeholder="Siren Donneur d'ordre" name='chantierSirenDO' id='chantierSirenDO' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
          </div>

          <div className='grid grid-cols-1 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
            {/* <label className='text-md font-medium text-gray-600' htmlFor='tVa'>Confirmer</label> */}
              <button disabled={loader} className='px-3 py-[6px] bg-purple-500 rounded-sm text-white hover:bg-purple-600'>{loader ? 'Loading...':'Ajoute Chantier'}</button>
          </div>
          </div>

            
        </form>
      </div>
    </div>
  )
}

export default AddChantier