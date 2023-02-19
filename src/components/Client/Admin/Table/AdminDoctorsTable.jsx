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
import AddDoctorForm from '../Form/AddDoctorForm'
import UpdateDoctorForm from '../Form/UpdateDoctorForm'
import DeleteDoctorForm from '../Form/DeleteDoctorForm'
import CenterLoader from '../../../CenterLoader'
import { showSuccessNotification, showErrorNotification } from '../../../Notification'
import { DOCTORS_ENDPOINT, USERS_ENDPOINT } from '../../../../services/constants/endpoints'
import { headers } from '../../../../services/constants/headers'
import { axiosGet, axiosPost, axiosPut, axiosDelete } from '../../../../services/utilities/axios'
import useStyles from '../../../../services/hooks/useStyles'

const AdminDoctorsTable = () => {
  const { classes, cx } = useStyles()

  const theme = useMantineTheme()

  const [opened, setOpened] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [loading, setLoading] = useState(false)
  const [doctors, setDoctors] = useState([])
  const [doctor, setDoctor] = useState({})
  const [title, setTitle] = useState('')
  const [form, setForm] = useState('')

  useEffect(() => {
    getDoctors()
  }, [])

  const rows = doctors.map((doctor, index) => (
    <tr key={index}>
      <td>{doctor.user.id.toString()}</td>
      <td>{`${doctor.user.first_name} ${doctor.user.last_name}`}</td>
      <td>{doctor.user.email}</td>
      <td>
        <Group spacing="xs">
          <ActionIcon
            onClick={() => {
              setDoctor(doctor)
              handleUpdateModal()
            }}
          >
            <TbPencil />
          </ActionIcon>
          <ActionIcon
            color="red"
            onClick={() => {
              setDoctor(doctor)
              handleDeleteModal()
            }}
          >
            <TbTrash />
          </ActionIcon>
        </Group>
      </td>
    </tr>
  ))

  const getDoctors = () => {
    axiosGet(DOCTORS_ENDPOINT, headers).then((response) => {
      response.status === 200
        ? setDoctors(response.data.users)
        : showErrorNotification(response.response.data.errors.messages)
    })
  }

  const resetModal = () => {
    setTitle('')
    setForm('')
    setDoctor({})
    setOpened(false)
  }

  const handleAddModal = () => {
    setTitle('Add Doctor')
    setForm('add')
    setOpened(true)
  }
  const handleUpdateModal = () => {
    setTitle('Update Doctor')
    setForm('update')
    setOpened(true)
  }

  const handleDeleteModal = () => {
    setTitle('Delete Doctor')
    setForm('delete')
    setOpened(true)
  }

  const handleSubmitAddDoctor = (doctor) => {
    setLoading(true)
    axiosPost(DOCTORS_ENDPOINT, doctor, headers).then((response) => {
      setLoading(false)
      if (response.status === 201) {
        showSuccessNotification('Doctor has been successfully created!')
        getDoctors()
        resetModal()
      } else {
        showErrorNotification(response.response.data.errors.messages)
      }
    })
  }

  const handleSubmitUpdateDoctor = (doctor) => {
    setLoading(true)
    axiosPut(`${DOCTORS_ENDPOINT}/${doctor.id}`, doctor.values, headers).then((response) => {
      setLoading(false)
      if (response.status === 200) {
        showSuccessNotification('Doctor has been successfully updated!')
        getDoctors()
        resetModal()
      } else {
        showErrorNotification(response.response.data.errors.messages)
      }
    })
  }

  const handleSubmitDeleteDoctor = (id) => {
    setLoading(true)
    axiosDelete(`${USERS_ENDPOINT}/${id.toString()}`, headers).then((response) => {
      setLoading(false)
      if (response.status === 200) {
        showSuccessNotification('Doctor has been successfully deleted!')
        getDoctors()
        resetModal()
      } else {
        showErrorNotification(response.response.data.errors.messages)
      }
    })
  }

  const displayForm = () => {
    switch (form) {
      case 'add':
        return <AddDoctorForm loading={loading} onSubmit={handleSubmitAddDoctor} />
      case 'update':
        return <UpdateDoctorForm loading={loading} doctor={doctor} onSubmit={handleSubmitUpdateDoctor} />
      case 'delete':
        return <DeleteDoctorForm loading={loading} doctor={doctor} onSubmit={handleSubmitDeleteDoctor} />
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
            <Title order={2}>Doctors</Title>
            <Button variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }} onClick={handleAddModal}>
              Add Doctor
            </Button>
          </Group>
          <Paper shadow="xs" p="md">
            {rows.length ? (
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
            ) : (
              <CenterLoader />
            )}
          </Paper>
        </Stack>
      </Center>
    </>
  )
}

export default AdminDoctorsTable
