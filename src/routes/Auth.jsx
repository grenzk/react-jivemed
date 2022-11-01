import { useLocation } from 'react-router-dom'
import { Paper, createStyles, Title, Text, Group } from '@mantine/core'
import {
  startNavigationProgress,
  resetNavigationProgress,
  completeNavigationProgress,
} from '@mantine/nprogress'
import { TbCalendarPlus } from 'react-icons/tb'
import SignInForm from '../components/SignIn/Form/SignInForm'
import SignUpForm from '../components/SignUp/Form/SignUpForm'
import { SIGN_IN_LINK } from '../services/constants/links'

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

const Auth = () => {
  const location = useLocation()
  const { classes } = useStyles()

  const handleLogo = () => window.location.assign('/')

  const displayTitle = () =>
    location.pathname === SIGN_IN_LINK ? 'Welcome back!' : 'Create an account'

  const displayForm = () =>
    location.pathname === SIGN_IN_LINK ? <SignInForm /> : <SignUpForm />

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
          {displayTitle()}
        </Title>
        {displayForm()}
      </Paper>
    </div>
  )
}

export default Auth
