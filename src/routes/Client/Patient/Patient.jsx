import { useLocation } from 'react-router-dom'
import {
  CLIENT_DASHBOARD_LINK,
  CLIENT_AVAILABLE_SCHEDULES_LINK,
  CLIENT_DOCTORS_LINK,
  CLIENT_TRANSACTIONS_LINK,
} from '../../../services/constants/links'
import ClientPatientDashboard from './ClientPatientDashboard'
import ClientPatientAvailableSchedules from './ClientPatientAvailableSchedules'

const Patient = () => {
  const location = useLocation()

  switch (location.pathname) {
    case CLIENT_DASHBOARD_LINK:
      return <ClientPatientDashboard />
    case CLIENT_AVAILABLE_SCHEDULES_LINK:
      return <ClientPatientAvailableSchedules />
  }
}

export default Patient
