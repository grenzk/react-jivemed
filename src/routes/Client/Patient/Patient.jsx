import { useLocation } from 'react-router-dom'
import {
  CLIENT_AVAILABLE_SCHEDULES_LINK,
  CLIENT_APPOINTMENTS_LINK,
  CLIENT_DOCTORS_LINK,
  CLIENT_TRANSACTIONS_LINK,
} from '../../../services/constants/links'
import ClientPatientAvailableSchedules from './ClientPatientAvailableSchedules'
import ClientPatientAppointments from './ClientPatientAppointments'
import ClientPatientDoctors from './ClientPatientDoctors'
import ClientPatientTransactions from './ClientPatientTransactions'
import Error from '../../Error'

const Patient = () => {
  const location = useLocation()

  switch (location.pathname) {
    case CLIENT_AVAILABLE_SCHEDULES_LINK:
      return <ClientPatientAvailableSchedules />
    case CLIENT_DOCTORS_LINK:
      return <ClientPatientDoctors />
    case CLIENT_APPOINTMENTS_LINK:
      return <ClientPatientAppointments />
    case CLIENT_TRANSACTIONS_LINK:
      return <ClientPatientTransactions />
    default:
      return <Error />
  }
}

export default Patient
