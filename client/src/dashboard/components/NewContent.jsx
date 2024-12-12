import React, {useContext, useState, useEffect} from 'react'
import {FaEye, FaEdit, FaTrash} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import axios from 'axios'
import {base_url} from '../config/config'
import storeContext from '../../context/storeContext'

const NewContent = () => {
    const { store } = useContext(storeContext);
    const [inspections, setInspections] = useState([]); // Default to an empty array
    const [allData, setAllData] = useState([]);

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
            setAllData(data.news); 
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

    return (
        <div>
            <div className="px-4 py-3 flex gap-x-3">
                <select className="px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10">
                    <option value="">===select type===</option>
                    <option value="">Généré</option>
                    <option value="">En cours</option>
                    <option value="">Cloturé</option>
                    <option value="">Annulé</option>
                </select>
                <input
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
                                        <td className="px-6 py-4">
                                            <span className="px-2 py-[2px] bg-green-100 text-green-800 rounded-lg text-xs cursor-pointer">
                                                {n.status}
                                            </span>
                                        </td>
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
                                                <Link className="p-[6px] bg-yellow-500 rounded hover:shadow-lg hover:shadow-yellow-500/50">
                                                    <FaEdit />
                                                </Link>
                                                <div className="p-[6px] bg-red-500 rounded hover:shadow-lg hover:shadow-red-500/50">
                                                    <FaTrash />
                                                </div>
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
                <p className="px-6 py-3 font-semibold text-sm">6/22 - of 5</p>
                <div className="flex items-center gap-x-3">
                    <IoIosArrowBack className="w-5 h-5 cursor-pointer" />
                    <IoIosArrowForward className="w-5 h-5 cursor-pointer" />
                </div>
            </div>
        </div>
    );
};

export default NewContent;
