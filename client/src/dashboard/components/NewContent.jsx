import React, {useContext, useState, useEffect} from 'react'
import {FaEye, FaEdit, FaTrash} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import axios from 'axios'
import {base_url} from '../config/config'
import toast from 'react-hot-toast'
import storeContext from '../../context/storeContext'

const NewContent = () => {
    const { store } = useContext(storeContext);
    const [inspections, setInspections] = useState([]); // Default to an empty array
    const [all_inspections, set_all_inspections] = useState([]);

    const [parPage, setParPage] = useState(5);
    const [pages, setPages] = useState(0);
    const [page, setPage] = useState(1);

    const get_inspections = async () => {
        try {
            const { data } = await axios.get(`${base_url}/api/inspections`, {
                headers: {
                    'Authorization': `Bearer ${store.token}`
                }
            });
    
            // Extract the correct array
            set_all_inspections(data.news); 
            setInspections(data.news); 
    
        } catch (error) {
            console.error("Error fetching inspections:", error);
        }
    };

    useEffect(() => {
        get_inspections();
    }, []);

    useEffect(() => {
        if (inspections?.length > 0) {
            const calculate_page = Math.ceil(inspections.length / parPage);
            setPages(calculate_page);
        }
    }, [inspections, parPage]);

    const type_filter = (e) => {
        if (e.target.value === '') {
            setInspections(all_inspections)
            setPage(1)
            setParPage(5)
        } else {
            const tempInspections = all_inspections.filter(n => n.status === e.target.value)
            setInspections(tempInspections)
            setPage(1)
            setParPage(5)
        }

    }

    const search_inspections = (e) => {

        const tempInspections = all_inspections.filter(n => n.title.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1)
        setInspections(tempInspections)
        setPage(1)
        setParPage(5)
    }
    const [res, set_res] = useState({
        id: '',
        loader: false
    })
    const update_status = async (status, inspections_id) => {
        try {
            set_res(
                {
                    id: inspections_id,
                    loader: true
                }
            )
            const { data } = await axios.put(`${base_url}/api/inspections/status-update/${inspections_id}`, { status }, {
                headers: {
                    'Authorization': `Bearer ${store.token}`
                }
            })
            set_res({
                id: '',
                loader: false
            })
            toast.success(data.message)
            get_inspections()
        } catch (error) {
            set_res({
                id: '',
                loader: false
            })
            console.log(error)
            toast.error(error.response.data.message)
        }
    }

    return (
        <div>
            <div className="px-4 py-3 flex gap-x-3">
                <select onChange={type_filter} className="px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10">
                    <option value="">===select status===</option>
                    <option value="Généré">Généré</option>
                    <option value="En cours">En cours</option>
                    <option value="Cloturé">Cloturé</option>
                    <option value="Annulé">Annulé</option>
                </select>
                <input
                    onChange={search_inspections}
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
                            <th className="px-7 py-3">Référence Chantier</th>
                            <th className="px-7 py-3">Client</th>
                            <th className="px-7 py-3">Opération</th>
                            <th className="px-7 py-3">Date d'affectation</th>
                            <th className="px-7 py-3">Date réalisée</th>
                            <th className="px-7 py-3">Inspecteur</th>
                            <th className="px-7 py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {inspections?.length > 0 &&
                            inspections
                                .slice((page - 1) * parPage, page * parPage)
                                .map((n, i) => (
                                    <tr key={i} className="bg-white border-b">
                                        {
                                            store?.userInfo?.role === 'admin' ? <td className="px-6 py-4">
                                            {
                                                n.status === 'Généré' && <span onClick={()=>update_status('Annulé',n._id)} className="px-2 py-[2px] bg-green-100 text-green-800 rounded-lg text-xs cursor-pointer">
                                                {n.status}
                                            </span>
                                            }
                                            {
                                                n.status === 'En cours' && <span onClick={()=>update_status('Généré',n._id)} className="px-2 py-[2px] bg-blue-100 text-blue-800 rounded-lg text-xs cursor-pointer">
                                                {res.loader && res.id === n._id ? 'Loaging...': n.status}</span>
                                            }
                                            {
                                                n.status === 'Cloturé' && <span onClick={()=>update_status('Généré',n._id)} className="px-2 py-[2px] bg-gray-100 text-gray-800 rounded-lg text-xs cursor-pointer">
                                                {res.loader && res.id === n._id ? 'Loaging...': n.status}
                                            </span>
                                            }
                                            {
                                                n.status === 'Annulé' && <span onClick={()=>update_status('Généré',n._id)} className="px-2 py-[2px] bg-red-100 text-red-800 rounded-lg text-xs cursor-pointer">
                                                {res.loader && res.id === n._id ? 'Loaging...': n.status}
                                            </span>
                                            }
                                        </td> : <td className="px-6 py-4">
                                            {
                                                n.status === 'Généré' && <span  className="px-2 py-[2px] bg-green-100 text-green-800 rounded-lg text-xs cursor-pointer">
                                                {res.loader && res.id === n._id ? 'Loaging...': n.status}
                                            </span>
                                            }
                                            {
                                                n.status === 'En cours' && <span  className="px-2 py-[2px] bg-blue-100 text-blue-800 rounded-lg text-xs cursor-pointer">
                                                {n.status}
                                            </span>
                                            }
                                            {
                                                n.status === 'Cloturé' && <span className="px-2 py-[2px] bg-gray-100 text-gray-800 rounded-lg text-xs cursor-pointer">
                                                {n.status}
                                            </span>
                                            }
                                            {
                                                n.status === 'Annulé' && <span  className="px-2 py-[2px] bg-red-100 text-red-800 rounded-lg text-xs cursor-pointer">
                                                {n.status}
                                            </span>
                                            }
                                        </td>
                                        }
                                        <td className="px-6 py-4">{i + 1}</td>
                                        <td className="px-6 py-4">{i + 2}</td>
                                        <td className="px-6 py-4">
                                            {n.title.slice(0, 15)}...
                                        </td>
                                        <td className="px-6 py-4">
                                            {n.operation}
                                        </td>
                                        <td className="px-6 py-4">
                                            {n.updateAt}
                                        </td>
                                        <td className="px-6 py-4">{n.date}</td>
                                        <td className="px-6 py-4">
                                            {n.inspecteurName}
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex justify-start items-center gap-x-4 text-white">
                                                <Link className="p-[6px] bg-green-500 rounded hover:shadow-lg hover:shadow-green-500/50">
                                                    <FaEye />
                                                </Link>
                                                {
                                                   store?.userInfo?.role === 'inspecteur' && <>
                                                   <Link to={`/dashboard/inspections/edit/${n._id}`} className="p-[6px] bg-yellow-500 rounded hover:shadow-lg hover:shadow-yellow-500/50">
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
                        Inspections par Page
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
                    {(page - 1) * parPage + 1}/{inspections.length} - of {pages}
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

export default NewContent;
