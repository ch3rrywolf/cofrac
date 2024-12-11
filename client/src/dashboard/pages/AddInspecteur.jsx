import React from 'react'
import { Link } from 'react-router-dom'

const AddInspecteur = () => {
  return (
    <div className='bg-white rounded-md'>
      <div className='flex justify-between p-4'>
        <h2 className='text-xl font-medium'>Add Inspecteur</h2>
        <Link className='px-3 py-[6px] bg-purple-500 rounded-sm text-white hover:bg-purple-600' to='/dashboard/inspecteurs'>Inspecteurs</Link>
      </div>
      <div className='p-4'>
        <form>
          <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='name'>Nom et Prénom*</label>
              <input type='text' placeholder='Nom et Prénom' name='name' id='name' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='operation'>Opération*</label>
              <select name="operation" id='operation' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10'>
                <option value="">--select opération--</option>
                <option value="">AIR/EAU OU EAU/EAU</option>
                <option value="">BALON THERMODYNAMIQUE</option>
              </select>            
            </div>
          </div>
          
          <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='email'>Email*</label>
              <input type='email' placeholder='exmple@gmail.com' name='email' id='email' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='password'>Mot de Passe*</label>
              <input type='password' placeholder='Password' name='password' id='password' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />         
            </div>
            </div>

            <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='phone'>Numéro de Téléphone*</label>
              <input type='text' placeholder='Numéro de Téléphone' name='phone' id='phone' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='Adresse'>Adresse*</label>
              <input type='text' placeholder='Adresse' name='Adresse' id='Adresse' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />         
            </div>
            </div>

            <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='region'>Région*</label>
              <input type='text' placeholder='Région' name='region' id='region' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='signature'>Signature</label>
              <input type='file' placeholder='importer un fichier' name='signature' id='signature' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />         
            </div>
            <div className='mt-4'>
            <button className='px-3 py-[6px] bg-purple-500 rounded-sm text-white hover:bg-purple-600'>Add Inspecteur</button>
            </div>
            </div>

            
        </form>
      </div>
    </div>
  )
}

export default AddInspecteur