import { useState, useEffect } from 'react'
import { Table, ScrollArea, Center, Paper, Title, Stack, Group, Badge } from '@mantine/core'
import { APPOINTMENTS_ENDPOINT } from '../../../../services/constants/endpoints'
import { headers } from '../../../../services/constants/headers'
import { axiosGet } from '../../../../services/utilities/axios'
import useStyles from '../../../../services/hooks/useStyles'

const PatientAppointmentsTable = () => {
  const { classes, cx } = useStyles()

  const [scrolled, setScrolled] = useState(false)
  const [appointments, setAppointments] = useState([])

  useEffect(() => {
    getAppointments()
  }, [])

  const rows = appointments.map((appointment, index) => (
    <tr key={index}>
      <td>{appointment.details.id}</td>
      <td>{appointment.schedule.date}</td>
      <td>{`${appointment.doctor.first_name} ${appointment.doctor.last_name}`}</td>
      <td>
        {appointment.departments.map((department, index) => (
          <Badge key={index} mx={6}>
            {department.name}
          </Badge>
        ))}
      </td>
    </tr>
  ))

  const getAppointments = () => {
    axiosGet(APPOINTMENTS_ENDPOINT, headers).then((response) => {
      response.status === 200
        ? setAppointments(response.data.appointments)
        : showErrorNotification(response.response.data.errors.messages)
    })
  }

  return (
    <>
      <Center>
        <Stack>
          <Group position="apart">
            <Title order={2}>Appointments</Title>
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
                    <th>Schedule</th>
                    <th>Name</th>
                    <th>Department</th>
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

export default PatientAppointmentsTable
