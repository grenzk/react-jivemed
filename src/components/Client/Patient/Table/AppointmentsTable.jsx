import { useState } from 'react'
import {
  Table,
  ScrollArea,
  Center,
  Paper,
  Title,
  Stack,
  Button,
  Group,
  Modal,
  TextInput,
  PasswordInput,
  useMantineTheme,
} from '@mantine/core'
import { useForm } from '@mantine/form'
import { TbMail } from 'react-icons/tb'
import { TbLock } from 'react-icons/tb'
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

const AppointmentsTable = () => {
  const [opened, setOpened] = useState(false)
  const { classes, cx } = useStyles()
  const [scrolled, setScrolled] = useState(false)
  const theme = useMantineTheme()

  const rows = data.map((row, index) => (
    <tr key={index}>
      <td>{row.id}</td>
      <td>{row.name}</td>
      <td>{row.email}</td>
    </tr>
  ))

  const form = useForm({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },

    validate: {
      email: (value) => (value === '' ? 'Invalid email' : null),
      password: (value) => (value === '' ? 'Invalid password' : null),
    },
  })

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

export default AppointmentsTable
