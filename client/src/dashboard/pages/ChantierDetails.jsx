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
    const [benefNom, setbenefNom] = useState('')
    const [benefPreNom, setbenefPreNom] = useState('')
    const [chantierAdresse, setchantierAdresse] = useState('')
    const [chantierCodePostal, setchantierCodePostal] = useState('')
    const [chantierVille, setchantierVille] = useState('')
    const [chantierPhone, setchantierPhone] = useState('')
    const [chantierEmail, setchantierEmail] = useState('')
    const [chantierNomDO, setchantierNomDO] = useState('')
    const [chantierAdresseDO, setchantierAdresseDO] = useState('')
    const [chantierSirenDO, setchantierSirenDO] = useState('')

      
    const get_chantiers = async()=>{
        try {
            const { data } = await axios.get(`${base_url}/api/chantiers/${chantiers_id}`, {
                headers: {
                    "Authorization": `Bearer ${store.token}`
                }
            })
            setOperationName(data?.chantiers?.operationName)
            setbenefNom(data?.chantiers?.benefNom)
            setbenefPreNom(data?.chantiers?.benefPreNom)
            setchantierAdresse(data?.chantiers?.chantierAdresse)
            setchantierCodePostal(data?.chantiers?.chantierCodePostal)
            setchantierVille(data?.chantiers?.chantierVille)
            setchantierPhone(data?.chantiers?.chantierPhone)
            setchantierEmail(data?.chantiers?.chantierEmail)
            setchantierNomDO(data?.chantiers?.chantierNomDO)
            setchantierAdresseDO(data?.chantiers?.chantierAdresseDO)
            setchantierSirenDO(data?.chantiers?.chantierSirenDO)
            
        } catch (error) {
            console.log(error)            
        }
    }



       useEffect(()=>{
            get_chantiers()
          },[chantiers_id])
  return (
    <div className='mt-3'>
      <div className='grid grid-cols-6 gap-x-4'>
        <div className='w-full p-8 flex justify-center flex-col rounded-ms items-center gap-y-2 bg-white text-slate-700'>
          <span className='text-xl font-bold'>Référance</span>
          <span>#{chantiers_id} </span>
        </div>
        <div className='w-full p-8 flex justify-center flex-col rounded-ms items-center gap-y-2 bg-white text-slate-700'>
          <span className='text-xl font-bold'>Opération</span>
          <span>Opération : {operationName} </span>
        </div>
        <div className='w-full p-8 flex justify-center flex-col rounded-ms items-center gap-y-2 bg-white text-slate-700'>
          <span className='text-xl font-bold'>Info Bénéficiare</span>
          <span>Nome du bénéficiare : {benefNom} </span>
          <span>Prénom du bénéficiare* : {benefPreNom} </span>
        </div>
        <div className='w-full p-8 flex justify-center flex-col rounded-ms items-center gap-y-2 bg-white text-slate-700'>
          <span className='text-xl font-bold'>Info Localisation</span>
          <span>Adresse : {chantierAdresse} </span>
          <span>Code postal : {chantierCodePostal} </span>
          <span>Ville : {chantierVille} </span>
        </div>
        <div className='w-full p-8 flex justify-center flex-col rounded-ms items-center gap-y-2 bg-white text-slate-700'>
          <span className='text-xl font-bold'>Info Contact</span>
          <span>Téléphone : {chantierPhone} </span>
          <span>Email : {chantierEmail} </span>
        </div>
        <div className='w-full p-8 flex justify-center flex-col rounded-ms items-center gap-y-2 bg-white text-slate-700'>
          <span className='text-xl font-bold'>Info Donneur</span>
          <span>Nom Donneur d'ordre : {chantierNomDO} </span>
          <span>Adresse Donneur d'ordre : {chantierAdresseDO} </span>
          <span>Siren Donneur d'ordre : {chantierSirenDO} </span>
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
            
        </div>

      </div>
    </div>
  )
}

export default ChantierDetails 