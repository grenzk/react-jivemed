import {
  CLIENT_DASHBOARD_LINK,
  CLIENT_DOCTORS_LINK,
  CLIENT_PATIENTS_LINK,
  CLIENT_DEPARTMENTS_LINK,
  CLIENT_SCHEDULES_LINK,
  CLIENT_AVAILABLE_SCHEDULES_LINK,
  CLIENT_APPOINTMENTS_LINK,
  CLIENT_TRANSACTIONS_LINK,
} from './links'

export const adminNavLinks = [
  { link: CLIENT_DASHBOARD_LINK, label: 'Dashboard' },
  { link: CLIENT_DOCTORS_LINK, label: 'Doctors' },
  { link: CLIENT_PATIENTS_LINK, label: 'Patients' },
  { link: CLIENT_DEPARTMENTS_LINK, label: 'Departments' },
]

export const userNavLinks = [
  { link: CLIENT_APPOINTMENTS_LINK, label: 'Appointments' },
  { link: CLIENT_AVAILABLE_SCHEDULES_LINK, label: 'Available Schedules' },
  { link: CLIENT_DOCTORS_LINK, label: 'Doctors' },
  { link: CLIENT_TRANSACTIONS_LINK, label: 'Transactions' },
]

export const doctorNavLinks = [
  { link: CLIENT_APPOINTMENTS_LINK, label: 'Appointments' },
  { link: CLIENT_SCHEDULES_LINK, label: 'Schedules' },
]
