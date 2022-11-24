import { useLocation } from 'react-router-dom'
import { Paper, Title } from '@mantine/core'
import Logo from '../components/Logo'
import SignInForm from '../components/SignIn/Form/SignInForm'
import SignUpForm from '../components/SignUp/Form/SignUpForm'
import {
  CLIENT_DASHBOARD_LINK,
  SIGN_IN_LINK,
} from '../services/constants/links'
import { axiosPost } from '../services/utilities/axios'
import {
  SIGN_IN_ENDPOINT,
  PATIENTS_ENDPOINT,
} from '../services/constants/endpoints'
import { setCookie } from '../services/utilities/cookie'
import useStyles from '../services/hooks/useStyles'
import { accessTokenCookie } from '../services/constants/cookies'
import useRedirect from '../services/hooks/useRedirect'

const Auth = () => {
  useRedirect()

  const location = useLocation()
  const { classes } = useStyles()

  const handleSignUp = (userInfo) => {
    axiosPost(PATIENTS_ENDPOINT, userInfo).then((response) => {
      console.log(response.data)
    })
  }

  const handleSignIn = (userInfo) => {
    axiosPost(SIGN_IN_ENDPOINT, userInfo).then((response) => {
      setCookie(
        accessTokenCookie,
        response.data.access_token,
        response.data.access_token_expiration
      )
      window.location.assign(CLIENT_DASHBOARD_LINK)
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
    <div className={classes.authWrapper}>
      <Paper className={classes.authForm} radius={0} p={30}>
        <Logo />
        <Title
          order={2}
          className={classes.authTitle}
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
