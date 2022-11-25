import { useState, useEffect } from 'react'
import { Title, Group, Paper, SimpleGrid, Text, Stack } from '@mantine/core'
import { TbStethoscope, TbUser, TbMedicalCross } from 'react-icons/tb'
import { VictoryPie } from 'victory'
import { showErrorNotification } from '../../../components/Notification'
import pieChartStyle from '../../../assets/js/pieChart'
import useStyles from '../../../services/hooks/useStyles'
import { axiosGet } from '../../../services/utilities/axios'
import { DOCTORS_ENDPOINT, PATIENTS_ENDPOINT, DEPARTMENTS_ENDPOINT } from '../../../services/constants/endpoints'
import { headers } from '../../../services/constants/headers'

const ClientAdminDashboard = () => {
  const { classes } = useStyles()

  const [doctors, setDoctors] = useState([])
  const [patients, setPatients] = useState([])
  const [departments, setDepartments] = useState([])

  useEffect(() => {
    getDoctors()
    getPatients()
    getDepartments()
  }, [])

  const data = [
    { title: 'Doctors', icon: TbStethoscope, value: doctors.length },
    { title: 'Patients', icon: TbUser, value: patients.length },
    { title: 'Departments', icon: TbMedicalCross, value: departments.length },
  ]

  const pieChartData = [
    { x: 'Doctors', y: data[0].value },
    { x: 'Patients', y: data[1].value },
  ]

  const getDoctors = () => {
    axiosGet(DOCTORS_ENDPOINT, headers).then((response) =>
      response.status === 200
        ? setDoctors(response.data.users)
        : showErrorNotification(response.response.data.errors.messages)
    )
  }

  const getPatients = () => {
    axiosGet(PATIENTS_ENDPOINT, headers).then((response) =>
      response.status === 200
        ? setPatients(response.data.users)
        : showErrorNotification(response.response.data.errors.messages)
    )
  }

  const getDepartments = () => {
    axiosGet(DEPARTMENTS_ENDPOINT, headers).then((response) =>
      response.status === 200
        ? setDepartments(response.data.departments)
        : showErrorNotification(response.response.data.errors.messages)
    )
  }

  const stats = data.map((stat) => {
    const Icon = stat.icon

    return (
      <Paper withBorder p="md" radius="md" key={stat.title}>
        <Group position="apart">
          <Text size="xs" color="dimmed" className={classes.adminDashboardTitle}>
            {stat.title}
          </Text>
          <Icon className={classes.adminDashboardIcon} size={22} />
        </Group>
        <Group align="flex-end" spacing="xs" mt={25}>
          <Text className={classes.adminDashboardValue}>{stat.value}</Text>
        </Group>
      </Paper>
    )
  })

  return (
    <div className={classes.adminDashboardRoot}>
      <Stack>
        <Title order={2}>Dashboard</Title>
        <SimpleGrid
          cols={3}
          breakpoints={[
            { maxWidth: 'md', cols: 1 },
            { maxWidth: 'xs', cols: 1 },
          ]}
        >
          {stats}
        </SimpleGrid>
        <Paper withBorder={true}>
          <VictoryPie style={pieChartStyle} colorScale="blue" width={1200} data={pieChartData} />
        </Paper>
      </Stack>
    </div>
  )
}

export default ClientAdminDashboard
