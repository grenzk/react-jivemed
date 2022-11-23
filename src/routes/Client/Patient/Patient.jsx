import { useLocation } from 'react-router-dom'
import {
  CLIENT_DASHBOARD_LINK,
  CLIENT_DOCTORS_LINK,
  CLIENT_TRANSACTIONS_LINK,
  CLIENT_AVAILABLE_SCHEDULES_LINK,
} from '../../../services/constants/links'

const Patient = () => {
  const location = useLocation()

  switch (location.pathname) {
  }
}

export default Patient
