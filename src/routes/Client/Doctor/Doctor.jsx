import { useLocation } from 'react-router-dom'
import {
  CLIENT_DASHBOARD_LINK,
  CLIENT_APPOINTMENTS_LINK,
  CLIENT_PATIENTS_LINK,
} from '../../../services/constants/links'
import ClientDoctorDashboard from './ClientDoctorDashboard'
import ClientDoctorAppointments from './ClientDoctorAppointments'
import ClientDoctorPatients from './ClientDoctorPatients'

const Doctor = () => {
  const location = useLocation()

  switch (location.pathname) {
    case CLIENT_DASHBOARD_LINK:
      return <ClientDoctorDashboard />
    case CLIENT_APPOINTMENTS_LINK:
      return <ClientDoctorAppointments />
    case CLIENT_PATIENTS_LINK:
      return <ClientDoctorPatients />
  }
}

export default Doctor
