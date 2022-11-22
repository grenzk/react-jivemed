import { useLocation } from 'react-router-dom'
import { CLIENT_DASHBOARD_LINK } from '../../../services/constants/links'
import ClientAdminDashboard from './ClientAdminDashboard'

const Admin = () => {
  const location = useLocation()

  switch (location.pathname) {
    case CLIENT_DASHBOARD_LINK:
      return <ClientAdminDashboard />
  }
}

export default Admin
