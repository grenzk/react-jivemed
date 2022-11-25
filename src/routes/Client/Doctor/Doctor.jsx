import { useLocation } from 'react-router-dom'
import {
  CLIENT_SCHEDULES_LINK,
  CLIENT_APPOINTMENTS_LINK,
  CLIENT_PATIENTS_LINK,
} from '../../../services/constants/links'
import ClientDoctorSchedule from './ClientDoctorSchedule'
import ClientDoctorAppointments from './ClientDoctorAppointments'
import ClientDoctorPatients from './ClientDoctorPatients'
import Error from '../../Error'

const Doctor = ({ user }) => {
  const location = useLocation()

  switch (location.pathname) {
    case CLIENT_SCHEDULES_LINK:
      return <ClientDoctorSchedule />
    case CLIENT_APPOINTMENTS_LINK:
      return <ClientDoctorAppointments user={user} />
    case CLIENT_PATIENTS_LINK:
      return <ClientDoctorPatients />
    default:
      return <Error />
  }
}

export default Doctor
