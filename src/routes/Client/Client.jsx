import { useState, useEffect } from 'react'
import Navbar from '../../components/Client/Navbar'
import Admin from './Admin/Admin'
import Patient from './Patient/Patient'
import Doctor from './Doctor/Doctor'
import { accessTokenCookie } from '../../services/constants/cookies'
import { getCookie } from '../../services/utilities/cookie'
import { axiosGet } from '../../services/utilities/axios'
import { SH0W_CURRENT_USER_ENDPOINT } from '../../services/constants/endpoints'
import VerifyEmail from './VerifyEmail'

const Client = () => {
  const accessToken = getCookie(accessTokenCookie)
  const headers = {
    'Access-Control-Allow-Origin': '*',
    Authorization: accessToken,
  }

  const [email, setEmail] = useState('')
  const [isEmailVerified, setIsEmailVerified] = useState(false)
  const [avatar, setAvatar] = useState('')
  const [role, setRole] = useState('')

  useEffect(() => {
    axiosGet(SH0W_CURRENT_USER_ENDPOINT, headers).then((response) => {
      if (response.status === 200) {
        setAvatar(`${response.data.user.first_name.charAt(0)}${response.data.user.last_name.charAt(0)}`)
        setEmail(response.data.user.email)
        setIsEmailVerified(response.data.user.email_verified)
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

  const checkEmailVerified = () => {
    if (isEmailVerified) {
      return (
        <>
          <Navbar avatar={avatar} role={role} />
          {displayPage()}
        </>
      )
    }
    return <VerifyEmail avatar={avatar} email={email} />
  }

  return checkEmailVerified()
}

export default Client
