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
import AddDepartmentForm from '../Form/AddDepartmentForm'
import { showSuccessNotification, showErrorNotification } from '../../../Notification'
import { headers } from '../../../../services/constants/headers'
import { DEPARTMENTS_ENDPOINT } from '../../../../services/constants/endpoints'
import { axiosGet, axiosPost } from '../../../../services/utilities/axios'
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
      <td>
        <Group spacing="xs">
          <ActionIcon
            onClick={() => {
              setDepartment(row.user)
              // handleEditModal()
            }}
          >
            <TbPencil />
          </ActionIcon>
          <ActionIcon
            color="red"
            onClick={() => {
              setDepartment(row.user)
              // handleDeleteModal()
            }}
          >
            <TbTrash />
          </ActionIcon>
        </Group>
      </td>
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

  const resetModal = () => {
    setTitle('')
    setForm('')
    setOpened(false)
  }

  const handleAddModal = () => {
    setTitle('Add Department')
    setForm('add')
    setOpened(true)
  }

  const handleSubmitAddDepartment = (departmentInfo) => {
    axiosPost(DEPARTMENTS_ENDPOINT, departmentInfo, headers).then((response) => {
      if (response.status === 201) {
        showSuccessNotification('Department has been successfully created!')
        getDepartments()
        resetModal()
      } else {
        showErrorNotification(response.response.data.errors.messages)
      }
    })
  }

  const displayForm = () => {
    switch (form) {
      case 'add':
        return <AddDepartmentForm onSubmit={handleSubmitAddDepartment} />
      case 'edit':
      // return <EditDepartmentForm department={department} onSubmit={handleSubmitEditDepartment} />
      case 'delete':
      // return <DeleteDepartmentForm department={department} onSubmit={handleSubmitDeleteDepartment} />
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
            <Button variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }} onClick={handleAddModal}>
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
