import { useState, useEffect } from 'react'
import { useMantineTheme, Table, ScrollArea, Center, Paper, Title, Stack, Group } from '@mantine/core'
import { PATIENTS_ENDPOINT } from '../../../../services/constants/endpoints'
import { headers } from '../../../../services/constants/headers'
import { axiosGet } from '../../../../services/utilities/axios'
import useStyles from '../../../../services/hooks/useStyles'

const DoctorPatientsTable = () => {
  const { classes, cx } = useStyles()

  const theme = useMantineTheme()

  const [scrolled, setScrolled] = useState(false)
  const [patients, setPatients] = useState([])

  useEffect(() => {
    getPatients()
  }, [])

  const rows = patients.map((patient, index) => (
    <tr key={index}>
      <td>{patient.user.id}</td>
      <td>{`${patient.user.first_name} ${patient.user.last_name}`}</td>
      <td>{patient.user.email}</td>
    </tr>
  ))

  const getPatients = () => {
    axiosGet(PATIENTS_ENDPOINT, headers).then((response) =>
      response.status === 200
        ? setPatients(response.data.users)
        : showErrorNotification(response.response.data.errors.messages)
    )
  }

  return (
    <>
      <Center>
        <Stack>
          <Group position="apart">
            <Title order={2}>Patients</Title>
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
                    <th>Email</th>
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

export default DoctorPatientsTable
