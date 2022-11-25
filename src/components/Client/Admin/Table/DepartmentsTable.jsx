import { useState, useEffect } from 'react'
import { Table, ScrollArea, Center, Paper, Title, Stack, Button, Group, Modal, useMantineTheme } from '@mantine/core'
import AddDepartmentForm from '../Form/AddDepartmentForm'
import { showSuccessNotification, showErrorNotification } from '../../../Notification'
import { headers } from '../../../../services/constants/headers'
import { DEPARTMENTS_ENDPOINT } from '../../../../services/constants/endpoints'
import { axiosGet } from '../../../../services/utilities/axios'
import useStyles from '../../../../services/hooks/useStyles'

const DepartmentsTable = () => {
  const { classes, cx } = useStyles()

  const theme = useMantineTheme()

  const [opened, setOpened] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [departments, setDepartments] = useState([])
  const [department, setDepartment] = useState({})
  const [title, setTitle] = useState('')
  const [form, setForm] = useState('')

  useEffect(() => {
    getDepartments()
  }, [])

  const rows = departments.map((row, index) => (
    <tr key={index}>
      <td>{row.id}</td>
      <td>{row.name}</td>
    </tr>
  ))

  const getDepartments = () => {
    axiosGet(DEPARTMENTS_ENDPOINT, headers).then((response) => {
      if (response.status === 200) {
        setDepartments(response.data.departments)
      } else {
        showErrorNotification(response.response.data.errors.messages)
      }
    })
  }

  const displayForm = () => {
    switch (form) {
      case 'add':
        return <AddDepartmentForm onSubmit={handleSubmitAddPatient} />
      case 'edit':
        return <EditPatientForm user={user} onSubmit={handleSubmitEditPatient} />
      case 'delete':
        return <DeletePatientForm user={user} onSubmit={handleSubmitDeletePatient} />
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
            <Title order={2}>Departments</Title>
            <Button variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }} onClick={() => setOpened(true)}>
              Add Department
            </Button>
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

export default DepartmentsTable
