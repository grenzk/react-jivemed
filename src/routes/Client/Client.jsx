import { useState, useEffect } from 'react'
import Navbar from '../../components/Client/Navbar'
import Admin from './Admin/Admin'
import Patient from './Patient/Patient'
import Doctor from './Doctor/Doctor'

const Client = () => {
  const [role, setRole] = useState('')

  useEffect(() => {
    setRole('doctor')
  }, [])

  const displayPage = () => {
    switch (role) {
      case 'admin':
        return <Admin />
      case 'patient':
        return <Patient />
      case 'doctor':
        return <Doctor />
    }
  }

  return (
    <>
      <Navbar role={role} />
      {displayPage()}
    </>
  )
}

export default Client
