import { Title, Group, Paper, SimpleGrid, Text, Stack } from '@mantine/core'
import { TbStethoscope, TbUser, TbMedicalCross } from 'react-icons/tb'
import { VictoryPie } from 'victory'
import useStyles from '../../../services/hooks/useStyles'
import style from '../../../assets/js/pieChart'

const data = [
  { title: 'Doctors', icon: TbStethoscope, value: 25 },
  { title: 'Patients', icon: TbUser, value: 40 },
  { title: 'Departments', icon: TbMedicalCross, value: 25 },
]

const pieChartData = [
  { x: 'Doctors', y: data[0].value },
  { x: 'Patients', y: data[1].value },
  { x: 'Departments', y: data[2].value },
]

const ClientAdminDashboard = () => {
  const { classes } = useStyles()

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
          <VictoryPie style={style} colorScale="blue" width={1200} data={pieChartData} />
        </Paper>
      </Stack>
    </div>
  )
}

export default ClientAdminDashboard
