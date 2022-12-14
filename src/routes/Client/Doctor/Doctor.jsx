import { useLocation } from 'react-router-dom'
import { CLIENT_SCHEDULES_LINK, CLIENT_APPOINTMENTS_LINK } from '../../../services/constants/links'
import ClientDoctorSchedules from './ClientDoctorSchedules'
import ClientDoctorAppointments from './ClientDoctorAppointments'
import Error from '../../Error'

const Doctor = ({ user }) => {
  const location = useLocation()

  switch (location.pathname) {
    case CLIENT_SCHEDULES_LINK:
      return <ClientDoctorSchedules user={user} />
    case CLIENT_APPOINTMENTS_LINK:
      return <ClientDoctorAppointments user={user} />
    default:
      return <Error />
  }
}

export default Doctor
