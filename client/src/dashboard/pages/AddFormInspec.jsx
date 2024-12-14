import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { base_url} from '../config/config'
import {saveAs} from 'file-saver'

const AddFormInspec = () => {
    // const [loader, setLoader] = useState(false)
    const [Q1,setQ1] = useState('')
    const [Q2,setQ2] = useState('')
    const [Q3,setQ3] = useState('')
    const [Q4,setQ4] = useState('')
    const [Q5,setQ5] = useState('')
    const [Q6,setQ6] = useState('')
    const [Q7,setQ7] = useState('')
    const [Q8,setQ8] = useState('')
    const [Q9,setQ9] = useState('')
    const [Q10,setQ10] = useState('')
    const [email,setEmail] = useState('')

    const data = {Q1, Q2, Q3, Q4, Q5, Q6, Q7, email}

    const submit = async (e) => {
        e.preventDefault();
    
        await axios.post(`${base_url}/api/createPdf`, data)
            .then(() => 
                axios.get(`${base_url}/api/fetchPdf`, { responseType: 'blob' })
                    .then((res) => {
                        const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
    
                        saveAs(pdfBlob, 'FormulaireDocument.pdf');
    
                        setQ1('');
                        setQ2('');
                        setQ3('');
                        setQ4('');
                        setQ5('');
                        setQ6('');
                        setQ7('');
                        setQ8('');
                        setQ9('');
                        setQ10('');
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
        <Link className='px-3 py-[6px] bg-purple-500 rounded-sm text-white hover:bg-purple-600' to='/dashboard/chantiers'>Chantiers</Link>
      </div>
      <div className='p-4'>
        <form onSubmit={submit}>

            <div className='text-center items-center text-red-400'>
                <h4>Mise en œuvre conforme aux exigences du scénario retenu</h4>
            </div>
          <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
                <p className='text-sm font-medium text-gray-600' htmlFor='Q1'>
                    Bâtiment residentiel collectif existant de plus de 2 ans à la date d’engagement de l’opération ?
                </p>
            </div>
            <div className='flex items-center gap-x-4'>
            <label className='flex items-center gap-x-2'>
            <input type='radio' name='Q1' value='OUI'checked={Q1 === 'OUI'} onChange={(e) => setQ1(e.target.value)} className='focus:ring-green-500' />
                <span>OUI</span>
            </label>
            <label className='flex items-center gap-x-2'>
            <input type='radio' name='Q1' value='NON'checked={Q1 === 'NON'} onChange={(e) => setQ1(e.target.value)} className='focus:ring-green-500' />
                <span>NON</span>
            </label>
            </div>
          </div>

          <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
                <p className='text-sm font-medium text-gray-600' htmlFor='operationName'>
                Les scénarios de travaux proposés dans l’étude énergétique correspondentils aux travaux réalisés sur site ? <span className='text-gray-400 text-xs'> NB : Si «NON», une mise à jour de l’étude énergétique est à prévoir pour confirmer le gain % entre état initial et futur conformément aux travaux réels.</span>
                </p>
            </div>
            <div className='flex items-center gap-x-4'>
            <label className='flex items-center gap-x-2'>
            <input type='radio' name='Q2' value='OUI'checked={Q2 === 'OUI'} onChange={(e) => setQ2(e.target.value)} className='focus:ring-green-500' />
                <span>OUI</span>
            </label>
            <label className='flex items-center gap-x-2'>
            <input type='radio' name='setQ2' value='NON' checked={Q2 === 'NON'} onChange={(e) => setQ2(e.target.value)} className='focus:ring-green-500' />
                <span>NON</span>
            </label>
            </div>
          </div>

          <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
                <p className='text-sm font-medium text-gray-600' htmlFor='Q1'>
                Choix du scénario
                </p>
            </div>
            <div className='flex items-center gap-x-4'>
            <label className='flex items-center gap-x-2'>
            <input type='radio' name='Q3' value='OUI'checked={Q3 === 'OUI'} onChange={(e) => setQ3(e.target.value)} className='focus:ring-green-500' />
                <span>OUI</span>
            </label>
            <label className='flex items-center gap-x-2'>
            <input type='radio' name='Q3' value='NON'checked={Q3 === 'NON'} onChange={(e) => setQ3(e.target.value)} className='focus:ring-green-500' />
                <span>NON</span>
            </label>
            </div>
          </div>

          <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
                <p className='text-sm font-medium text-gray-600' htmlFor='operationName'>
                Surface habitable prise en compte dans l’audit du bâtiment residentiel collectif rénovée m²
                </p>
            </div>
            <div className='flex items-center gap-x-4'>
            <label className='flex items-center gap-x-2'>
            <input type='radio' name='Q4' value='OUI'checked={Q4 === 'OUI'} onChange={(e) => setQ4(e.target.value)} className='focus:ring-green-500' />
                <span>OUI</span>
            </label>
            <label className='flex items-center gap-x-2'>
            <input type='radio' name='Q4' value='NON' checked={Q4 === 'NON'} onChange={(e) => setQ4(e.target.value)} className='focus:ring-green-500' />
                <span>NON</span>
            </label>
            </div>
          </div>

          <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
                <p className='text-sm font-medium text-gray-600' htmlFor='operationName'>
                Surface habitable mesurée m² :
                </p>
            </div>
            <div className='flex items-center gap-x-4'>
            <label className='flex items-center gap-x-2'>
            <input type='radio' name='Q5' value='OUI'checked={Q5 === 'OUI'} onChange={(e) => setQ5(e.target.value)} className='focus:ring-green-500' />
                <span>OUI</span>
            </label>
            <label className='flex items-center gap-x-2'>
            <input type='radio' name='Q5' value='NON' checked={Q5 === 'NON'} onChange={(e) => setQ5(e.target.value)} className='focus:ring-green-500' />
                <span>NON</span>
            </label>
            </div>
          </div>

          <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
                <p className='text-sm font-medium text-gray-600' htmlFor='operationName'>
                Il est constaté un écart de surface habitable de plus de 10% ? (écart = (surface déclarée-surface mesurée) /surface mesurée *100)
                </p>
            </div>
            <div className='flex items-center gap-x-4'>
            <label className='flex items-center gap-x-2'>
            <input type='radio' name='Q6' value='OUI'checked={Q6 === 'OUI'} onChange={(e) => setQ6(e.target.value)} className='focus:ring-green-500' />
                <span>OUI</span>
            </label>
            <label className='flex items-center gap-x-2'>
            <input type='radio' name='Q6' value='NON' checked={Q6 === 'NON'} onChange={(e) => setQ6(e.target.value)} className='focus:ring-green-500' />
                <span>NON</span>
            </label>
            </div>
          </div>

          <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
                <p className='text-sm font-medium text-gray-600' htmlFor='operationName'>
                Choix du scénario
                </p>
            </div>
            <div className='flex items-center gap-x-4'>
            <label className='flex items-center gap-x-2'>
            <input type='radio' name='Q7' value='OUI'checked={Q7 === 'OUI'} onChange={(e) => setQ7(e.target.value)} className='focus:ring-green-500' />
                <span>OUI</span>
            </label>
            <label className='flex items-center gap-x-2'>
            <input type='radio' name='Q7' value='NON' checked={Q7 === 'NON'} onChange={(e) => setQ7(e.target.value)} className='focus:ring-green-500' />
                <span>NON</span>
            </label>
            </div>
          </div>

          <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
                <p className='text-sm font-medium text-gray-600' htmlFor='operationName'>
                Le prestataire ayant réalisé l’étude énergétique a-t-il proposé un scénario BBC:
                </p>
            </div>
            <div className='flex items-center gap-x-4'>
            <label className='flex items-center gap-x-2'>
            <input type='radio' name='Q8' value='OUI'checked={Q8 === 'OUI'} onChange={(e) => setQ8(e.target.value)} className='focus:ring-green-500' />
                <span>OUI</span>
            </label>
            <label className='flex items-center gap-x-2'>
            <input type='radio' name='Q8' value='NON' checked={Q8 === 'NON'} onChange={(e) => setQ8(e.target.value)} className='focus:ring-green-500' />
                <span>NON</span>
            </label>
            </div>
          </div>


          <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
                <p className='text-sm font-medium text-gray-600' htmlFor='operationName'>
                Le cep projet est ≤à 110 kWh/m² par an ?
                </p>
            </div>
            <div className='flex items-center gap-x-4'>
            <label className='flex items-center gap-x-2'>
            <input type='radio' name='Q9' value='OUI'checked={Q9 === 'OUI'} onChange={(e) => setQ9(e.target.value)} className='focus:ring-green-500' />
                <span>OUI</span>
            </label>
            <label className='flex items-center gap-x-2'>
            <input type='radio' name='Q9' value='NON' checked={Q9 === 'NON'} onChange={(e) => setQ9(e.target.value)} className='focus:ring-green-500' />
                <span>NON</span>
            </label>
            </div>
          </div>

          <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
                <p className='text-sm font-medium text-gray-600' htmlFor='operationName'>
                La consommation conventionnelle annuelle en énergie primaire après travaux, rapportée à la surface habitable du bâtiment, est inferieur 331kWh/(m².an)
                </p>
            </div>
            <div className='flex items-center gap-x-4'>
            <label className='flex items-center gap-x-2'>
            <input type='radio' name='Q10' value='OUI'checked={Q10 === 'OUI'} onChange={(e) => setQ10(e.target.value)} className='focus:ring-green-500' />
                <span>OUI</span>
            </label>
            <label className='flex items-center gap-x-2'>
            <input type='radio' name='Q10' value='NON' checked={Q10 === 'NON'} onChange={(e) => setQ10(e.target.value)} className='focus:ring-green-500' />
                <span>NON</span>
            </label>
            </div>
          </div>
          

          <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='email'>Email*</label>
              <input onChange={(e)=>setEmail(e.target.value)} value={email} required type='email' placeholder='' name='email' id='email' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='tVa'>Confirmer</label>
              <button className='px-3 py-[6px] bg-purple-500 rounded-sm text-white hover:bg-purple-600'>Confirmé formulaire</button>
              </div>
          </div>

            
        </form>
      </div>
    </div>
  )
}

export default AddFormInspec