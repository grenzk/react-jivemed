import { useLocation } from 'react-router-dom'
import {
  CLIENT_DASHBOARD_LINK,
  CLIENT_APPOINTMENTS_LINK,
  CLIENT_PATIENTS_LINK,
} from '../../../services/constants/links'
import ClientDoctorDashboard from './ClientDoctorDashboard'

const Doctor = () => {
  const location = useLocation()

  switch (location.pathname) {
    case CLIENT_DASHBOARD_LINK:
      return <ClientDoctorDashboard />
    case CLIENT_APPOINTMENTS_LINK:
      return <ClientPatientAvailableSchedules />
    case CLIENT_PATIENTS_LINK:
      return <ClientPatientDoctors />
  }
}

export default Doctor
