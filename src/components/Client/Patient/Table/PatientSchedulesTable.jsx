import { useState, useEffect } from 'react'
import {
  useMantineTheme,
  Table,
  ScrollArea,
  Center,
  Paper,
  Title,
  Stack,
  Group,
  Badge,
  Button,
  Modal,
} from '@mantine/core'
import AddAppointmentForm from '../../Patient/Form/AddAppointmentForm'
import CenterLoader from '../../../CenterLoader'
import { showSuccessNotification, showErrorNotification } from '../../../Notification'
import { SCHEDULES_ENDPOINT, APPOINTMENTS_ENDPOINT } from '../../../../services/constants/endpoints'
import { headers } from '../../../../services/constants/headers'
import { axiosGet, axiosPost } from '../../../../services/utilities/axios'
import useStyles from '../../../../services/hooks/useStyles'

const PatientSchedulesTable = () => {
  const { classes, cx } = useStyles()

  const theme = useMantineTheme()

  const [opened, setOpened] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [loading, setLoading] = useState(false)
  const [schedules, setSchedules] = useState([])
  const [schedule, setSchedule] = useState({})

  useEffect(() => {
    getSchedules()
  }, [])

  const rows = schedules.map((schedule, index) => (
    <tr key={index}>
      <td>{schedule.schedule.id.toString()}</td>
      <td>{schedule.schedule.date}</td>
      <td>{`${schedule.user.first_name} ${schedule.user.last_name}`}</td>
      <td>
        {schedule.departments.map((department, index) => (
          <Badge key={index} mx={6}>
            {department.name}
          </Badge>
        ))}
      </td>
      <td>
        <Button
          variant="gradient"
          gradient={{ from: 'indigo', to: 'cyan' }}
          compact
          onClick={() => {
            handleAddModal()
            setSchedule(schedule.schedule)
          }}
        >
          Create
        </Button>
      </td>
    </tr>
  ))

  const handleAddModal = () => {
    setOpened(true)
  }

  const handleAddAppointment = (appointment) => {
    setLoading(true)
    axiosPost(APPOINTMENTS_ENDPOINT, appointment, headers).then((response) => {
      setLoading(false)
      if (response.status === 200) {
        showSuccessNotification('Your appointment has been successfully created!')
        setOpened(false)
      } else {
        showErrorNotification(response.response.data.errors.messages)
      }
    })
  }

  const getSchedules = () => {
    axiosGet(SCHEDULES_ENDPOINT, headers).then((response) => {
      if (response.status === 200) {
        const dateFilter = response.data.schedules.filter((schedule) => {
          const scheduleDate = new Date(schedule.schedule.date).toISOString().split('T')[0]
          const currentDate = new Date(Date.now()).toISOString().split('T')[0]

          return scheduleDate >= currentDate
        })

        setSchedules(dateFilter)
      } else {
        showErrorNotification(response.response.data.errors.messages)
      }
    })
  }

  return (
    <>
      <Modal
        overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
        overlayOpacity={0.55}
        overlayBlur={3}
        centered
        opened={opened}
        title="Credit card details"
        onClose={() => setOpened(false)}
        size="auto"
      >
        <AddAppointmentForm loading={loading} schedule={schedule} onSubmit={handleAddAppointment} />
      </Modal>
      <Center>
        <Stack>
          <Group position="apart">
            <Title order={2}>Available Schedules</Title>
          </Group>
          <Paper shadow="xs" p="md">
            {rows.length ? (
              <ScrollArea sx={{ height: 450 }} onScrollPositionChange={({ y }) => setScrolled(y !== 0)}>
                <Table sx={{ minWidth: 1000 }} verticalSpacing="md">
                  <thead
                    className={cx(classes.header, {
                      [classes.scrolled]: scrolled,
                    })}
                  >
                    <tr>
                      <th>Id</th>
                      <th>Schedule</th>
                      <th>Name</th>
                      <th>Department</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>{rows}</tbody>
                </Table>
              </ScrollArea>
            ) : (
              <CenterLoader />
            )}
          </Paper>
        </Stack>
      </Center>
    </>
  )
}

export default PatientSchedulesTable
