import { useState, useEffect } from 'react'
import Navbar from '../../components/Client/Navbar'
import Admin from './Admin/Admin'
import Patient from './Patient/Patient'
import Doctor from './Doctor/Doctor'
import { accessTokenCookie } from '../../services/constants/cookies'
import { getCookie } from '../../services/utilities/cookie'
import { axiosGet } from '../../services/utilities/axios'
import { SH0W_CURRENT_USER_ENDPOINT } from '../../services/constants/endpoints'

const Client = () => {
  const accessToken = getCookie(accessTokenCookie)
  const headers = {
    'Access-Control-Allow-Origin': '*',
    Authorization: accessToken,
  }

  const [role, setRole] = useState('')

  useEffect(() => {
    axiosGet(SH0W_CURRENT_USER_ENDPOINT, headers).then((response) => {
      if (response.status === 200) {
        setRole(response.data.role.name)
      }
    })
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
