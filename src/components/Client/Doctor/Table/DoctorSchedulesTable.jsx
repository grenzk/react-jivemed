import { useState, useEffect } from 'react'
import {
  useMantineTheme,
  Modal,
  Table,
  ScrollArea,
  Center,
  Paper,
  Title,
  Stack,
  Button,
  Group,
  ActionIcon,
} from '@mantine/core'
import { TbPencil, TbTrash } from 'react-icons/tb'
import AddScheduleForm from '../Form/AddScheduleForm'
import UpdateScheduleForm from '../Form/UpdateScheduleForm'
import DeleteScheduleForm from '../Form/DeleteScheduleForm'
import { showSuccessNotification, showErrorNotification } from '../../../Notification'
import { SCHEDULES_ENDPOINT } from '../../../../services/constants/endpoints'
import { headers } from '../../../../services/constants/headers'
import { axiosGet, axiosPost, axiosPut, axiosDelete } from '../../../../services/utilities/axios'
import useStyles from '../../../../services/hooks/useStyles'

const DoctorSchedulesTable = ({ user }) => {
  const { classes, cx } = useStyles()

  const theme = useMantineTheme()

  const [opened, setOpened] = useState(false)
  const [loading, setLoading] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [schedule, setSchedule] = useState({})
  const [schedules, setSchedules] = useState([])

  const [title, setTitle] = useState('')
  const [form, setForm] = useState('')

  useEffect(() => {
    getSchedules()
  }, [])

  const rows = schedules.map((schedule, index) => (
    <tr key={index}>
      <td>{schedule.schedule.id}</td>
      <td>{schedule.schedule.date}</td>
      <td>{schedule.schedule.available}</td>
      <td>
        <Group spacing="xs">
          <ActionIcon
            onClick={() => {
              setSchedule(schedule)
              handleUpdateModal()
            }}
          >
            <TbPencil />
          </ActionIcon>
          <ActionIcon
            color="red"
            onClick={() => {
              setSchedule(schedule)
              handleDeleteModal()
            }}
          >
            <TbTrash />
          </ActionIcon>
        </Group>
      </td>
    </tr>
  ))

  const getSchedules = () => {
    axiosGet(SCHEDULES_ENDPOINT, headers).then((response) => {
      response.status === 200
        ? setSchedules(response.data.schedules.filter((schedule) => schedule.user.id === user.user.id))
        : showErrorNotification(response.response.data.errors.messages)
    })
  }

  const resetModal = () => {
    setTitle('')
    setForm('')
    setSchedule({})
    setOpened(false)
  }

  const handleAddModal = () => {
    setTitle('Add Schedule')
    setForm('add')
    setOpened(true)
  }
  const handleUpdateModal = () => {
    setTitle('Update Schedule')
    setForm('update')
    setOpened(true)
  }

  const handleDeleteModal = () => {
    setTitle('Delete Schedule')
    setForm('delete')
    setOpened(true)
  }

  const handleSubmitAddSchedule = (schedule) => {
    setLoading(true)
    axiosPost(SCHEDULES_ENDPOINT, schedule, headers).then((response) => {
      setLoading(false)
      if (response.status === 201) {
        showSuccessNotification('Schedule has been successfully created!')
        getSchedules()
        resetModal()
      } else {
        showErrorNotification(response.response.data.errors.messages)
      }
    })
  }

  const handleSubmitUpdateSchedule = (schedule) => {
    setLoading(true)
    axiosPut(`${SCHEDULES_ENDPOINT}/${schedule.id}`, schedule.values, headers).then((response) => {
      setLoading(false)
      if (response.status === 200) {
        showSuccessNotification('Schedule has been successfully updated!')
        getSchedules()
        resetModal()
      } else {
        showErrorNotification(response.response.data.errors.messages)
      }
    })
  }

  const handleSubmitDeleteSchedule = (id) => {
    setLoading(true)
    axiosDelete(`${SCHEDULES_ENDPOINT}/${id}`, headers).then((response) => {
      setLoading(false)
      if (response.status === 200) {
        showSuccessNotification('Schedule has been successfully deleted!')
        getSchedules()
        resetModal()
      } else {
        showErrorNotification(response.response.data.errors.messages)
      }
    })
  }

  const displayForm = () => {
    switch (form) {
      case 'add':
        return <AddScheduleForm loading={loading} onSubmit={handleSubmitAddSchedule} />
      case 'update':
        return <UpdateScheduleForm loading={loading} schedule={schedule} onSubmit={handleSubmitUpdateSchedule} />
      case 'delete':
        return <DeleteScheduleForm loading={loading} schedule={schedule} onSubmit={handleSubmitDeleteSchedule} />
    }
  }

  return (
    <>
      <Modal
        overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
        overlayOpacity={0.55}
        overlayBlur={3}
        centered
        opened={opened}
        title={title}
        onClose={() => setOpened(false)}
        size="auto"
      >
        {displayForm()}
      </Modal>
      <Center>
        <Stack>
          <Group position="apart">
            <Title order={2}>Schedules</Title>
            <Button variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }} onClick={handleAddModal}>
              Add Schedule
            </Button>
          </Group>
          <Paper shadow="xs" p="md">
            <ScrollArea sx={{ height: 450 }} onScrollPositionChange={({ y }) => setScrolled(y !== 0)}>
              <Table sx={{ minWidth: 1000 }} verticalSpacing="md">
                <thead
                  className={cx(classes.header, {
                    [classes.scrolled]: scrolled,
                  })}
                >
                  <tr>
                    <th>Id</th>
                    <th>Date</th>
                    <th>Available</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>{rows}</tbody>
              </Table>
            </ScrollArea>
          </Paper>
        </Stack>
      </Center>
    </>
  )
}

export default DoctorSchedulesTable
