import React, {useContext, useState, useEffect} from 'react'
import {FaEye, FaEdit, FaTrash} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import axios from 'axios'
import {base_url} from '../config/config'
import moment from 'moment'
import storeContext from '../../context/storeContext'

const Contrats = () => {
    const { store } = useContext(storeContext);
    const [contrats, setContrats] = useState([]); 
    const [all_contrats, set_all_contrats] = useState([]);

    const [parPage, setParPage] = useState(5);
    const [pages, setPages] = useState(0);
    const [page, setPage] = useState(1);

    const get_contrats = async () => {
        try {
            const { data } = await axios.get(`${base_url}/api/contrats`, {
                headers: {
                    'Authorization': `Bearer ${store.token}`
                }
            });
    
            set_all_contrats(data.contrats); 
            setContrats(data.contrats); 
    
        } catch (error) {
            console.error("Error fetching contrats:", error);
        }
    };

    useEffect(() => {
        get_contrats();
    }, []);

    useEffect(() => {
        if (contrats?.length > 0) {
            const calculate_page = Math.ceil(contrats.length / parPage);
            setPages(calculate_page);
        }
    }, [contrats, parPage]);

    const type_filter = (e) => {
        if (e.target.value === '') {
            setContrats(all_contrats)
            setPage(1)
            setParPage(5)
        } else {
            const tempContrats = all_contrats.filter(n => n.status === e.target.value)
            setContrats(tempContrats)
            setPage(1)
            setParPage(5)
        }

    }

    const search_contrats = (e) => {

        const tempContrats = all_contrats.filter(n => n.title.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1)
        setContrats(tempContrats)
        setPage(1)
        setParPage(5)
    }
    const [res, set_res] = useState({
        id: '',
        loader: false
    })
    

    return (
        <div className='bg-white rounded-md'>
            <div className='flex justify-between p-4'>
                    <h2 className='text-xl font-medium'>Contrats</h2>
                    <Link className='px-3 py-[6px] bg-purple-500 rounded-sm text-white hover:bg-purple-600' to='/dashboard/contrats/add'>Ajoute Contart</Link>
                  </div>
            <div className="px-4 py-3 flex gap-x-3">
                <select onChange={type_filter} className="px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10">
                    <option value="">===select status===</option>
                    <option value="Validé">Validé</option>
                    <option value="Non Validé">Non Validé</option>
                    <option value="Annulé">Annulé</option>
                </select>
                <input
                    onChange={search_contrats}
                    type="text"
                    placeholder="search"
                    className="px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10"
                />
            </div>
            <div className="relative overflow-y-auto p-4">
                <table className="w-full text-sm text-left text-slate-600">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th className="px-7 py-3">Etat</th>
                            <th className="px-7 py-3">Référence</th>
                            <th className="px-7 py-3">Titre</th>
                            <th className="px-7 py-3">Date de Début</th>
                            <th className="px-7 py-3">Date de Fin</th>
                            <th className="px-7 py-3">Intitulé Client</th>
                            {/* <th className="px-7 py-3">Document</th> */}
                            <th className="px-7 py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contrats?.length > 0 &&
                            contrats
                                .slice((page - 1) * parPage, page * parPage)
                                .map((n, i) => (
                                    <tr key={i} className="bg-white border-b">
                                        {
                                            store?.userInfo?.role === 'admin' ? <td className="px-6 py-4">
                                            {
                                                n.contratStatus === 'Validé' && <span  className="px-2 py-[2px] bg-green-100 text-green-800 rounded-lg text-xs cursor-pointer">
                                                {n.contratStatus}
                                            </span>
                                            }
                                            {
                                                n.contratStatus === 'Non Validé' && <span  className="px-2 py-[2px] bg-gray-100 text-gray-800 rounded-lg text-xs cursor-pointer">
                                                {res.loader && res.id === n._id ? 'Loaging...': n.contratStatus}
                                            </span>
                                            }
                                            {
                                                n.contratStatus === 'Annulé' && <span  className="px-2 py-[2px] bg-red-100 text-red-800 rounded-lg text-xs cursor-pointer">
                                                {res.loader && res.id === n._id ? 'Loaging...': n.contratStatus}
                                            </span>
                                            }
                                        </td> : <td className="px-6 py-4">
                                            {
                                                n.contratStatus === 'Validé' && <span  className="px-2 py-[2px] bg-green-100 text-green-800 rounded-lg text-xs cursor-pointer">
                                                {res.loader && res.id === n._id ? 'Loaging...': n.contratStatus}
                                            </span>
                                            }
                                            {
                                                n.contratStatus === 'Non Validé' && <span className="px-2 py-[2px] bg-gray-100 text-gray-800 rounded-lg text-xs cursor-pointer">
                                                {n.contratStatus}
                                            </span>
                                            }
                                            {
                                                n.contratStatus === 'Annulé' && <span  className="px-2 py-[2px] bg-red-100 text-red-800 rounded-lg text-xs cursor-pointer">
                                                {n.contratStatus}
                                            </span>
                                            }
                                        </td>
                                        }
                                        <td className="px-6 py-4">#{n._id}</td>
                                        <td className="px-6 py-4">
                                            {n.contratTitre}
                                        </td>
                                        <td className="px-6 py-4">
                                        {moment(n.dateContratDeb).format('YYYY-MM-DD')}
                                        </td>
                                        <td className="px-6 py-4">
                                        {moment(n.dateContratFin).format('YYYY-MM-DD')}
                                        </td>
                                        <td className="px-6 py-4">{n.clientName}</td>
                                        <td className="px-6 py-4">
                                            <div className="flex justify-start items-center gap-x-4 text-white">
                                                <Link className="p-[6px] bg-green-500 rounded hover:shadow-lg hover:shadow-green-500/50">
                                                    <FaEye />
                                                </Link>
                                                {
                                                   store?.userInfo?.role === 'admin' && <>
                                                   <Link to={`/dashboard/contrats/edit/${n._id}`} className="p-[6px] bg-yellow-500 rounded hover:shadow-lg hover:shadow-yellow-500/50">
                                                    <FaEdit />
                                                </Link>
                                                <div className="p-[6px] bg-red-500 rounded hover:shadow-lg hover:shadow-red-500/50">
                                                    <FaTrash />
                                                </div>
                                                   </> 
                                                }
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                    </tbody>
                </table>
            </div>
            <div className="flex items-center justify-end px-10 gap-x-3 text-slate-600">
                <div className="flex gap-x-3 justify-center items-center">
                    <p className="px-4 py-3 font-semibold text-sm">
                    Contrats par Page
                    </p>
                    <select 
                        value={parPage}
                        onChange={(e) => {setParPage(parseInt(e.target.value))
                            setPage(1)
                        }}
                        name=""
                        id=""
                        className="px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10"
                    >
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                    </select>
                </div>
                <p className='px-6 py-3 font-semibold text-sm'>
                    {(page - 1) * parPage + 1}/{contrats.length} - of {pages}
                </p>
                <div className='flex items-center gap-x-3'>
                    <IoIosArrowBack onClick={() => {
                        if (page > 1) setPage(page - 1)
                    }} className='w-5 h-5 cursor-pointer' />
                    <IoIosArrowForward onClick={() => {
                        if (page < pages) setPage(page + 1)
                    }} className='w-5 h-5 cursor-pointer' />
                </div>
            </div>
        </div>
    );
};

export default Contrats;
