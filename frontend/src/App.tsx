import React from 'react'
import './App.css'
import { Layout } from './_components/Layout' 
import { LoginPage } from './_components/auth/LoginPage'

import { useLocation } from 'react-router-dom'
import { BrowserRouter, Route, Routes,Navigate } from 'react-router-dom'
import { RegisterPage } from './_components/auth/RegisterPage'

const RequireAuth = ({ children }: { children: React.ReactNode }) => {
  const token = localStorage.getItem("token")
  const location = useLocation()

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return children
}

export default function App() {


  
  return (
    <BrowserRouter>
      {/* Redirection de la racine "/" */}
      <Routes>
    

      <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<RegisterPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {/* Route protégée */}
      <Route
        path="/dashboard"
        element={
          <RequireAuth>
            <Layout />
          </RequireAuth>
        }
      />
      </Routes>
    </BrowserRouter>
    

  )

}

