import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { base_url} from '../config/config'
import {saveAs} from 'file-saver'

const AddFormInspec = () => {
    // const [loader, setLoader] = useState(false)
  
    const [operationName,setOperationsName] = useState('')
    const [limitPres,setLimitPres] = useState(0)
    const [prixUnit,setPrixUnit] = useState(0)
    const [tVa,setTVa] = useState(0)
    const [dureeInter,setDureeInter] = useState(0)
    const [email,setEmail] = useState('')

    const data = {operationName, limitPres, prixUnit, tVa, dureeInter, email}

    const submit = async (e) => {
        e.preventDefault();
    
        await axios.post(`${base_url}/api/createPdf`, data)
            .then(() => 
                axios.get(`${base_url}/api/fetchPdf`, { responseType: 'blob' })
                    .then((res) => {
                        const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
    
                        saveAs(pdfBlob, 'FormulaireDocument.pdf');
    
                        setOperationsName('');
                        setLimitPres(0);
                        setPrixUnit(0);
                        setTVa(0);
                        setDureeInter(0);
                        setEmail('');
                    })
                    .then(() => 
                        axios.post(`${base_url}/api/sendPdf`, {email})
                            .then((response) => {
                                console.log(response);
                                alert(response.data);
                            })
                    )
            )
            
    };
    

  return (
    <div className='bg-white rounded-md'>
      <div className='flex justify-between p-4'>
        <h2 className='text-xl font-medium'>Formulaire inspection</h2>
        <Link className='px-3 py-[6px] bg-purple-500 rounded-sm text-white hover:bg-purple-600' to='/dashboard/operations'>Opérations</Link>
      </div>
      <div className='p-4'>
        <form onSubmit={submit}>
          <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='operationName'>Opération Name*</label>
              <input onChange={(e)=>setOperationsName(e.target.value)} value={operationName} required type='text' placeholder='Opération Name' name='operationName' id='operationName' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='limitPres'>Limites prestastion*</label>
              <input onChange={(e)=>setLimitPres(e.target.value)} value={limitPres} required type='number' min='0' placeholder='Limites prestastion' name='limitPres' id='limitPres' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
          </div>
          
          <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='prixUnit'>Prix Unitaire*</label>
              <input onChange={(e)=>setPrixUnit(e.target.value)} value={prixUnit} required type='number' min='0' placeholder='Prix Unitaire' name='prixUnit' id='prixUnit' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='tVa'>T.V.A*</label>
              <input onChange={(e)=>setTVa(e.target.value)} value={tVa} required type='number' min='0' placeholder='T.V.A %' name='tVa' id='tVa' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
          </div>

          <div className='grid grid-cols-3 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='dureeInter'>Durée d’intervention*</label>
              <input onChange={(e)=>setDureeInter(e.target.value)} value={dureeInter} required type='number' min='0' placeholder='Durée d’intervention' name='dureeInter' id='dureeInter' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='email'>Email*</label>
              <input onChange={(e)=>setEmail(e.target.value)} value={email} required type='email' placeholder='' name='email' id='email' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='tVa'>Confirmer</label>
              <button className='px-3 py-[6px] bg-purple-500 rounded-sm text-white hover:bg-purple-600'>Ajoute Opération</button>
              </div>
          </div>

            
        </form>
      </div>
    </div>
  )
}

export default AddFormInspec