import { Center } from '@mantine/core'
import UpdateAdminForm from './Form/UpdateAdminForm'
import UpdateDoctorForm from '../Admin/Form/UpdateDoctorForm'
import UpdatePatientForm from '../Admin/Form/UpdatePatientForm'
import { showSuccessNotification, showErrorNotification } from '../../Notification'
import { UPDATE_CURRENT_USER_ENDPOINT } from '../../../services/constants/endpoints'
import { headers } from '../../../services/constants/headers'
import { axiosPut } from '../../../services/utilities/axios'

const AccountSettings = ({ user, role, onDisplayUser }) => {
  const handleSubmit = (user) => {
    axiosPut(UPDATE_CURRENT_USER_ENDPOINT, user.values, headers).then((response) => {
      if (response.status === 200) {
        showSuccessNotification('Your account has been successfully updated!')
        onDisplayUser(response.data)
      } else {
        showErrorNotification(response.response.data.errors.messages)
      }
    })
  }

  const displayAccountSettingsForm = () => {
    switch (role) {
      case 'admin':
        return <UpdateAdminForm admin={user.user} onSubmit={handleSubmit} />
      case 'patient':
        return <UpdatePatientForm patient={user.user} onDisplayUser={onDisplayUser} onSubmit={handleSubmit} />
      case 'doctor':
        return <UpdateDoctorForm doctor={user} onDisplayUser={onDisplayUser} onSubmit={handleSubmit} />
    }
  }

  return <Center>{displayAccountSettingsForm()}</Center>
}

export default AccountSettings
