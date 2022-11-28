import PatientTransactionsTable from '../../../components/Client/Patient/Table/PatientTransactionsTable'

const ClientPatientTransactions = ({ user }) => {
  return (
    <div>
      <PatientTransactionsTable user={user} />
    </div>
  )
}

export default ClientPatientTransactions
