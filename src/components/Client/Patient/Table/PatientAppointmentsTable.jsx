import { useState } from 'react'
import { Table, ScrollArea, Center, Paper, Title, Stack, Group } from '@mantine/core'
import useStyles from '../../../../services/hooks/useStyles'

const data = [
  { id: 1, name: 'Maria Dela cruz', email: 'mdc.doctor@email.com' },
  { id: 2, name: 'Juan Dela Cruz', email: 'jdc@email.com' },
  { id: 2, name: 'Juan Dela Cruz', email: 'jdc@email.com' },
  { id: 2, name: 'Juan Dela Cruz', email: 'jdc@email.com' },
  { id: 2, name: 'Juan Dela Cruz', email: 'jdc@email.com' },
  { id: 2, name: 'Juan Dela Cruz', email: 'jdc@email.com' },
  { id: 2, name: 'Juan Dela Cruz', email: 'jdc@email.com' },
  { id: 2, name: 'Juan Dela Cruz', email: 'jdc@email.com' },
  { id: 2, name: 'Juan Dela Cruz', email: 'jdc@email.com' },
  { id: 2, name: 'Juan Dela Cruz', email: 'jdc@email.com' },
]

const PatientAppointmentsTable = () => {
  const { classes, cx } = useStyles()
  const [scrolled, setScrolled] = useState(false)

  const rows = data.map((row, index) => (
    <tr key={index}>
      <td>{row.id}</td>
      <td>{row.name}</td>
      <td>{row.email}</td>
    </tr>
  ))

  return (
    <div>
      <Center>
        <Stack>
          <Group position="apart">
            <Title order={2}>Appointments</Title>
          </Group>

          <Paper shadow="xs" p="md">
            <ScrollArea sx={{ height: 450 }} onScrollPositionChange={({ y }) => setScrolled(y !== 0)}>
              <Table sx={{ minWidth: 1000 }} verticalSpacing="md">
                <thead
                  className={cx(classes.tableHeader, {
                    [classes.tableScrolled]: scrolled,
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
    </div>
  )
}

export default PatientAppointmentsTable
