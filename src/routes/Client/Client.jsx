import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/Client/Navbar'
import Admin from './Admin/Admin'
import Patient from './Patient/Patient'
import Doctor from './Doctor/Doctor'
import VerifyEmail from './VerifyEmail'
import { SH0W_CURRENT_USER_ENDPOINT } from '../../services/constants/endpoints'
import { CLIENT_DASHBOARD_LINK, VERIFY_EMAIL_LINK } from '../../services/constants/links'
import { axiosGet } from '../../services/utilities/axios'
import { headers } from '../../services/constants/headers'

const Client = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [isEmailVerified, setIsEmailVerified] = useState(false)
  const [user, setUser] = useState({})
  const [avatar, setAvatar] = useState('')
  const [role, setRole] = useState('')

  useEffect(() => {
    const urlPath = `/${window.location.pathname.split('/')[1]}`

    axiosGet(SH0W_CURRENT_USER_ENDPOINT, headers).then((response) => {
      if (response.status === 200) {
        const checkDoctorFee = (doctor_fee) => {
          if (Object.keys(doctor_fee).length !== 0) {
            return {
              ...doctor_fee,
              id: doctor_fee.id.toString(),
              user_id: doctor_fee.user_id.toString(),
            }
          }
        }

        displayUser({
          ...response.data,
          departments: [
            ...response.data.departments.map((department) => {
              return { ...department, id: department.id.toString() }
            }),
          ],
          doctor_fee: checkDoctorFee({ ...response.data.doctor_fee }),
          role: { ...response.data.role, id: response.data.role.id.toString() },
          user: { ...response.data.user, id: response.data.user.id.toString() },
        })
        setRole(response.data.role.name)

        if (response.data.user.email_verified) {
          setIsEmailVerified(true)

          if (urlPath === VERIFY_EMAIL_LINK) {
            navigate(CLIENT_DASHBOARD_LINK)
          }
        } else {
          setIsEmailVerified(false)
          navigate(VERIFY_EMAIL_LINK)
        }
      }
    })
  }, [])

  const displayUser = (user) => {
    setUser(user)
    setAvatar(`${user.user.first_name.charAt(0)}${user.user.last_name.charAt(0)}`)
    setEmail(user.user.email)
  }

  const displayPage = () => {
    switch (role) {
      case 'admin':
        return <Admin />
      case 'patient':
        return <Patient user={user} />
      case 'doctor':
        return <Doctor user={user} />
    }
  }

  const checkEmailVerified = () => {
    if (isEmailVerified) {
      return (
        <>
          <Navbar user={user} avatar={avatar} role={role} onDisplayUser={displayUser} />
          {displayPage()}
        </>
      )
    } else {
      return <VerifyEmail avatar={avatar} email={email} />
    }
  }

  return checkEmailVerified()
}

export default Client
