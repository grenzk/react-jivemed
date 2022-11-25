import { useNavigate } from 'react-router-dom'
import { Button, Center, Stack } from '@mantine/core'
import UpdateAdminForm from './Form/UpdateAdminForm'
import UpdateDoctorForm from '../Admin/Form/UpdateDoctorForm'
import UpdatePatientForm from '../Admin/Form/UpdatePatientForm'
import { showSuccessNotification, showErrorNotification } from '../../Notification'
import { UPDATE_CURRENT_USER_ENDPOINT, DELETE_CURRENT_USER_ENDPOINT } from '../../../services/constants/endpoints'
import { SIGN_IN_LINK } from '../../../services/constants/links'
import { headers } from '../../../services/constants/headers'
import { axiosPut, axiosDelete } from '../../../services/utilities/axios'
import { deleteCookie } from '../../../services/utilities/cookie'
import { accessTokenCookie } from '../../../services/constants/cookies'

const AccountSettings = ({ user, role, onDisplayUser }) => {
  const navigate = useNavigate()

  const handleUpdateSubmit = (user) => {
    axiosPut(UPDATE_CURRENT_USER_ENDPOINT, user.values, headers).then((response) => {
      if (response.status === 200) {
        showSuccessNotification('Your account has been successfully updated!')
        onDisplayUser(response.data)
      } else {
        showErrorNotification(response.response.data.errors.messages)
      }
    })
  }

  const handleDeleteSubmit = () => {
    axiosDelete(DELETE_CURRENT_USER_ENDPOINT, headers).then((response) => {
      if (response.status === 200) {
        showSuccessNotification('Your account has been successfully deleted!')
        deleteCookie(accessTokenCookie)
        navigate(SIGN_IN_LINK)
      } else {
        showErrorNotification(response.response.data.errors.messages)
      }
    })
  }

  const displayAccountSettingsForm = () => {
    switch (role) {
      case 'admin':
        return <UpdateAdminForm admin={user.user} onSubmit={handleUpdateSubmit} />
      case 'patient':
        return <UpdatePatientForm patient={user.user} onDisplayUser={onDisplayUser} onSubmit={handleUpdateSubmit} />
      case 'doctor':
        return <UpdateDoctorForm doctor={user} onDisplayUser={onDisplayUser} onSubmit={handleUpdateSubmit} />
    }
  }

  return (
    <Center>
      <Stack>
        {displayAccountSettingsForm()}
        <Button color="red" mt="xl">
          Delete Account
        </Button>
      </Stack>
    </Center>
  )
}

export default AccountSettings
