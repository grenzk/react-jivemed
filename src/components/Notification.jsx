import { showNotification } from '@mantine/notifications'
import { TbCheck, TbX } from 'react-icons/tb'

export const showSuccessNotification = (message) => {
  showNotification({
    title: 'Success',
    message,
    color: 'green',
    icon: <TbCheck />,
  })
}

export const showErrorNotification = (message) => {
  showNotification({
    title: 'Failed',
    message,
    color: 'red',
    icon: <TbX />,
  })
}
