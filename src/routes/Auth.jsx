import { useLocation } from 'react-router-dom'
import { Paper, createStyles, Title, Group } from '@mantine/core'
import {
  startNavigationProgress,
  completeNavigationProgress,
  resetNavigationProgress,
} from '@mantine/nprogress'
import Logo from '../components/Logo'
import bgImage from '../assets/img/sign-in.svg'
import SignInForm from '../components/SignIn/Form/SignInForm'
import SignUpForm from '../components/SignUp/Form/SignUpForm'
import { SIGN_IN_LINK } from '../services/constants/links'
import { axiosPost } from '../services/utilities/axios'
import {
  USER_SIGN_IN_ENDPOINT,
  USER_SIGN_UP_ENDPOINT,
} from '../services/constants/endpoints'

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: '100vh',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '105%',
    backgroundImage: `url(${bgImage})`,

    [`@media (min-width: ${theme.breakpoints.xl}px)`]: {
      backgroundPosition: '85%',
    },
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
  },
}))

const Auth = () => {
  const location = useLocation()
  const { classes } = useStyles()

  const handleSignUp = (userInfo) => {
    startNavigationProgress()
    axiosPost(USER_SIGN_UP_ENDPOINT, userInfo).then((response) => {
      console.log(response.data)
      completeNavigationProgress()
      resetNavigationProgress()
    })
  }

  const handleSignIn = (userInfo) => {
    startNavigationProgress()
    axiosPost(USER_SIGN_IN_ENDPOINT, userInfo).then((response) => {
      console.log(response.data)
      completeNavigationProgress()
      resetNavigationProgress()
    })
  }

  const displayTitle = () =>
    location.pathname === SIGN_IN_LINK ? 'Welcome back!' : 'Create an account'

  const displayForm = () =>
    location.pathname === SIGN_IN_LINK ? (
      <SignInForm handleSignIn={handleSignIn} />
    ) : (
      <SignUpForm handleSignUp={handleSignUp} />
    )

  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30}>
        <Logo />
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
