import { useLocation } from 'react-router-dom'
import {
  CLIENT_DASHBOARD_LINK,
  CLIENT_DOCTORS_LINK,
  CLIENT_PATIENTS_LINK,
  CLIENT_DEPARTMENTS_LINK,
} from '../../../services/constants/links'
import ClientAdminDashboard from './ClientAdminDashboard'
import ClientAdminDoctors from './ClientAdminDoctors'
import ClientAdminPatients from './ClientAdminPatients'
import ClientAdminDepartments from './ClientAdminDepartments'

const Admin = () => {
  const location = useLocation()

  switch (location.pathname) {
    case CLIENT_DASHBOARD_LINK:
      return <ClientAdminDashboard />
    case CLIENT_DOCTORS_LINK:
      return <ClientAdminDoctors />
    case CLIENT_PATIENTS_LINK:
      return <ClientAdminPatients />
    case CLIENT_DEPARTMENTS_LINK:
      return <ClientAdminDepartments />
  }
}

export default Admin
