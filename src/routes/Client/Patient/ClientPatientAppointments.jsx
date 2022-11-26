import PatientAppointmentsTable from '../../../components/Client/Patient/Table/PatientAppointmentsTable'

const ClientPatientAppointments = ({ user }) => {
  return (
    <div>
      <PatientAppointmentsTable user={user} />
    </div>
  )
}

export default ClientPatientAppointments
