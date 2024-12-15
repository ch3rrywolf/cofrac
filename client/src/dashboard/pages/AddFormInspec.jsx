import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { base_url} from '../config/config'
import {saveAs} from 'file-saver'
import {MdCloudUpload} from 'react-icons/md'

const AddFormInspec = () => {
    // const [loader, setLoader] = useState(false)
    // mise ouvre
    const [Q1MO,setQ1MO] = useState('')
    const [Q2MO,setQ2MO] = useState('')
    const [Q3MO,setQ3MO] = useState('')
    const [Q4MO,setQ4MO] = useState('')
    const [Q5MO,setQ5MO] = useState('')
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
    const [Q11,setQ11] = useState('')
    const [Q12,setQ12] = useState('')
    const [Q13,setQ13] = useState('')
    const [Q14,setQ14] = useState('')
    const [Q15,setQ15] = useState('')
    const [Q16,setQ16] = useState('')
    const [Q17,setQ17] = useState('')
    const [Q18,setQ18] = useState('')
    const [Q19,setQ19] = useState('')


// Air-Air
    const [AAmarqu1e,setAAmarqu1e] = useState('')
    const [AAreferenc1e,setAAreferenc1e] = useState('')
    const [AAnomberuni1t1,setAAnomberuni1t1] = useState('')
    const [AAnomberuni1t2,setAAnomberuni1t2] = useState('')
    const [AApuissancenomina1l,setAApuissancenomina1l] = useState('')
    const [AACO1P,setAACO1P] = useState('')

    const [AAmarqu2e,setAAmarqu2e] = useState('')
    const [AAreferenc2e,setAAreferenc2e] = useState('')
    const [AAnomberuni2t1,setAAnomberuni2t1] = useState('')
    const [AAnomberuni2t2,setAAnomberuni2t2] = useState('')
    const [AApuissancenomina2l,setAApuissancenomina2l] = useState('')
    const [AACO2P,setAACO2P] = useState('')

    const [AAmarqu3e,setAAmarqu3e] = useState('')
    const [AAreferenc3e,setAAreferenc3e] = useState('')
    const [AAnomberuni3t1,setAAnomberuni3t1] = useState('')
    const [AAnomberuni3t2,setAAnomberuni3t2] = useState('')
    const [AApuissancenomina3l,setAApuissancenomina3l] = useState('')
    const [AACO3P,setAACO3P] = useState('')

    const [AAmarqu4e,setAAmarqu4e] = useState('')
    const [AAreferenc4e,setAAreferenc4e] = useState('')
    const [AAnomberuni4t1,setAAnomberuni4t1] = useState('')
    const [AAnomberuni4t2,setAAnomberuni4t2] = useState('')
    const [AApuissancenomina4l,setAApuissancenomina4l] = useState('')
    const [AACO4P,setAACO4P] = useState('')

    const [AAmarqu5e,setAAmarqu5e] = useState('')
    const [AAreferenc5e,setAAreferenc5e] = useState('')
    const [AAnomberuni5t1,setAAnomberuni5t1] = useState('')
    const [AAnomberuni5t2,setAAnomberuni5t2] = useState('')
    const [AApuissancenomina5l,setAApuissancenomina5l] = useState('')
    const [AACO5P,setAACO5P] = useState('')

    const [AAQ1,setAAQ1] = useState('')
    const [AA1Q1,setAA1Q1] = useState('')
    const [AAQ2,setAAQ2] = useState('')
    const [AAQ3,setAAQ3] = useState('')
    const [AAQ4,setAAQ4] = useState('')
    const [AAQ5,setAAQ5] = useState('')
    const [AAQ6,setAAQ6] = useState('')
    const [AAQ7,setAAQ7] = useState('')
    const [AAQ8,setAAQ8] = useState('')
    const [AAQ9,setAAQ9] = useState('')
    const [AAQ10,setAAQ10] = useState('')
    const [AAQ11,setAAQ11] = useState('')
    const [AAQ12,setAAQ12] = useState('')
    const [AAQ13,setAAQ13] = useState('')
    const [AAQ14,setAAQ14] = useState('')
    const [AAQ15,setAAQ15] = useState('')
    const [AAQ16,setAAQ16] = useState('')
    const [AAQ17,setAAQ17] = useState('')



// Air-Eau
const [AEmarqu1e,setAEmarqu1e] = useState('')
const [AEreferenc1e,setAEreferenc1e] = useState('')
const [AEnomberuni1t1,setAEnomberuni1t1] = useState('')
const [AEnomberuni1t2,setAEnomberuni1t2] = useState('')
const [AEpuissancenomina1l,setAEpuissancenomina1l] = useState('')
const [AECO1P,setAECO1P] = useState('')

const [AEmarqu2e,setAEmarqu2e] = useState('')
const [AEreferenc2e,setAEreferenc2e] = useState('')
const [AEnomberuni2t1,setAEnomberuni2t1] = useState('')
const [AEnomberuni2t2,setAEnomberuni2t2] = useState('')
const [AEpuissancenomina2l,setAEpuissancenomina2l] = useState('')
const [AECO2P,setAECO2P] = useState('')

const [AEmarqu3e,setAEmarqu3e] = useState('')
const [AEreferenc3e,setAEreferenc3e] = useState('')
const [AEnomberuni3t1,setAEnomberuni3t1] = useState('')
const [AEnomberuni3t2,setAEnomberuni3t2] = useState('')
const [AEpuissancenomina3l,setAEpuissancenomina3l] = useState('')
const [AECO3P,setAECO3P] = useState('')

const [AEmarqu4e,setAEmarqu4e] = useState('')
const [AEreferenc4e,setAEreferenc4e] = useState('')
const [AEnomberuni4t1,setAEnomberuni4t1] = useState('')
const [AEnomberuni4t2,setAEnomberuni4t2] = useState('')
const [AEpuissancenomina4l,setAEpuissancenomina4l] = useState('')
const [AECO4P,setAECO4P] = useState('')

const [AEmarqu5e,setAEmarqu5e] = useState('')
const [AEreferenc5e,setAEreferenc5e] = useState('')
const [AEnomberuni5t1,setAEnomberuni5t1] = useState('')
const [AEnomberuni5t2,setAEnomberuni5t2] = useState('')
const [AEpuissancenomina5l,setAEpuissancenomina5l] = useState('')
const [AECO5P,setAECO5P] = useState('')



    const [CET1,setCET1] = useState('')


    const [email,setEmail] = useState('')

    const data = {Q1MO, Q2MO, Q3MO, Q4MO, Q5MO, Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10, Q11, Q12, Q13, Q14, Q15, Q16, Q17, Q18, Q19, CET1, AAmarqu1e, AAreferenc1e, AAnomberuni1t1, AAnomberuni1t2, AApuissancenomina1l, AACO1P, AAmarqu2e, AAreferenc2e, AAnomberuni2t1, AAnomberuni2t2, AApuissancenomina2l, AACO2P, AAmarqu3e, AAreferenc3e, AAnomberuni3t1, AAnomberuni3t2, AApuissancenomina3l, AACO3P, AAmarqu4e, AAreferenc4e, AAnomberuni4t1, AAnomberuni4t2, AApuissancenomina4l, AACO4P, AAmarqu5e, AAreferenc5e, AAnomberuni5t1, AAnomberuni5t2, AApuissancenomina5l, AACO5P, AA1Q1, AAQ1, AAQ2, AAQ3, AAQ4, AAQ5, AAQ6, AAQ7, AAQ8, AAQ9, AAQ10, AAQ11, AAQ12, AAQ13, AAQ14, AAQ15, AAQ16, AAQ17, AEmarqu1e, AEreferenc1e, AEnomberuni1t1, AEnomberuni1t2, AEpuissancenomina1l, AECO1P, AEmarqu2e, AEreferenc2e, AEnomberuni2t1, AEnomberuni2t2, AEpuissancenomina2l, AECO2P, AEmarqu3e, AEreferenc3e, AEnomberuni3t1, AEnomberuni3t2, AEpuissancenomina3l, AECO3P, AEmarqu4e, AEreferenc4e, AEnomberuni4t1, AEnomberuni4t2, AEpuissancenomina4l, AECO4P, AEmarqu5e, AEreferenc5e, AEnomberuni5t1, AEnomberuni5t2, AEpuissancenomina5l, AECO5P, email}

    const submit = async (e) => {
        e.preventDefault();
    
        await axios.post(`${base_url}/api/createPdf`, data)
            .then(() => 
                axios.get(`${base_url}/api/fetchPdf`, { responseType: 'blob' })
                    .then((res) => {
                        const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
    
                        saveAs(pdfBlob, 'FormulaireDocument.pdf');
    
                        setQ1MO('');
                        setQ2MO('');
                        setQ3MO('');
                        setQ4MO('');
                        setQ5MO('');
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
                        setQ11('');
                        setQ12('');
                        setQ13('');
                        setQ14('');
                        setQ15('');
                        setQ16('');
                        setQ17('');
                        setQ18('');
                        setQ19('');

                        //air-air
                        setAAmarqu1e('');
                        setAAreferenc1e('');
                        setAAnomberuni1t1('');
                        setAAnomberuni1t2('');
                        setAApuissancenomina1l('');
                        setAACO1P('');
                        setAAmarqu2e('');
                        setAAreferenc2e('');
                        setAAnomberuni2t1('');
                        setAAnomberuni2t2('');
                        setAApuissancenomina2l('');
                        setAACO2P('');
                        setAAmarqu3e('');
                        setAAreferenc3e('');
                        setAAnomberuni3t1('');
                        setAAnomberuni3t2('');
                        setAApuissancenomina3l('');
                        setAACO3P('');
                        setAAmarqu4e('');
                        setAAreferenc4e('');
                        setAAnomberuni4t1('');
                        setAAnomberuni4t2('');
                        setAApuissancenomina4l('');
                        setAACO4P('');
                        setAAmarqu5e('');
                        setAAreferenc5e('');
                        setAAnomberuni5t1('');
                        setAAnomberuni5t2('');
                        setAApuissancenomina5l('');
                        setAACO5P('');

                        setAAQ1('');
                        setAAQ2('');
                        setAAQ3('');
                        setAAQ4('');
                        setAAQ5('');
                        setAAQ6('');
                        setAAQ7('');
                        setAAQ8('');
                        setAAQ9('');
                        setAAQ10('');
                        setAAQ11('');
                        setAAQ12('');
                        setAAQ13('');
                        setAAQ14('');
                        setAAQ15('');
                        setAAQ16('');
                        setAAQ17('');

                        // Air/Eau

                        //air-air
                        setAEmarqu1e('');
                        setAEreferenc1e('');
                        setAEnomberuni1t1('');
                        setAEnomberuni1t2('');
                        setAEpuissancenomina1l('');
                        setAECO1P('');
                        setAEmarqu2e('');
                        setAEreferenc2e('');
                        setAEnomberuni2t1('');
                        setAEnomberuni2t2('');
                        setAEpuissancenomina2l('');
                        setAECO2P('');
                        setAEmarqu3e('');
                        setAEreferenc3e('');
                        setAEnomberuni3t1('');
                        setAEnomberuni3t2('');
                        setAEpuissancenomina3l('');
                        setAECO3P('');
                        setAEmarqu4e('');
                        setAEreferenc4e('');
                        setAEnomberuni4t1('');
                        setAEnomberuni4t2('');
                        setAEpuissancenomina4l('');
                        setAECO4P('');
                        setAEmarqu5e('');
                        setAEreferenc5e('');
                        setAEnomberuni5t1('');
                        setAEnomberuni5t2('');
                        setAEpuissancenomina5l('');
                        setAECO5P('');



                        setCET1('');
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

{/* Mise/Oeuv */}

<div className='text-center items-center text-white font-bold border border-solid bg-orange-700' >
    <h4>Mise en œuvre conforme aux exigences du scénario retenu</h4>
</div>
<div className="overflow-x-auto">
  <table className="table-auto w-full border-collapse border border-gray-300 text-sm text-gray-600">
    <thead>
      <tr>
        <th className="border border-gray-300 px-4 py-2">Question</th>
        <th className="border border-gray-300 px-4 py-2">OUI</th>
        <th className="border border-gray-300 px-4 py-2">NON</th>
      </tr>
    </thead>
    <tbody>

    <tr>
        <td className="border border-gray-300 px-4 py-2">
        Document matérialisant l'engagement de l'opération (devis signés..)
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            id="Q1MOoui"
            type="radio"
            name="Q1MO"
            value="⛝ Oui"
            checked={Q1MO === "⛝ Oui"}
            onChange={(e) => setQ1MO(e.target.value)}
          />
          <label for="Q1MOoui">Oui</label>
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            id='Q1MOnon'
            type="radio"
            name="Q1MO"
            value="⛝ NON"
            checked={Q1MO === "⛝ NON"}
            onChange={(e) => setQ1MO(e.target.value)}
          />
          <label for="Q1MOnon">Non</label>
          </td>
      </tr>

      <tr>
        <td className="border border-gray-300 px-4 py-2">
        Date d'engagement de l'opération :
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
          id='Q2MOoui'
            type="radio"
            name="Q2MO"
            value="⛝ OUI"
            checked={Q2MO === "⛝ OUI"}
            onChange={(e) => setQ2MO(e.target.value)}
          />
          <label for="Q2MOoui">Oui</label>
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            id='Q2MOnon'
            type="radio"
            name="Q2MO"
            value="⛝ NON"
            checked={Q2MO === "⛝ NON"}
            onChange={(e) => setQ2MO(e.target.value)}
          />
          <label for="Q2MOnon">Non</label>
        </td>
      </tr>

      <tr>
        <td className="border border-gray-300 px-4 py-2">
        Document prouvant la réalisation de l’opération (facture des travaux, PV de réception, etc) remis au bénéficiaire :
        </td>
        
        <td className="border border-gray-300 px-4 py-2 text-center">
        
          <input
            id='Q3MOoui'
            type="radio"
            name="Q3MO"
            value="⛝ OUI"
            checked={Q3MO === "⛝ OUI"}
            onChange={(e) => setQ3MO(e.target.value)}
          />
          <label for="Q3MOoui">Oui</label>
        </td>
        
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            id='Q3MOnon'
            type="radio"
            name="Q3MO"
            value="⛝ NON"
            checked={Q3MO === "⛝ NON"}
            onChange={(e) => setQ3MO(e.target.value)}
          />
          <label for="Q3MOnon">Non</label>
        </td>
      </tr>

      <tr>
        <td className="border border-gray-300 px-4 py-2">
        Référence de la facture :
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
          id='Q4MOoui'
            type="radio"
            name="Q4MO"
            value="⛝ OUI"
            checked={Q4MO === "⛝ OUI"}
            onChange={(e) => setQ4MO(e.target.value)}
          />
          <label for="Q4MOoui">Oui</label>
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
          id='Q4MOnon'
            type="radio"
            name="Q4MO"
            value="⛝ NON"
            checked={Q4MO === "⛝ NON"}
            onChange={(e) => setQ4MO(e.target.value)}
          />
          <label for="Q4MOnon">Non</label>
        </td>
      </tr>

      <tr>
        <td className="border border-gray-300 px-4 py-2">
        Cadre contribution remis au bénéficiaire
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
          id='Q5MOoui'
            type="radio"
            name="Q5MO"
            value="⛝ OUI"
            checked={Q5MO === "⛝ OUI"}
            onChange={(e) => setQ5MO(e.target.value)}
          />
          <label for="Q5MOoui">Oui</label>
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
          id='Q5MOnon'
            type="radio"
            name="Q5MO"
            value="⛝ NON"
            checked={Q5MO === "⛝ NON"}
            onChange={(e) => setQ5MO(e.target.value)}
          />
          <label for="Q5MOnon">Non</label>
        </td>
      </tr>
      

      <tr>
        <td className="border border-gray-300 px-4 py-2">
          Bâtiment résidentiel collectif existant de plus de 2 ans à la date d’engagement de l’opération ?
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
          id='Q1oui'
            type="radio"
            name="Q1"
            value="⛝ OUI"
            checked={Q1 === "⛝ OUI"}
            onChange={(e) => setQ1(e.target.value)}
          />
          <label for="Q1oui">Oui</label>
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
          id='Q1non'
            type="radio"
            name="Q1"
            value="⛝ NON"
            checked={Q1 === "⛝ NON"}
            onChange={(e) => setQ1(e.target.value)}
          />
          <label for="Q1non">Non</label>
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">
          Les scénarios de travaux proposés dans l’étude énergétique correspondent-ils aux travaux réalisés sur site ? <br />
          <span className="text-gray-400 text-xs">
            NB : Si «NON», une mise à jour de l’étude énergétique est à prévoir pour confirmer le gain % entre état initial et futur
            conformément aux travaux réels.
          </span>
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
          id='Q2oui'
            type="radio"
            name="Q2"
            value="⛝ OUI"
            checked={Q2 === "⛝ OUI"}
            onChange={(e) => setQ2(e.target.value)}
          />
          <label for="Q2oui">Oui</label>
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
          id='Q2non'
            type="radio"
            name="Q2"
            value="⛝ NON"
            checked={Q2 === "⛝ NON"}
            onChange={(e) => setQ2(e.target.value)}
          />
          <label for="Q2non">Non</label>
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">Choix du scénario</td>
        <div ><input
        className='items-center justify-center text-center'
            type="text"
            name="Q3"
            value={Q3}
            onChange={(e)=>setQ3(e.target.value)}
            id="Q3"
            placeholder='...'
          /></div>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">
        Surface habitable prise en compte dans l’audit du bâtiment residentiel collectif rénovée (m²)
        </td>
        <div ><input
        className='items-center justify-center text-center'
            type="text"
            name="Q4"
            value={Q4}
            onChange={(e)=>setQ4(e.target.value)}
            id="Q4"
            placeholder='...'
          /></div>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">
        Surface habitable mesurée (m²) :
        </td>
        <div ><input
        className='items-center justify-center text-center'
            type="text"
            name="Q5"
            value={Q5}
            onChange={(e)=>setQ5(e.target.value)}
            id="Q5"
            placeholder='...'
          /></div>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">
        Il est constaté un écart de surface habitable de plus de 10% ? (écart = (surface déclarée-surface mesurée) /surface mesurée *100)
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
          id='Q6oui'
            type="radio"
            name="Q6"
            value="⛝ OUI"
            checked={Q6 === "⛝ OUI"}
            onChange={(e) => setQ6(e.target.value)}
          />
          <label for="Q6oui">Oui</label>
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
          id='Q6non'
            type="radio"
            name="Q6"
            value="⛝ NON"
            checked={Q6 === "⛝ NON"}
            onChange={(e) => setQ6(e.target.value)}
          />
          <label for="Q6non">Non</label>
        </td>
      </tr>
    
      <tr>
        <td className="border border-gray-300 px-4 py-2">
        Le prestataire ayant réalisé l’étude énergétique a-t-il proposé un scénario BBC:
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
          id='Q7oui'
            type="radio"
            name="Q7"
            value="⛝ OUI"
            checked={Q7 === "⛝ OUI"}
            onChange={(e) => setQ7(e.target.value)}
          />
          <label for="Q7oui">Oui</label>
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
          id='Q7non'
            type="radio"
            name="Q7"
            value="⛝ NON"
            checked={Q7 === "⛝ NON"}
            onChange={(e) => setQ7(e.target.value)}
          />
          <label for="Q7non">Non</label>
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">
        Le cep projet est ≤à 110 kWh/m² par an ?
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
          id='Q8oui'
            type="radio"
            name="Q8"
            value="⛝ OUI"
            checked={Q8 === "⛝ OUI"}
            onChange={(e) => setQ8(e.target.value)}
          />
          <label for="Q8oui">Oui</label>
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
          id='Q8non'
            type="radio"
            name="Q8"
            value="⛝ NON"
            checked={Q8 === "⛝ NON"}
            onChange={(e) => setQ8(e.target.value)}
          />
          <label for="Q8non">Non</label>
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">
        La consommation conventionnelle annuelle en énergie primaire après travaux, rapportée à la surface habitable du bâtiment, est inférieur à 331 kWh/(m².an)
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
          id='Q9oui'
            type="radio"
            name="Q9"
            value="⛝ OUI"
            checked={Q9 === "⛝ OUI"}
            onChange={(e) => setQ9(e.target.value)}
          />
          <label for="Q9oui">Oui</label>
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
          id='Q9non'
            type="radio"
            name="Q9"
            value="⛝ NON"
            checked={Q9 === "⛝ NON"}
            onChange={(e) => setQ9(e.target.value)}
          />
          <label for="Q9non">Non</label>
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">
        kgeqCO2/m².an, sont inférieures ou égales à la valeur initiale de ces émissions avant travaux :
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
          id='Q10oui'
            type="radio"
            name="Q10"
            value="⛝ OUI"
            checked={Q10 === "⛝ OUI"}
            onChange={(e) => setQ10(e.target.value)}
          />
          <label for="Q10oui">Oui</label>
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
          id='Q10non'
            type="radio"
            name="Q10"
            value="⛝ NON"
            checked={Q10 === "⛝ NON"}
            onChange={(e) => setQ10(e.target.value)}
          />
          <label for="Q10non">Non</label>
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">
        L’audit énergétique ne prend en compte que les installations de chauffage fixes


        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
          id='Q11oui'
            type="radio"
            name="Q11"
            value="⛝ OUI"
            checked={Q11 === "⛝ OUI"}
            onChange={(e) => setQ11(e.target.value)}
          />
          <label for="Q11oui">Oui</label>
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
          id='Q11non'
            type="radio"
            name="Q11"
            value="⛝ NON"
            checked={Q11 === "⛝ NON"}
            onChange={(e) => setQ11(e.target.value)}
          />
          <label for="Q11non">Non</label>
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">
        Les équipements de production de chaleur ou d’ECS installés utilisent plus de 50 % d’ENR ?

        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
          id='Q12oui'
            type="radio"
            name="Q12"
            value="⛝ OUI"
            checked={Q12 === "⛝ OUI"}
            onChange={(e) => setQ12(e.target.value)}
          />
          <label for="Q12oui">Oui</label>
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
          id='Q12non'
            type="radio"
            name="Q12"
            value="⛝ NON"
            checked={Q12 === "⛝ NON"}
            onChange={(e) => setQ12(e.target.value)}
          />
          <label for="Q12non">Non</label>
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">
        L’audit énergétique a été réalisé à l’aide d’un logiciel répondant aux exigences de la fiche BAR-TH-145

        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
          id='Q13oui'
            type="radio"
            name="Q13"
            value="⛝ OUI"
            checked={Q13 === "⛝ OUI"}
            onChange={(e) => setQ13(e.target.value)}
          />
          <label for="Q13oui">Oui</label>
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
          id='Q13non'
            type="radio"
            name="Q13"
            value="⛝ NON"
            checked={Q13 === "⛝ NON"}
            onChange={(e) => setQ13(e.target.value)}
          />
          <label for="Q13non">Non</label>
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">
        L’audit énergétique pris en compte pour la réalisation des travaux dispose d’un avis satisfaisant

        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
          id='Q14oui'
            type="radio"
            name="Q14"
            value="⛝ OUI"
            checked={Q14 === "⛝ OUI"}
            onChange={(e) => setQ14(e.target.value)}
          />
          <label for="Q14oui">Oui</label>
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
          id='Q14non'
            type="radio"
            name="Q14"
            value="⛝ NON"
            checked={Q14 === "⛝ NON"}
            onChange={(e) => setQ14(e.target.value)}
          />
          <label for="Q14non">Non</label>
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">
        conventionnelles en énergie primaire et en énergie finale avant et après l’opération

        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
          id='Q15oui'
            type="radio"
            name="Q15"
            value="⛝ OUI"
            checked={Q15 === "⛝ OUI"}
            onChange={(e) => setQ15(e.target.value)}
          />
          <label for="Q15oui">Oui</label>
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
          id='Q15non'
            type="radio"
            name="Q15"
            value="⛝ NON"
            checked={Q15 === "⛝ NON"}
            onChange={(e) => setQ15(e.target.value)}
          />
          <label for="Q15non">Non</label>
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">
        Le niveau de confort thermique après travaux est meilleur qu’avant les travaux ?
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
          id='Q16oui'
            type="radio"
            name="Q16"
            value="⛝ OUI"
            checked={Q16 === "⛝ OUI"}
            onChange={(e) => setQ16(e.target.value)}
          />
          <label for="Q16oui">Oui</label>
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
          id='Q16non'
            type="radio"
            name="Q16"
            value="⛝ NON"
            checked={Q16 === "⛝ NON"}
            onChange={(e) => setQ16(e.target.value)}
          />
          <label for="Q16non">Non</label>
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">
        Les changements d’équipements de chauffage ou de production d’eau chaude sanitaire le cas échéant préconisés, hors raccordement à un réseau de chaleur, ne conduisent : a) Ni à l'installation d'équipements de chauffage ou de production d'eau chaude sanitaire consommant majoritairement du charbon, du fioul ou du gaz ; b) Ni à une hausse des émissions de gaz à effet de serre.

        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
          id='Q17oui'
            type="radio"
            name="Q17"
            value="⛝ OUI"
            checked={Q17 === "⛝ OUI"}
            onChange={(e) => setQ17(e.target.value)}
          />
          <label for="Q17oui">Oui</label>
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
          id='Q17non'
            type="radio"
            name="Q17"
            value="⛝ NON"
            checked={Q17 === "⛝ NON"}
            onChange={(e) => setQ17(e.target.value)}
          />
          <label for="Q17non">Non</label>
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">
        chauffage et d’eau chaude sanitaire du bâtiment après travaux calculé selon les modalités définies à l’annexe IV-1 de l’arrêté du 29 décembre 2014 modifié relatif aux modalités d’application du dispositif des certificats d’économies d’énergie correspond à celui utilisé pour le calcul du montant de CEE ; il vérifie, notamment dans le cas où une pompe à chaleur est installée, que le COP saisonnier retenu pour le calcul de ce taux est conforme aux indications du fournisseur ;
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
          id='Q18oui'
            type="radio"
            name="Q18"
            value="⛝ OUI"
            checked={Q18 === "⛝ OUI"}
            onChange={(e) => setQ18(e.target.value)}
          />
          <label for="Q18oui">Oui</label>
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
          id='Q18non'
            type="radio"
            name="Q18"
            value="⛝ NON"
            checked={Q18 === "⛝ NON"}
            onChange={(e) => setQ18(e.target.value)}
          />
          <label for="Q18non">Non</label>
        </td>
      </tr>
    </tbody>
  </table>
</div>

{/* AIR/AIR */}

<div>
    <h4 className='text-center items-center text-white font-bold border border-solid bg-orange-700'>Pompe à chaleur - AIR/AIR </h4>
</div>
<div className="overflow-x-auto">
  <table className="table-auto w-full border-collapse border border-gray-300 text-sm text-gray-600">
    <thead>
      <tr>
        <th className="border border-gray-300 px-4 py-2">Marque</th>
        <th className="border border-gray-300 px-4 py-2">Référence</th>
        <th className="border border-gray-300 px-4 py-2">Nombre unité intérieur</th>
        <th className="border border-gray-300 px-4 py-2">Nombre unité intérieur</th>
        <th className="border border-gray-300 px-4 py-2">Puissance nominal (kW)</th>
        <th className="border border-gray-300 px-4 py-2">COP</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="text"
            name="AAmarqu1e"
            value={AAmarqu1e}
            onChange={(e)=>setAAmarqu1e(e.target.value)}
            id="AAmarqu1e"
            placeholder='...'
          />
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="text"
            name="AAreferenc1e"
            value={AAreferenc1e}
            onChange={(e)=>setAAreferenc1e(e.target.value)}
            id="AAreferenc1e"
            placeholder='...'
          />
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="text"
            name="AAnomberuni1t1"
            value={AAnomberuni1t1}
            onChange={(e)=>setAAnomberuni1t1(e.target.value)}
            id="AAnomberuni1t1"
            placeholder='...'
          />
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="text"
            name="AAnomberuni1t2"
            value={AAnomberuni1t2}
            onChange={(e)=>setAAnomberuni1t2(e.target.value)}
            id="AAnomberuni1t2"
            placeholder='...'
          />
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="text"
            name="AApuissancenomina1l"
            value={AApuissancenomina1l}
            onChange={(e)=>setAApuissancenomina1l(e.target.value)}
            id="AApuissancenomina1l"
            placeholder='...'
          />
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="text"
            name="AACO1P"
            value={AACO1P}
            onChange={(e)=>setAACO1P(e.target.value)}
            id="AACO1P"
            placeholder='...'
          />
        </td>
      </tr> 

      <tr>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="text"
            name="AAmarqu2e"
            value={AAmarqu2e}
            onChange={(e)=>setAAmarqu2e(e.target.value)}
            id="AAmarqu2e"
            placeholder='...'
          />
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="text"
            name="AAreferenc2e"
            value={AAreferenc2e}
            onChange={(e)=>setAAreferenc2e(e.target.value)}
            id="AAreferenc2e"
            placeholder='...'
          />
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="text"
            name="AAnomberuni2t1"
            value={AAnomberuni2t1}
            onChange={(e)=>setAAnomberuni2t1(e.target.value)}
            id="AAnomberuni2t1"
            placeholder='...'
          />
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="text"
            name="AAnomberuni2t2"
            value={AAnomberuni2t2}
            onChange={(e)=>setAAnomberuni2t2(e.target.value)}
            id="AAnomberuni2t2"
            placeholder='...'
          />
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="text"
            name="AApuissancenomina2l"
            value={AApuissancenomina2l}
            onChange={(e)=>setAApuissancenomina2l(e.target.value)}
            id="AApuissancenomina2l"
            placeholder='...'
          />
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="text"
            name="AACO2P"
            value={AACO2P}
            onChange={(e)=>setAACO2P(e.target.value)}
            id="AACO2P"
            placeholder='...'
          />
        </td>
      </tr>       

      <tr>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="text"
            name="AAmarqu3e"
            value={AAmarqu3e}
            onChange={(e)=>setAAmarqu3e(e.target.value)}
            id="AAmarqu3e"
            placeholder='...'
          />
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="text"
            name="AAreferenc3e"
            value={AAreferenc3e}
            onChange={(e)=>setAAreferenc3e(e.target.value)}
            id="AAreferenc3e"
            placeholder='...'
          />
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="text"
            name="AAnomberuni3t1"
            value={AAnomberuni3t1}
            onChange={(e)=>setAAnomberuni3t1(e.target.value)}
            id="AAnomberuni3t1"
            placeholder='...'
          />
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="text"
            name="AAnomberuni3t2"
            value={AAnomberuni3t2}
            onChange={(e)=>setAAnomberuni3t2(e.target.value)}
            id="AAnomberuni3t2"
            placeholder='...'
          />
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="text"
            name="AApuissancenomina3l"
            value={AApuissancenomina3l}
            onChange={(e)=>setAApuissancenomina3l(e.target.value)}
            id="AApuissancenomina3l"
            placeholder='...'
          />
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="text"
            name="AACO3P"
            value={AACO3P}
            onChange={(e)=>setAACO3P(e.target.value)}
            id="AACO3P"
            placeholder='...'
          />
        </td>
      </tr>  

      <tr>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="text"
            name="AAmarqu4e"
            value={AAmarqu4e}
            onChange={(e)=>setAAmarqu4e(e.target.value)}
            id="AAmarqu4e"
            placeholder='...'
          />
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="text"
            name="AAreferenc4e"
            value={AAreferenc4e}
            onChange={(e)=>setAAreferenc4e(e.target.value)}
            id="AAreferenc4e"
            placeholder='...'
          />
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="text"
            name="AAnomberuni4t1"
            value={AAnomberuni4t1}
            onChange={(e)=>setAAnomberuni4t1(e.target.value)}
            id="AAnomberuni4t1"
            placeholder='...'
          />
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="text"
            name="AAnomberuni4t2"
            value={AAnomberuni4t2}
            onChange={(e)=>setAAnomberuni4t2(e.target.value)}
            id="AAnomberuni4t2"
            placeholder='...'
          />
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="text"
            name="AApuissancenomina4l"
            value={AApuissancenomina4l}
            onChange={(e)=>setAApuissancenomina4l(e.target.value)}
            id="AApuissancenomina4l"
            placeholder='...'
          />
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="text"
            name="AACO4P"
            value={AACO4P}
            onChange={(e)=>setAACO4P(e.target.value)}
            id="AACO4P"
            placeholder='...'
          />
        </td>
      </tr>  

      <tr>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="text"
            name="AAmarqu5e"
            value={AAmarqu5e}
            onChange={(e)=>setAAmarqu5e(e.target.value)}
            id="AAmarqu5e"
            placeholder='...'
          />
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="text"
            name="AAreferenc5e"
            value={AAreferenc5e}
            onChange={(e)=>setAAreferenc5e(e.target.value)}
            id="AAreferenc5e"
            placeholder='...'
          />
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="text"
            name="AAnomberuni5t1"
            value={AAnomberuni5t1}
            onChange={(e)=>setAAnomberuni5t1(e.target.value)}
            id="AAnomberuni5t1"
            placeholder='...'
          />
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="text"
            name="AAnomberuni5t2"
            value={AAnomberuni5t2}
            onChange={(e)=>setAAnomberuni5t2(e.target.value)}
            id="AAnomberuni5t2"
            placeholder='...'
          />
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="text"
            name="AApuissancenomina5l"
            value={AApuissancenomina5l}
            onChange={(e)=>setAApuissancenomina5l(e.target.value)}
            id="AApuissancenomina5l"
            placeholder='...'
          />
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="text"
            name="AACO5P"
            value={AACO5P}
            onChange={(e)=>setAACO5P(e.target.value)}
            id="AACO5P"
            placeholder='...'
          />
        </td>
      </tr>  
    </tbody>
  </table>
</div>

<div className="overflow-x-auto">
  <table className="table-auto w-full border-collapse border border-gray-300 text-sm text-gray-600">
    <thead>
      <tr>
        <th className="border border-gray-300 px-4 py-2">Question</th>
        <th className="border border-gray-300 px-4 py-2">OUI</th>
        <th className="border border-gray-300 px-4 py-2">NON</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border border-gray-300 px-4 py-2">
        Ancien système de chauffage
        </td>
        <div className='items-center justify-center text-center'><input
        className='items-center justify-center text-center'
            type="text"
            name="AA1Q1"
            value={AA1Q1}
            onChange={(e)=>setAA1Q1(e.target.value)}
            id="AA1Q1"
            placeholder='...'
          /></div>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">
        PAC utilisée pour le chauffage ?
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
          id='AAQ1oui'
            type="radio"
            name="AAQ1"
            value="⛝ OUI"
            checked={AAQ1 === "⛝ OUI"}
            onChange={(e) => setAAQ1(e.target.value)}
          />
          <label for="AAQ1oui">Oui</label>
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
          id='AAQ1non'
            type="radio"
            name="AAQ1"
            value="⛝ NON"
            checked={AAQ1 === "⛝ NON"}
            onChange={(e) => setAAQ1(e.target.value)}
          />
          <label for="AAQ1non">Non</label>
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">
        SCOP et COP sont-ils conformes à l’audit énergétique ?
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
          id='AAQ2oui'
            type="radio"
            name="AAQ2"
            value="⛝ OUI"
            checked={AAQ2 === "⛝ OUI"}
            onChange={(e) => setAAQ2(e.target.value)}
          />
          <label for="AAQ2oui">Oui</label>
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
          id='AAQ2non'
            type="radio"
            name="AAQ2"
            value="⛝ NON"
            checked={AAQ2 === "⛝ NON"}
            onChange={(e) => setAAQ2(e.target.value)}
          />
          <label for="AAQ2non">Non</label>
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">
        La puissance de la PAC est-elle conforme à l’audit ?
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
          id='AAQ3oui'
            type="radio"
            name="AAQ3"
            value="⛝ OUI"
            checked={AAQ3 === "⛝ OUI"}
            onChange={(e) => setAAQ3(e.target.value)}
          />
          <label for="AAQ3oui">Oui</label>
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
          id='AAQ3non'
            type="radio"
            name="AAQ3"
            value="⛝ NON"
            checked={AAQ3 === "⛝ NON"}
            onChange={(e) => setAAQ3(e.target.value)}
          />
          <label for="AAQ3non">Non</label>
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">
        Disjoncteur différentiel dédié à la PAC présent ?
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
          id='AAQ4oui'
            type="radio"
            name="AAQ4"
            value="⛝ OUI"
            checked={AAQ4 === "⛝ OUI"}
            onChange={(e) => setAAQ4(e.target.value)}
          />
          <label for="AAQ4oui">Oui</label>
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
          id='AAQ4non'
            type="radio"
            name="AAQ4"
            value="⛝ NON"
            checked={AAQ4 === "⛝ NON"}
            onChange={(e) => setAAQ4(e.target.value)}
          />
          <label for="AAQ4non">Non</label>
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">
        Les modes (chauffage, refroidissement, déshumidification)
fonctionnent-ils bien ?
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
          id='AAQ5oui'
            type="radio"
            name="AAQ5"
            value="⛝ OUI"
            checked={AAQ5 === "⛝ OUI"}
            onChange={(e) => setAAQ5(e.target.value)}
          />
          <label for="AAQ5oui">Oui</label>
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
          id='AAQ5non'
            type="radio"
            name="AAQ5"
            value="⛝ NON"
            checked={AAQ5 === "⛝ NON"}
            onChange={(e) => setAAQ5(e.target.value)}
          />
          <label for="AAQ5non">Non</label>
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">
        Raccords frigorifiques sans fuites ?

        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
          id='AAQ6oui'
            type="radio"
            name="AAQ6"
            value="⛝ OUI"
            checked={AAQ6 === "⛝ OUI"}
            onChange={(e) => setAAQ6(e.target.value)}
          />
          <label for="AAQ6oui">Oui</label>
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
          id='AAQ6non'
            type="radio"
            name="AAQ6"
            value="⛝ NON"
            checked={AAQ6 === "⛝ NON"}
            onChange={(e) => setAAQ6(e.target.value)}
          />
          <label for="AAQ6non">Non</label>
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">
        Températures entrée/sortie conformes au fabricant ?
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
          id='AAQ7oui'
            type="radio"
            name="AAQ7"
            value="⛝ OUI"
            checked={AAQ7 === "⛝ OUI"}
            onChange={(e) => setAAQ7(e.target.value)}
          />
          <label for="AAQ7oui">Oui</label>
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
          id='AAQ7non'
            type="radio"
            name="AAQ7"
            value="⛝ NON"
            checked={AAQ7 === "⛝ NON"}
            onChange={(e) => setAAQ7(e.target.value)}
          />
          <label for="AAQ7non">Non</label>
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">
        Pression du fluide frigorigène normale ?

        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
          id='AAQ8oui'
            type="radio"
            name="AAQ8"
            value="⛝ OUI"
            checked={AAQ8 === "⛝ OUI"}
            onChange={(e) => setAAQ8(e.target.value)}
          />
          <label for="AAQ8oui">Oui</label>
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
          id='AAQ8non'
            type="radio"
            name="AAQ8"
            value="⛝ NON"
            checked={AAQ8 === "⛝ NON"}
            onChange={(e) => setAAQ8(e.target.value)}
          />
          <label for="AAQ8non">Non</label>
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">
        Nombre de splits adapté aux locaux ?
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
          id='AAQ9oui'
            type="radio"
            name="AAQ9"
            value="⛝ OUI"
            checked={AAQ9 === "⛝ OUI"}
            onChange={(e) => setAAQ9(e.target.value)}
          />
          <label for="AAQ9oui">Oui</label>
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
          id='AAQ9non'
            type="radio"
            name="AAQ9"
            value="⛝ NON"
            checked={AAQ9 === "⛝ NON"}
            onChange={(e) => setAAQ9(e.target.value)}
          />
          <label for="AAQ9non">Non</label>
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">
        Réseaux hors volume chauffé bien isolés ?
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
          id='AAQ10oui'
            type="radio"
            name="AAQ10"
            value="⛝ OUI"
            checked={AAQ10 === "⛝ OUI"}
            onChange={(e) => setAAQ10(e.target.value)}
          />
          <label for="AAQ10oui">Oui</label>
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
          id='AAQ10non'
            type="radio"
            name="AAQ10"
            value="⛝ NON"
            checked={AAQ10 === "⛝ NON"}
            onChange={(e) => setAAQ10(e.target.value)}
          />
          <label for="AAQ10non">Non</label>
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">
        Coupe-circuit installé pour le groupe extérieur ?
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
          id='AAQ11oui'
            type="radio"
            name="AAQ11"
            value="⛝ OUI"
            checked={AAQ11 === "⛝ OUI"}
            onChange={(e) => setAAQ11(e.target.value)}
          />
          <label for="AAQ11oui">Oui</label>
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
          id='AAQ11non'
            type="radio"
            name="AAQ11"
            value="⛝ NON"
            checked={AAQ11 === "⛝ NON"}
            onChange={(e) => setAAQ11(e.target.value)}
          />
          <label for="AAQ11non">Non</label>
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">
        Évacuation des condensats sans fuites ni obstruction ?
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
          id='AAQ12oui'
            type="radio"
            name="AAQ12"
            value="⛝ OUI"
            checked={AAQ12 === "⛝ OUI"}
            onChange={(e) => setAAQ12(e.target.value)}
          />
          <label for="AAQ12oui">Oui</label>
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
          id='AAQ12non'
            type="radio"
            name="AAQ12"
            value="⛝ NON"
            checked={AAQ12 === "⛝ NON"}
            onChange={(e) => setAAQ12(e.target.value)}
          />
          <label for="AAQ12non">Non</label>
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">
        Tuyaux de réfrigérant bien isolés ?
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
          id='AAQ13oui'
            type="radio"
            name="AAQ13"
            value="⛝ OUI"
            checked={AAQ13 === "⛝ OUI"}
            onChange={(e) => setAAQ13(e.target.value)}
          />
          <label for="AAQ13oui">Oui</label>
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
          id='AAQ13non'
            type="radio"
            name="AAQ13"
            value="⛝ NON"
            checked={AAQ13 === "⛝ NON"}
            onChange={(e) => setAAQ13(e.target.value)}
          />
          <label for="AAQ13non">Non</label>
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">
        Température homogène et conforme à la consigne ?
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
          id='AAQ14oui'
            type="radio"
            name="AAQ14"
            value="⛝ OUI"
            checked={AAQ14 === "⛝ OUI"}
            onChange={(e) => setAAQ14(e.target.value)}
          />
          <label for="AAQ14oui">Oui</label>
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
          id='AAQ14non'
            type="radio"
            name="AAQ14"
            value="⛝ NON"
            checked={AAQ14 === "⛝ NON"}
            onChange={(e) => setAAQ14(e.target.value)}
          />
          <label for="AAQ14non">Non</label>
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">
        Zones humides bien isolées contre la corrosion ?
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
          id='AAQ15oui'
            type="radio"
            name="AAQ15"
            value="⛝ OUI"
            checked={AAQ15 === "⛝ OUI"}
            onChange={(e) => setAAQ15(e.target.value)}
          />
          <label for="AAQ15oui">Oui</label>
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
          id='AAQ1non'
            type="radio"
            name="AAQ15"
            value="⛝ NON"
            checked={AAQ15 === "⛝ NON"}
            onChange={(e) => setAAQ15(e.target.value)}
          />
          <label for="AAQ15non">Non</label>
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">
        Conduits d’air bien isolés (notamment en zones non chauffées) ?
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
          id='AAQ16oui'
            type="radio"
            name="AAQ16"
            value="⛝ OUI"
            checked={AAQ16 === "⛝ OUI"}
            onChange={(e) => setAAQ16(e.target.value)}
          />
          <label for="AAQ16oui">Oui</label>
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
          id='AAQ16non'
            type="radio"
            name="AAQ16"
            value="⛝ NON"
            checked={AAQ16 === "⛝ NON"}
            onChange={(e) => setAAQ16(e.target.value)}
          />
          <label for="AAQ16non">Non</label>
        </td>
      </tr>
      
    </tbody>
  </table>
</div>



{/* AIR/EAU */}



<div>
    <h4 className='text-center items-center text-white font-bold border border-solid bg-orange-700'>Pompe à chaleur - AIR/EAU </h4>
</div>
<div className="overflow-x-auto">
  <table className="table-auto w-full border-collapse border border-gray-300 text-sm text-gray-600">
    <thead>
      <tr>
        <th className="border border-gray-300 px-4 py-2">Marque</th>
        <th className="border border-gray-300 px-4 py-2">Référence</th>
        <th className="border border-gray-300 px-4 py-2">COP</th>
        <th className="border border-gray-300 px-4 py-2">Puissance nominal (kW)</th>
        <th className="border border-gray-300 px-4 py-2">Quantité</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="text"
            name="AEmarqu1e"
            value={AEmarqu1e}
            onChange={(e)=>setAEmarqu1e(e.target.value)}
            id="AEmarqu1e"
            placeholder='...'
          />
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="text"
            name="AEreferenc1e"
            value={AEreferenc1e}
            onChange={(e)=>setAEreferenc1e(e.target.value)}
            id="AEreferenc1e"
            placeholder='...'
          />
        </td>        
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="text"
            name="AECO1P"
            value={AECO1P}
            onChange={(e)=>setAECO1P(e.target.value)}
            id="AECO1P"
            placeholder='...'
          />
        </td>        
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="text"
            name="AEpuissancenomina1l"
            value={AEpuissancenomina1l}
            onChange={(e)=>setAEpuissancenomina1l(e.target.value)}
            id="AEpuissancenomina1l"
            placeholder='...'
          />
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="text"
            name="AEnomberuni1t1"
            value={AEnomberuni1t1}
            onChange={(e)=>setAEnomberuni1t1(e.target.value)}
            id="AEnomberuni1t1"
            placeholder='...'
          />
        </td>        
      </tr> 

      <tr>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="text"
            name="AEmarqu2e"
            value={AEmarqu2e}
            onChange={(e)=>setAEmarqu2e(e.target.value)}
            id="AEmarqu2e"
            placeholder='...'
          />
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="text"
            name="AEreferenc2e"
            value={AEreferenc2e}
            onChange={(e)=>setAEreferenc2e(e.target.value)}
            id="AEreferenc2e"
            placeholder='...'
          />
        </td>            
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="text"
            name="AECO2P"
            value={AECO2P}
            onChange={(e)=>setAECO2P(e.target.value)}
            id="AECO2P"
            placeholder='...'
          />
        </td>    
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="text"
            name="AEpuissancenomina2l"
            value={AEpuissancenomina2l}
            onChange={(e)=>setAEpuissancenomina2l(e.target.value)}
            id="AEpuissancenomina2l"
            placeholder='...'
          />
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="text"
            name="AEnomberuni2t1"
            value={AEnomberuni2t1}
            onChange={(e)=>setAEnomberuni2t1(e.target.value)}
            id="AEnomberuni2t1"
            placeholder='...'
          />
        </td>        
      </tr>       

      <tr>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="text"
            name="AEmarqu3e"
            value={AEmarqu3e}
            onChange={(e)=>setAEmarqu3e(e.target.value)}
            id="AEmarqu3e"
            placeholder='...'
          />
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="text"
            name="AEreferenc3e"
            value={AEreferenc3e}
            onChange={(e)=>setAEreferenc3e(e.target.value)}
            id="AEreferenc3e"
            placeholder='...'
          />
        </td>        
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="text"
            name="AECO3P"
            value={AECO3P}
            onChange={(e)=>setAECO3P(e.target.value)}
            id="AECO3P"
            placeholder='...'
          />
        </td>        
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="text"
            name="AEpuissancenomina3l"
            value={AEpuissancenomina3l}
            onChange={(e)=>setAEpuissancenomina3l(e.target.value)}
            id="AEpuissancenomina3l"
            placeholder='...'
          />
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="text"
            name="AEnomberuni3t1"
            value={AEnomberuni3t1}
            onChange={(e)=>setAEnomberuni3t1(e.target.value)}
            id="AEnomberuni3t1"
            placeholder='...'
          />
        </td>
        
      </tr>  

      <tr>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="text"
            name="AEmarqu4e"
            value={AEmarqu4e}
            onChange={(e)=>setAEmarqu4e(e.target.value)}
            id="AEmarqu4e"
            placeholder='...'
          />
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="text"
            name="AEreferenc4e"
            value={AEreferenc4e}
            onChange={(e)=>setAEreferenc4e(e.target.value)}
            id="AEreferenc4e"
            placeholder='...'
          />
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="text"
            name="AECO4P"
            value={AECO4P}
            onChange={(e)=>setAECO4P(e.target.value)}
            id="AECO4P"
            placeholder='...'
          />
        </td>        
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="text"
            name="AEpuissancenomina4l"
            value={AEpuissancenomina4l}
            onChange={(e)=>setAEpuissancenomina4l(e.target.value)}
            id="AEpuissancenomina4l"
            placeholder='...'
          />
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="text"
            name="AEnomberuni4t1"
            value={AEnomberuni4t1}
            onChange={(e)=>setAEnomberuni4t1(e.target.value)}
            id="AEnomberuni4t1"
            placeholder='...'
          />
        </td>
      </tr>  

      <tr>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="text"
            name="AEmarqu5e"
            value={AEmarqu5e}
            onChange={(e)=>setAEmarqu5e(e.target.value)}
            id="AEmarqu5e"
            placeholder='...'
          />
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="text"
            name="AEreferenc5e"
            value={AEreferenc5e}
            onChange={(e)=>setAEreferenc5e(e.target.value)}
            id="AEreferenc5e"
            placeholder='...'
          />
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="text"
            name="AECO5P"
            value={AECO5P}
            onChange={(e)=>setAECO5P(e.target.value)}
            id="AECO5P"
            placeholder='...'
          />
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="text"
            name="AEpuissancenomina5l"
            value={AEpuissancenomina5l}
            onChange={(e)=>setAEpuissancenomina5l(e.target.value)}
            id="AEpuissancenomina5l"
            placeholder='...'
          />
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="text"
            name="AEnomberuni5t1"
            value={AEnomberuni5t1}
            onChange={(e)=>setAEnomberuni5t1(e.target.value)}
            id="AEnomberuni5t1"
            placeholder='...'
          />
        </td>
      </tr>  
    </tbody>
  </table>
</div>
<div className="overflow-x-auto">
  <table className="table-auto w-full border-collapse border border-gray-300 text-sm text-gray-600">
    <thead>
      <tr>
        <th className="border border-gray-300 px-4 py-2">Question</th>
        <th className="border border-gray-300 px-4 py-2">OUI</th>
        <th className="border border-gray-300 px-4 py-2">NON</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border border-gray-300 px-4 py-2">
        Ancien système de chauffage
        </td>
        <div className='items-center justify-center text-center'><input
        className='items-center justify-center text-center'
            type="text"
            name="AA1Q1"
            value={AA1Q1}
            onChange={(e)=>setAA1Q1(e.target.value)}
            id="AA1Q1"
            placeholder='...'
          /></div>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">
        PAC utilisée pour le chauffage ?
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="radio"
            name="AAQ1"
            value="OUI"
            checked={AAQ1 === "OUI"}
            onChange={(e) => setAAQ1(e.target.value)}
          />
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="radio"
            name="AAQ1"
            value="NON"
            checked={AAQ1 === "NON"}
            onChange={(e) => setAAQ1(e.target.value)}
          />
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">
        COP est-il conforme à l’audit énergétique ?
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="radio"
            name="AAQ2"
            value="OUI"
            checked={AAQ2 === "OUI"}
            onChange={(e) => setAAQ2(e.target.value)}
          />
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="radio"
            name="AAQ2"
            value="NON"
            checked={AAQ2 === "NON"}
            onChange={(e) => setAAQ2(e.target.value)}
          />
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">
        La puissance de la PAC est-elle conforme à l’audit ?
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="radio"
            name="AAQ3"
            value="OUI"
            checked={AAQ3 === "OUI"}
            onChange={(e) => setAAQ3(e.target.value)}
          />
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="radio"
            name="AAQ3"
            value="NON"
            checked={AAQ3 === "NON"}
            onChange={(e) => setAAQ3(e.target.value)}
          />
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">
        Le taux de couverture (déperdition/puissance PAC)*100 est-il correct ?
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="radio"
            name="AAQ4"
            value="OUI"
            checked={AAQ4 === "OUI"}
            onChange={(e) => setAAQ4(e.target.value)}
          />
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="radio"
            name="AAQ4"
            value="NON"
            checked={AAQ4 === "NON"}
            onChange={(e) => setAAQ4(e.target.value)}
          />
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">
        La PAC couvre-t-elle moins de 80 % des besoins (sous-dimensionnée)?
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="radio"
            name="AAQ5"
            value="OUI"
            checked={AAQ5 === "OUI"}
            onChange={(e) => setAAQ5(e.target.value)}
          />
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="radio"
            name="AAQ5"
            value="NON"
            checked={AAQ5 === "NON"}
            onChange={(e) => setAAQ5(e.target.value)}
          />
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">
        La PAC couvre-t-elle plus de 120 % des besoins (surdimensionnée) ?

        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="radio"
            name="AAQ6"
            value="OUI"
            checked={AAQ6 === "OUI"}
            onChange={(e) => setAAQ6(e.target.value)}
          />
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="radio"
            name="AAQ6"
            value="NON"
            checked={AAQ6 === "NON"}
            onChange={(e) => setAAQ6(e.target.value)}
          />
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">
        Le taux de couverture respecte-t-il les exigences BAR-TH-159 ?
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="radio"
            name="AAQ7"
            value="OUI"
            checked={AAQ7 === "OUI"}
            onChange={(e) => setAAQ7(e.target.value)}
          />
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="radio"
            name="AAQ7"
            value="NON"
            checked={AAQ7 === "NON"}
            onChange={(e) => setAAQ7(e.target.value)}
          />
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">
        Disjoncteur différentiel dédié à la PAC présent ?

        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="radio"
            name="AAQ8"
            value="OUI"
            checked={AAQ8 === "OUI"}
            onChange={(e) => setAAQ8(e.target.value)}
          />
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="radio"
            name="AAQ8"
            value="NON"
            checked={AAQ8 === "NON"}
            onChange={(e) => setAAQ8(e.target.value)}
          />
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">
        Les modes (chauffage, refroidissement, déshumidification) fonctionnent-ils bien ?
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="radio"
            name="AAQ9"
            value="OUI"
            checked={AAQ9 === "OUI"}
            onChange={(e) => setAAQ9(e.target.value)}
          />
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="radio"
            name="AAQ9"
            value="NON"
            checked={AAQ9 === "NON"}
            onChange={(e) => setAAQ9(e.target.value)}
          />
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">
        Les raccords hydrauliques (vannes, filtres, purgeurs) sont-ils bien faits et sans fuites ?
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="radio"
            name="AAQ10"
            value="OUI"
            checked={AAQ10 === "OUI"}
            onChange={(e) => setAAQ10(e.target.value)}
          />
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="radio"
            name="AAQ10"
            value="NON"
            checked={AAQ10 === "NON"}
            onChange={(e) => setAAQ10(e.target.value)}
          />
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">
        Températures entrée/sortie conformes au fabricant ?
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="radio"
            name="AAQ11"
            value="OUI"
            checked={AAQ11 === "OUI"}
            onChange={(e) => setAAQ11(e.target.value)}
          />
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="radio"
            name="AAQ11"
            value="NON"
            checked={AAQ11 === "NON"}
            onChange={(e) => setAAQ11(e.target.value)}
          />
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">
        Réseaux hors volume chauffé bien isolés ?
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="radio"
            name="AAQ12"
            value="OUI"
            checked={AAQ12 === "OUI"}
            onChange={(e) => setAAQ12(e.target.value)}
          />
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="radio"
            name="AAQ12"
            value="NON"
            checked={AAQ12 === "NON"}
            onChange={(e) => setAAQ12(e.target.value)}
          />
        </td>
      </tr>
      
    </tbody>
  </table>
</div>


{/* Chauffe-Eau Thermodynamique */}

{/* 
<div className='text-center items-center text-white font-bold border border-solid bg-orange-700' >
    <h4>Chauffe-Eau Thermodynamique</h4>
</div>
<div className="overflow-x-auto">
  <table className="table-auto w-full border-collapse border border-gray-300 text-sm text-gray-600">
    <thead>
      <tr>
        <th className="border border-gray-300 px-4 py-2">Question</th>
        <th className="border border-gray-300 px-4 py-2">OUI</th>
        <th className="border border-gray-300 px-4 py-2">NON</th>
      </tr>
    </thead>
    <tbody>

    
      <tr>
        <td className="border border-gray-300 px-4 py-2">Type de Chauffe-Eau Thermodynamique</td>
        <div ><input
        className='items-center justify-center text-center'
            type="text"
            name="Q3"
            value={Q3}
            onChange={(e)=>setQ3(e.target.value)}
            id="Q3"
            placeholder='...'
          /></div>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">
        Marque du chauffe-eau installé
        </td>
        <div ><input
        className='items-center justify-center text-center'
            type="text"
            name="Q4"
            value={Q4}
            onChange={(e)=>setQ4(e.target.value)}
            id="Q4"
            placeholder='...'
          /></div>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">
        Référence
        </td>
        <div ><input
        className='items-center justify-center text-center'
            type="text"
            name="Q5"
            value={Q5}
            onChange={(e)=>setQ5(e.target.value)}
            id="Q5"
            placeholder='...'
          /></div>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">Coefficient de performance COP</td>
        <div ><input
        className='items-center justify-center text-center'
            type="text"
            name="Q3"
            value={Q3}
            onChange={(e)=>setQ3(e.target.value)}
            id="Q3"
            placeholder='...'
          /></div>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">
        Volume (L)
        </td>
        <div ><input
        className='items-center justify-center text-center'
            type="text"
            name="Q4"
            value={Q4}
            onChange={(e)=>setQ4(e.target.value)}
            id="Q4"
            placeholder='...'
          /></div>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">
        Quantité
        </td>
        <div ><input
        className='items-center justify-center text-center'
            type="text"
            name="Q5"
            value={Q5}
            onChange={(e)=>setQ5(e.target.value)}
            id="Q5"
            placeholder='...'
          /></div>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">
        Conforme à l’audit énergétique ? 
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="radio"
            name="Q6"
            value="OUI"
            checked={Q6 === "OUI"}
            onChange={(e) => setQ6(e.target.value)}
          />
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="radio"
            name="Q6"
            value="NON"
            checked={Q6 === "NON"}
            onChange={(e) => setQ6(e.target.value)}
          />
        </td>
      </tr>
    
      <tr>
        <td className="border border-gray-300 px-4 py-2">
        Installation selon les instructions fabricant ?
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="radio"
            name="Q7"
            value="OUI"
            checked={Q7 === "OUI"}
            onChange={(e) => setQ7(e.target.value)}
          />
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="radio"
            name="Q7"
            value="NON"
            checked={Q7 === "NON"}
            onChange={(e) => setQ7(e.target.value)}
          />
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">
        Disjoncteur et protections fonctionnels ?
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="radio"
            name="Q8"
            value="OUI"
            checked={Q8 === "OUI"}
            onChange={(e) => setQ8(e.target.value)}
          />
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="radio"
            name="Q8"
            value="NON"
            checked={Q8 === "NON"}
            onChange={(e) => setQ8(e.target.value)}
          />
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">
        Absence de fuites sur les raccordements hydrauliques ?
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="radio"
            name="Q9"
            value="OUI"
            checked={Q9 === "OUI"}
            onChange={(e) => setQ9(e.target.value)}
          />
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="radio"
            name="Q9"
            value="NON"
            checked={Q9 === "NON"}
            onChange={(e) => setQ9(e.target.value)}
          />
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">
        Groupe de sécurité évacue correctement ?
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="radio"
            name="Q10"
            value="OUI"
            checked={Q10 === "OUI"}
            onChange={(e) => setQ10(e.target.value)}
          />
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="radio"
            name="Q10"
            value="NON"
            checked={Q10 === "NON"}
            onChange={(e) => setQ10(e.target.value)}
          />
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">
        Paramètres conformes à l’audit ?
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="radio"
            name="Q11"
            value="OUI"
            checked={Q11 === "OUI"}
            onChange={(e) => setQ11(e.target.value)}
          />
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="radio"
            name="Q11"
            value="NON"
            checked={Q11 === "NON"}
            onChange={(e) => setQ11(e.target.value)}
          />
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">
        Isolation thermique en bon état ?
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="radio"
            name="Q12"
            value="OUI"
            checked={Q12 === "OUI"}
            onChange={(e) => setQ12(e.target.value)}
          />
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="radio"
            name="Q12"
            value="NON"
            checked={Q12 === "NON"}
            onChange={(e) => setQ12(e.target.value)}
          />
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">
        Ballon fixé et stable ?
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="radio"
            name="Q13"
            value="OUI"
            checked={Q13 === "OUI"}
            onChange={(e) => setQ13(e.target.value)}
          />
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="radio"
            name="Q13"
            value="NON"
            checked={Q13 === "NON"}
            onChange={(e) => setQ13(e.target.value)}
          />
        </td>
      </tr>
      
    </tbody>
  </table>
</div>
<br></br>
<div>
          <label htmlFor="img" className={`w-full h-[180px] flex rounded text-[#404040] gap-2 justify-center items-center cursor-pointer border-2 border-dashed`}>
            
              <img src={''} className='w-full h-[240px]' alt='' /> : <div className='flex justify-center items-center flex-col gap-y-2'>
              <span className='text-2xl'><MdCloudUpload/></span>
              <span>Select Image</span>
            </div>
            
          </label>
          <input  onChange={(e) => setQ13(e.target.value)} className='hidden' type="file" id='img' />
        </div> */}

          

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