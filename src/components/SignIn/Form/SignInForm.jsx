import {
  Paper,
  createStyles,
  TextInput,
  PasswordInput,
  Button,
  Title,
  Text,
  Anchor,
  Group,
} from '@mantine/core'
import { TbCalendarPlus } from 'react-icons/tb'
import { SIGN_UP_LINK } from '../../../services/constants/links'

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: '100vh',
    backgroundSize: 'cover',
    backgroundImage:
      'url(https://images.unsplash.com/photo-1484242857719-4b9144542727?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&q=80)',
  },

  form: {
    borderRight: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
    minHeight: '100vh',
    maxWidth: 450,
    paddingTop: 80,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: '100%',
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  logo: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    width: 120,
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}))

const SignInForm = () => {
  const { classes } = useStyles()

  const handleLogo = () => {
    window.location.assign('/')
  }

  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30}>
        <Group
          style={{ cursor: 'pointer' }}
          spacing="xs"
          position="center"
          mt="md"
          onClick={handleLogo}
        >
          <TbCalendarPlus size={30} />
          <Text size={30} style={{ fontWeight: 'bold' }}>
            Jivemed
          </Text>
        </Group>
        <Title
          order={2}
          className={classes.title}
          align="center"
          mt="md"
          mb={50}
        >
          Welcome back!
        </Title>
        <TextInput label="Email" size="md" />
        <PasswordInput label="Password" mt="md" size="md" />
        <Button fullWidth mt="xl" size="md">
          Sign in
        </Button>
        <Text align="center" mt="md">
          Don&apos;t have an account?{' '}
          <Anchor href={SIGN_UP_LINK} weight={700}>
            Sign up
          </Anchor>
        </Text>
      </Paper>
    </div>
  )
}

export default SignInForm
