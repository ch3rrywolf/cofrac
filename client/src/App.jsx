import { useState, useContext } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from './dashboard/layout/MainLayout'
import AdminIndex from './dashboard/pages/AdminIndex'
import Login from './dashboard/pages/Login'
import ProtectDashboard from './middleware/ProtectDashboard'
import ProtectRole from './middleware/ProtectRole'
import Unable from './dashboard/pages/Unable'
import AddInspecteur from './dashboard/pages/AddInspecteur'
import Inspecteurs from './dashboard/pages/Inspecteurs'
import Inspections from './dashboard/pages/Inspections'
import Profile from './dashboard/pages/Profile'
import storeContext from './context/storeContext'
import InspecteurIndex from './dashboard/pages/InspecteurIndex'
import CreateInspection from './dashboard/pages/CreateInspection'
import Edit_inspections from './dashboard/pages/Edit_inspections'
import Operations from './dashboard/pages/Operations'
import AddOperation from './dashboard/pages/AddOperation'
import Clients from './dashboard/pages/Clients'
import AddClient from './dashboard/pages/AddClient'
import Contrats from './dashboard/pages/Contrats'
import AddContrat from './dashboard/pages/AddContrat'
import AddChantier from './dashboard/pages/AddChantier'
import Chantiers from './dashboard/pages/Chantiers'
import ChantierDetails from './dashboard/pages/ChantierDetails'
import AddFormInspec from './dashboard/pages/AddFormInspec'
import AddFormInspecAp from './dashboard/pages/AddFormInspecAp'
import AddFormInspecAv from './dashboard/pages/AddFormInspecAv'

function App() {
  const { store } = useContext(storeContext)

  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect root path to login */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        
        {/* Login route */}
        <Route path="/login" element={<Login />} />
        <Route path='/dashboard' element={<ProtectDashboard />} >
        <Route path='' element={<MainLayout />} >
          <Route path='' element={store.userInfo.role === 'admin' ? <Navigate to='/dashboard/admin' /> : <Navigate to='/dashboard/inspecteur' />} />
          <Route path='unable-access' element={<Unable/>} />
          <Route path='inspections' element={<Inspections/>} />
          <Route path='inspections/create' element={<CreateInspection />} />
          <Route path='profile' element={<Profile/>} />

          <Route path='' element={<ProtectRole role='admin' />} >
            <Route path='admin' element={<AdminIndex />} />
            <Route path='inspecteur/add' element={<AddInspecteur />} />
            <Route path='inspecteurs' element={<Inspecteurs />} />
            
            <Route path='inspections/edit/:inspections_id' element={<Edit_inspections />} />
            
            <Route path='operations' element={<Operations />} />
            <Route path='operations/add' element={<AddOperation />} />

            <Route path='clients' element={<Clients />} />
            <Route path='clients/add' element={<AddClient />} />

            <Route path='contrats' element={<Contrats />} />
            <Route path='contrats/add' element={<AddContrat />} />

            <Route path='chantiers' element={<Chantiers />} />
            <Route path='chantiers/add' element={<AddChantier />} />
            <Route path='chantiers/view/:chantiers_id' element={<ChantierDetails />} />
            <Route path='chantiers/form/apres/:chantiers_id' element={<AddFormInspec />} />
            <Route path='chantiers/form/ap/:chantiers_id' element={<AddFormInspecAp />} />
            <Route path='chantiers/form/av/:chantiers_id' element={<AddFormInspecAv />} />
            
          </Route>

          <Route path='' element={<ProtectRole role='inspecteur' />} >
            <Route path='inspecteur' element={<InspecteurIndex />} />
            <Route path='inspections/create' element={<CreateInspection />} />
            <Route path='inspections/edit/:inspections_id' element={<Edit_inspections />} />
          </Route>

        </Route>
        </Route>
      </Routes>
    </BrowserRouter>    
  )
}

export default App
