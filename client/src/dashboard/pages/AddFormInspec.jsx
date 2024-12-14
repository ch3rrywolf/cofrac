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
    const [Q11,setQ11] = useState('')
    const [Q12,setQ12] = useState('')
    const [Q13,setQ13] = useState('')
    const [Q14,setQ14] = useState('')
    const [Q15,setQ15] = useState('')
    const [Q16,setQ16] = useState('')
    const [Q17,setQ17] = useState('')
    const [Q18,setQ18] = useState('')
    const [Q19,setQ19] = useState('')
    const [email,setEmail] = useState('')

    const data = {Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10, Q11, Q12, Q13, Q14, Q15, Q16, Q17, Q18, Q19, email}

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
                        setQ11('');
                        setQ12('');
                        setQ13('');
                        setQ14('');
                        setQ15('');
                        setQ16('');
                        setQ17('');
                        setQ18('');
                        setQ19('');
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
          Bâtiment résidentiel collectif existant de plus de 2 ans à la date d’engagement de l’opération ?
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="radio"
            name="Q1"
            value="OUI"
          />
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="radio"
            name="Q1"
            value="NON"
          />
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
            type="radio"
            name="Q2"
            value="OUI"
          />
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="radio"
            name="Q2"
            value="NON"
          />
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">Choix du scénario</td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="radio"
            name="Q3"
            value="OUI"
          />
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="radio"
            name="Q3"
            value="NON"
          />
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">
        Surface habitable prise en compte dans l’audit du bâtiment residentiel collectif rénovée (m²)
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="radio"
            name="Q4"
            value="OUI"
          />
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="radio"
            name="Q4"
            value="NON"
          />
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">
        Surface habitable mesurée (m²) :
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="radio"
            name="Q5"
            value="OUI"
          />
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="radio"
            name="Q5"
            value="NON"
          />
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">
        Il est constaté un écart de surface habitable de plus de 10% ? (écart = (surface déclarée-surface mesurée) /surface mesurée *100)
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="radio"
            name="Q6"
            value="OUI"
          />
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="radio"
            name="Q6"
            value="NON"
          />
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">
        Choix du scénario
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="radio"
            name="Q7"
            value="OUI"
          />
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="radio"
            name="Q7"
            value="NON"
          />
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">
        Le prestataire ayant réalisé l’étude énergétique a-t-il proposé un scénario BBC:
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="radio"
            name="Q8"
            value="OUI"
          />
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="radio"
            name="Q8"
            value="NON"
          />
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">
        Le cep projet est ≤à 110 kWh/m² par an ?
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="radio"
            name="Q9"
            value="OUI"
          />
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="radio"
            name="Q9"
            value="NON"
          />
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">
        La consommation conventionnelle annuelle en énergie primaire après travaux, rapportée à la surface habitable du bâtiment, est inférieur à 331 kWh/(m².an)
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="radio"
            name="Q10"
            value="OUI"
          />
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="radio"
            name="Q10"
            value="NON"
          />
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">
        kgeqCO2/m².an, sont inférieures ou égales à la valeur initiale de ces émissions avant travaux :
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="radio"
            name="Q11"
            value="OUI"
          />
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="radio"
            name="Q11"
            value="NON"
          />
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">
        L’audit énergétique ne prend en compte que les installations de chauffage fixes


        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="radio"
            name="Q12"
            value="OUI"
          />
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="radio"
            name="Q12"
            value="NON"
          />
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">
        Les équipements de production de chaleur ou d’ECS installés utilisent plus de 50 % d’ENR ?

        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="radio"
            name="Q13"
            value="OUI"
          />
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="radio"
            name="Q13"
            value="NON"
          />
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">
        L’audit énergétique a été réalisé à l’aide d’un logiciel répondant aux exigences de la fiche BAR-TH-145

        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="radio"
            name="Q14"
            value="OUI"
          />
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="radio"
            name="Q14"
            value="NON"
          />
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">
        L’audit énergétique pris en compte pour la réalisation des travaux dispose d’un avis satisfaisant

        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="radio"
            name="Q15"
            value="OUI"
          />
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="radio"
            name="Q15"
            value="NON"
          />
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">
        conventionnelles en énergie primaire et en énergie finale avant et après l’opération

        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="radio"
            name="Q16"
            value="OUI"
          />
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="radio"
            name="Q16"
            value="NON"
          />
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">
        Le niveau de confort thermique après travaux est meilleur qu’avant les travaux ?
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="radio"
            name="Q17"
            value="OUI"
          />
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="radio"
            name="Q17"
            value="NON"
          />
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">
        Les changements d’équipements de chauffage ou de production d’eau chaude sanitaire le cas échéant préconisés, hors raccordement à un réseau de chaleur, ne conduisent : a) Ni à l'installation d'équipements de chauffage ou de production d'eau chaude sanitaire consommant majoritairement du charbon, du fioul ou du gaz ; b) Ni à une hausse des émissions de gaz à effet de serre.

        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="radio"
            name="Q18"
            value="OUI"
          />
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="radio"
            name="Q18"
            value="NON"
          />
        </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">
        chauffage et d’eau chaude sanitaire du bâtiment après travaux calculé selon les modalités définies à l’annexe IV-1 de l’arrêté du 29 décembre 2014 modifié relatif aux modalités d’application du dispositif des certificats d’économies d’énergie correspond à celui utilisé pour le calcul du montant de CEE ; il vérifie, notamment dans le cas où une pompe à chaleur est installée, que le COP saisonnier retenu pour le calcul de ce taux est conforme aux indications du fournisseur ;
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="radio"
            name="Q19"
            value="OUI"
          />
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            type="radio"
            name="Q19"
            value="NON"
          />
        </td>
      </tr>
    </tbody>
  </table>
</div>


          <div>
            <h4 className='text-center items-center text-red-400'>Chauffe-Eau Thermodynamique </h4>
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