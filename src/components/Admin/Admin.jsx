import { useState } from 'react'
import {
  createStyles,
  Table,
  ScrollArea,
  Center,
  Paper,
  Title,
  Stack
} from '@mantine/core'
import Navbar from './Navbar'

const useStyles = createStyles((theme) => ({
  header: {
    position: 'sticky',
    top: 0,
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    transition: 'box-shadow 150ms ease',

    '&::after': {
      content: '""',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      borderBottom: `1px solid ${
        theme.colorScheme === 'dark'
          ? theme.colors.dark[3]
          : theme.colors.gray[2]
      }`,
    },
  },

  scrolled: {
    boxShadow: theme.shadows.sm,
  },
}))

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

const Admin = () => {
  const { classes, cx } = useStyles()
  const [scrolled, setScrolled] = useState(false)

  const rows = data.map((row) => (
    <tr key={row.name}>
      <td>{row.id}</td>
      <td>{row.name}</td>
      <td>{row.email}</td>
    </tr>
  ))

  return (
    <div>
      <Navbar />
      <Center>
        <Stack>
          <Title order={2}>Patients</Title>
          <Paper shadow="xs" p="md">
            <ScrollArea
              sx={{ height: 450 }}
              onScrollPositionChange={({ y }) => setScrolled(y !== 0)}
            >
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
    </div>
  )
}

export default Admin
