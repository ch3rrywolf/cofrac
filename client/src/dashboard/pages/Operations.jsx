import React, { useContext, useState, useEffect } from 'react';
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import axios from 'axios';
import { base_url } from '../config/config';
import storeContext from '../../context/storeContext';

const Operations = () => {
  const { store } = useContext(storeContext);

  const [operations, setOperations] = useState([]);
  const [allOperations, setAllOperations] = useState([]);
  const [parPage, setParPage] = useState(5);
  const [pages, setPages] = useState(0);
  const [page, setPage] = useState(1);

  const get_operations = async () => {
    try {
      const { data } = await axios.get(`${base_url}/api/operations`, {
        headers: { 'Authorization': `Bearer ${store.token}` },
      });
      if (data && data.operations) {
        setAllOperations(data.operations);
        setOperations(data.operations);
      } else {
        console.error("No operations found in the response");
      }
    } catch (error) {
      console.error("Error fetching operations:", error);
    }
  };

  useEffect(() => {
    get_operations();
  }, []);

  useEffect(() => {
    if (operations.length > 0) {
      setPages(Math.ceil(operations.length / parPage));
    } else {
      setPages(0);
    }
  }, [operations, parPage]);

  const handleTypeFilter = (e) => {
    const value = e.target.value.trim();
    if (value) {
      const filtered = allOperations.filter((op) => op.status === value);
      setOperations(filtered);
    } else {
      setOperations(allOperations);
    }
    setPage(1);
    setParPage(5);
  };

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    const filtered = allOperations.filter((op) =>
      op.operationName.toLowerCase().includes(query)
    );
    setOperations(filtered);
    setPage(1);
  };

  return (
    <div>
      <div className="flex justify-between p-4">
        <h2 className="text-xl font-medium">Opérations</h2>
        <Link
          to="/dashboard/operations/add"
          className="px-3 py-2 bg-purple-500 rounded text-white hover:bg-purple-600"
        >
          Ajouter Opération
        </Link>
      </div>
      <div className="px-4 py-3 flex gap-x-3">
        <input
          type="text"
          placeholder="Rechercher"
          className="px-3 py-2 rounded-md outline-none border border-gray-300 focus:border-green-500"
          onChange={handleSearch}
        />
      </div>
      <div className="relative overflow-y-auto p-4">
        <table className="w-full text-sm text-left text-slate-600">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th className="px-7 py-3">Intitulé</th>
              <th className="px-7 py-3">Limites Prestation</th>
              <th className="px-7 py-3">Prix Unitaire</th>
              <th className="px-7 py-3">TVA</th>
              <th className="px-7 py-3">Durée d’intervention</th>
              <th className="px-7 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {operations.length > 0 ? (
              operations
                .slice((page - 1) * parPage, page * parPage)
                .map((operation, index) => (
                  <tr key={operation._id || index} className="bg-white border-b">
                    <td className="px-6 py-4">{operation.operationName}</td>
                    <td className="px-6 py-4">{'≤'}{operation.limitPres}</td>
                    <td className="px-6 py-4">{operation.prixUnit} m²</td>
                    <td className="px-6 py-4">{operation.tVa}%</td>
                    <td className="px-6 py-4">{operation.dureeInter} h</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-x-4">
                        {store?.userInfo?.role === 'admin' && (
                          <>
                            <Link
                              to={`/dashboard/operations/edit/${operation._id}`}
                              className="p-2 bg-yellow-500 rounded hover:shadow-lg hover:shadow-yellow-500/50"
                              aria-label="Edit Operation"
                            >
                              <FaEdit />
                            </Link>
                            <button
                              className="p-2 bg-red-500 rounded hover:shadow-lg hover:shadow-red-500/50"
                              aria-label="Delete Operation"
                            >
                              <FaTrash />
                            </button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-4">
                  Aucune opération trouvée.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-end px-10 gap-x-3 text-slate-600">
                      <div className="flex gap-x-3 justify-center items-center">
                          <p className="px-4 py-3 font-semibold text-sm">
                          Opération par Page
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
                          {(page - 1) * parPage + 1}/{operations.length} - of {pages}
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

export default Operations;
