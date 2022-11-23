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
  TbCreditCard,
} from 'react-icons/tb'

const useStyles = createStyles((theme) => ({
  root: {
    padding: `0px ${theme.spacing.xl * 1.5}px`,
  },

  value: {
    fontSize: 24,
    fontWeight: 700,
    lineHeight: 1,
  },

  icon: {
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[3]
        : theme.colors.gray[4],
  },

  title: {
    fontWeight: 700,
    textTransform: 'uppercase',
  },
}))

const data = [
  { title: 'Doctors', icon: TbStethoscope, value: 25 },
  { title: 'Patients', icon: TbUser, value: 40 },
  { title: 'Departments', icon: TbClipboardList, value: 25 },
]

const ClientAdminDashboard = () => {
  const { classes } = useStyles()
  const stats = data.map((stat) => {
    const Icon = stat.icon

    return (
      <Paper withBorder p="md" radius="md" key={stat.title}>
        <Group position="apart">
          <Text size="xs" color="dimmed" className={classes.title}>
            {stat.title}
          </Text>
          <Icon className={classes.icon} size={22} />
        </Group>

        <Group align="flex-end" spacing="xs" mt={25}>
          <Text className={classes.value}>{stat.value}</Text>
        </Group>
      </Paper>
    )
  })
  return (
    <div className={classes.root}>
      <Stack>
        <Title order={2}>Dashboard</Title>
        <SimpleGrid
          cols={4}
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
