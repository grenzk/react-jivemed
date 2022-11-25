import { Center } from '@mantine/core'
import EditAdminForm from '../AccountSettings/Form/EditAdminForm'
import { showSuccessNotification, showErrorNotification } from '../../Notification'
import { UPDATE_CURRENT_USER_ENDPOINT } from '../../../services/constants/endpoints'
import { headers } from '../../../services/constants/headers'
import { axiosPut } from '../../../services/utilities/axios'

const AdminAccountSettings = ({ admin, onDisplayUser }) => {
  const handleSubmit = (admin) => {
    axiosPut(UPDATE_CURRENT_USER_ENDPOINT, admin.values, headers).then((response) => {
      if (response.status === 200) {
        showSuccessNotification('Your account has been successfully updated!')
        onDisplayUser(response.data.user)
      } else {
        showErrorNotification(response.response.data.errors.messages)
      }
    })
  }

  return (
    <Center>
      <EditAdminForm admin={admin} onSubmit={handleSubmit} />
    </Center>
  )
}

export default AdminAccountSettings
