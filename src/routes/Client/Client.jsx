import { useState, useEffect } from 'react'
import Admin from './Admin/Admin'
import Patient from './Patient/Patient'
import Navbar from '../../components/Client/Navbar'

const Client = () => {
  const [role, setRole] = useState('patient')

  useEffect(() => {
    setRole('patient')
  }, [])

  const displayPage = () => {
    switch (role) {
      case 'admin':
        return <Admin />
      case 'patient':
        return <Patient />
    }
  }
  return (
    <>
      <Navbar />
      {displayPage()}
    </>
  )
}

export default Client
