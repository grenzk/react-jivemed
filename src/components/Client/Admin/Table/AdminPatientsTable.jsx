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
import AddPatientForm from '../Form/AddPatientForm'
import UpdatePatientForm from '../Form/UpdatePatientForm'
import DeletePatientForm from '../Form/DeletePatientForm'
import { showSuccessNotification, showErrorNotification } from '../../../Notification'
import {
  PATIENTS_ENDPOINT,
  ADMIN_CREATE_PATIENT_ENDPOINT,
  USERS_ENDPOINT,
} from '../../../../services/constants/endpoints'
import { headers } from '../../../../services/constants/headers'
import { axiosGet, axiosPost, axiosPut, axiosDelete } from '../../../../services/utilities/axios'
import useStyles from '../../../../services/hooks/useStyles'

const AdminPatientsTable = () => {
  const { classes, cx } = useStyles()

  const theme = useMantineTheme()

  const [opened, setOpened] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [patients, setPatients] = useState([])
  const [patient, setPatient] = useState({})
  const [title, setTitle] = useState('')
  const [form, setForm] = useState('')

  useEffect(() => {
    getPatients()
  }, [])

  const rows = patients.map((patient, index) => (
    <tr key={index}>
      <td>{patient.user.id}</td>
      <td>{`${patient.user.first_name} ${patient.user.last_name}`}</td>
      <td>{patient.user.email}</td>
      <td>
        <Group spacing="xs">
          <ActionIcon
            onClick={() => {
              setPatient(patient.user)
              handleUpdateModal()
            }}
          >
            <TbPencil />
          </ActionIcon>
          <ActionIcon
            color="red"
            onClick={() => {
              setPatient(patient.user)
              handleDeleteModal()
            }}
          >
            <TbTrash />
          </ActionIcon>
        </Group>
      </td>
    </tr>
  ))

  const getPatients = () => {
    axiosGet(PATIENTS_ENDPOINT, headers).then((response) =>
      response.status === 200
        ? setPatients(response.data.users)
        : showErrorNotification(response.response.data.errors.messages)
    )
  }

  const resetModal = () => {
    setTitle('')
    setForm('')
    setPatient({})
    setOpened(false)
  }

  const handleAddModal = () => {
    setTitle('Add Patient')
    setForm('add')
    setOpened(true)
  }

  const handleUpdateModal = () => {
    setTitle('Update Patient')
    setForm('update')
    setOpened(true)
  }

  const handleDeleteModal = () => {
    setTitle('Delete Patient')
    setForm('delete')
    setOpened(true)
  }

  const handleSubmitAddPatient = (patient) => {
    axiosPost(ADMIN_CREATE_PATIENT_ENDPOINT, patient, headers).then((response) => {
      if (response.status === 201) {
        showSuccessNotification('Patient has been successfully created!')
        getPatients()
        resetModal()
      } else {
        showErrorNotification(response.response.data.errors.messages)
      }
    })
  }

  const handleSubmitUpdatePatient = (patient) => {
    axiosPut(`${PATIENTS_ENDPOINT}/${patient.id}`, patient.values, headers).then((response) => {
      if (response.status === 200) {
        showSuccessNotification('Patient has been successfully updated!')
        getPatients()
        resetModal()
      } else {
        showErrorNotification(response.response.data.errors.messages)
      }
    })
  }

  const handleSubmitDeletePatient = (id) => {
    axiosDelete(`${USERS_ENDPOINT}/${id}`, headers).then((response) => {
      if (response.status === 200) {
        showSuccessNotification('Patient has been successfully deleted!')
        getPatients()
        resetModal()
      } else {
        showErrorNotification(response.response.data.errors.messages)
      }
    })
  }

  const displayForm = () => {
    switch (form) {
      case 'add':
        return <AddPatientForm onSubmit={handleSubmitAddPatient} />
      case 'update':
        return <UpdatePatientForm patient={patient} onSubmit={handleSubmitUpdatePatient} />
      case 'delete':
        return <DeletePatientForm patient={patient} onSubmit={handleSubmitDeletePatient} />
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

export default AdminPatientsTable
