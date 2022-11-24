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
import useStyles from '../../../../services/hooks/useStyles'
import { accessTokenCookie } from '../../../../services/constants/cookies'
import { getCookie } from '../../../../services/utilities/cookie'
import { axiosGet, axiosPost, axiosPut, axiosDelete } from '../../../../services/utilities/axios'
import { PATIENTS_ENDPOINT, USER_ENDPOINT } from '../../../../services/constants/endpoints'
import EditPatientForm from '../Form/EditPatientForm'
import AddPatientForm from '../Form/AddPatientForm'
import DeletePatientForm from '../Form/DeletePatientForm'

const PatientsTable = () => {
  const { classes, cx } = useStyles()

  const theme = useMantineTheme()

  const [opened, setOpened] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [data, setData] = useState([])
  const [user, setUser] = useState({})
  const [title, setTitle] = useState('')
  const [form, setForm] = useState('')

  const accessToken = getCookie(accessTokenCookie)
  const headers = {
    'Access-Control-Allow-Origin': '*',
    Authorization: accessToken,
  }

  useEffect(() => {
    getUsers()
  }, [])

  const getUsers = () => {
    axiosGet(PATIENTS_ENDPOINT, headers).then((response) => {
      response.status === 200 && setData(response.data.users)
    })
  }

  const resetModal = () => {
    setTitle('')
    setForm('')
    setOpened(false)
  }

  const handleAddModal = () => {
    setTitle('Add Patient')
    setForm('add')
    setOpened(true)
  }

  const handleEditModal = () => {
    setTitle('Edit Patient')
    setForm('edit')
    setOpened(true)
  }

  const handleDeleteModal = () => {
    setTitle('Delete Patient')
    setForm('delete')
    setOpened(true)
  }

  const handleSubmitAddPatient = (userInfo) => {
    axiosPost(PATIENTS_ENDPOINT, userInfo).then((response) => {
      if (response.status === 201) {
        getUsers()
        resetModal()
      }
    })
  }

  const handleSubmitEditPatient = (userInfo) => {
    console.log(userInfo)
  }

  const handleSubmitDeletePatient = (id) => {
    axiosDelete(`${USER_ENDPOINT}/${id}`, headers).then((response) => {
      if (response.status === 200) {
        getUsers()
        resetModal()
      }
    })
  }

  const displayForm = () => {
    switch (form) {
      case 'add':
        return <AddPatientForm onSubmit={handleSubmitAddPatient} />
      case 'edit':
        return <EditPatientForm user={user} onSubmit={handleSubmitEditPatient} />
      case 'delete':
        return <DeletePatientForm user={user} onSubmit={handleSubmitDeletePatient} />
    }
  }

  const rows = data.map((row, index) => (
    <tr key={index}>
      <td>{row.user.id}</td>
      <td>{`${row.user.first_name} ${row.user.last_name}`}</td>
      <td>{row.user.email}</td>
      <td>
        <Group spacing="xs">
          <ActionIcon
            onClick={() => {
              setUser(row.user)
              handleEditModal()
            }}
          >
            <TbPencil />
          </ActionIcon>
          <ActionIcon
            color="red"
            onClick={() => {
              setUser(row.user)
              handleDeleteModal(row.user.id)
            }}
          >
            <TbTrash />
          </ActionIcon>
        </Group>
      </td>
    </tr>
  ))

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
            <Title order={2}>Patients</Title>
            <Button variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }} onClick={handleAddModal}>
              Add Patient
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
                    <th>Name</th>
                    <th>Email</th>
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

export default PatientsTable
