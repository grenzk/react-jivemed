import {
  Title,
  createStyles,
  Group,
  Paper,
  SimpleGrid,
  Text,
  Stack,
} from '@mantine/core'
import {
  TbStethoscope,
  TbUser,
  TbClipboardList,
  TbMedicalCross,
} from 'react-icons/tb'
import useStyles from '../../../services/hooks/useStyles'

const data = [
  { title: 'Doctors', icon: TbStethoscope, value: 25 },
  { title: 'Patients', icon: TbUser, value: 40 },
  { title: 'Departments', icon: TbMedicalCross, value: 25 },
]

const ClientAdminDashboard = () => {
  const { classes } = useStyles()
  const stats = data.map((stat) => {
    const Icon = stat.icon

    return (
      <Paper withBorder p="md" radius="md" key={stat.adminDashboardTitle}>
        <Group position="apart">
          <Text
            size="xs"
            color="dimmed"
            className={classes.adminDashboardTitle}
          >
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
            { maxWidth: 'md', cols: 2 },
            { maxWidth: 'xs', cols: 1 },
          ]}
        >
          {stats}
        </SimpleGrid>
      </Stack>
    </div>
  )
}

export default ClientAdminDashboard
