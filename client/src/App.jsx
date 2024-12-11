import { useState } from 'react'
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

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<ProtectDashboard />} >
        <Route path='' element={<MainLayout />} >
          <Route path='' element={<Navigate to='/dashboard/admin' />} />
          <Route path='upable-access' element={<Unable/>} />
          <Route path='inspections' element={<Inspections/>} />
          <Route path='profile' element={<Profile/>} />
          <Route path='' element={<ProtectRole role='admin' />} >
            <Route path='admin' element={<AdminIndex />} />
            <Route path='inspecteurs/add' element={<AddInspecteur />} />
            <Route path='inspecteurs' element={<Inspecteurs />} />
          </Route>
        </Route>
        </Route>
      </Routes>
    </BrowserRouter>    
  )
}

export default App
