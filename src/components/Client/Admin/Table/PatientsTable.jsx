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
import EditPatientForm from '../Form/EditPatientForm'
import AddPatientForm from '../Form/AddPatientForm'
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

const PatientsTable = () => {
  const { classes, cx } = useStyles()

  const theme = useMantineTheme()

  const [opened, setOpened] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [patients, setPatients] = useState([])
  const [patient, setPatient] = useState({})
  const [title, setTitle] = useState('')
  const [form, setForm] = useState('')

  useEffect(() => {
    getUsers()
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
              handleEditModal()
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

  const getUsers = () => {
    axiosGet(PATIENTS_ENDPOINT, headers).then((response) => {
      if (response.status === 200) {
        setPatients(response.data.users)
      } else {
        showErrorNotification(response.response.data.errors.messages)
      }
    })
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
    axiosPost(ADMIN_CREATE_PATIENT_ENDPOINT, userInfo, headers).then((response) => {
      if (response.status === 201) {
        showSuccessNotification('Patient has been successfully created!')
        getUsers()
        resetModal()
      } else {
        showErrorNotification(response.response.data.errors.messages)
      }
    })
  }

  const handleSubmitEditPatient = (patientInfo) => {
    axiosPut(`${PATIENTS_ENDPOINT}/${patientInfo.id}`, patientInfo.values, headers).then((response) => {
      if (response.status === 200) {
        showSuccessNotification('Patient has been successfully updated!')
        getUsers()
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
        getUsers()
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
      case 'edit':
        return <EditPatientForm patient={patient} onSubmit={handleSubmitEditPatient} />
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

export default PatientsTable
