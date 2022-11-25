import { useState, useEffect } from 'react'
import { Table, ScrollArea, Center, Paper, Title, Stack, Group, Badge } from '@mantine/core'
import { DOCTORS_ENDPOINT } from '../../../../services/constants/endpoints'
import { headers } from '../../../../services/constants/headers'
import { axiosGet } from '../../../../services/utilities/axios'
import useStyles from '../../../../services/hooks/useStyles'

const PatientDoctorsTable = () => {
  const { classes, cx } = useStyles()

  const [scrolled, setScrolled] = useState(false)
  const [doctors, setDoctors] = useState([])

  useEffect(() => {
    getPatients()
  }, [])

  const rows = doctors.map((doctor, index) => (
    <tr key={index}>
      <td>{doctor.user.id}</td>
      <td>{`${doctor.user.first_name} ${doctor.user.last_name}`}</td>
      <td>
        {doctor.departments.map((department, index) => (
          <Badge key={index} mx={6}>
            {department.name}
          </Badge>
        ))}
      </td>
    </tr>
  ))

  const getPatients = () => {
    axiosGet(DOCTORS_ENDPOINT, headers).then((response) =>
      response.status === 200
        ? setDoctors(response.data.users)
        : showErrorNotification(response.response.data.errors.messages)
    )
  }

  return (
    <>
      <Center>
        <Stack>
          <Group position="apart">
            <Title order={2}>Doctors</Title>
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

export default PatientDoctorsTable
