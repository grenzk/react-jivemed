import { useLocation, useNavigate } from 'react-router-dom'
import { Paper, Title } from '@mantine/core'
import Logo from '../components/Logo'
import SignInForm from '../components/SignIn/Form/SignInForm'
import SignUpForm from '../components/SignUp/Form/SignUpForm'
import { showSuccessNotification, showErrorNotification } from '../components/Notification'
import {
  CLIENT_DASHBOARD_LINK,
  CLIENT_SCHEDULES_LINK,
  CLIENT_AVAILABLE_SCHEDULES_LINK,
  SIGN_IN_LINK,
  VERIFY_EMAIL_LINK,
} from '../services/constants/links'
import { SIGN_IN_ENDPOINT, PATIENTS_ENDPOINT } from '../services/constants/endpoints'
import { accessTokenCookie } from '../services/constants/cookies'
import { setCookie } from '../services/utilities/cookie'
import { axiosPost } from '../services/utilities/axios'
import useStyles from '../services/hooks/useStyles'
import useRedirect from '../services/hooks/useRedirect'

const Auth = () => {
  useRedirect()

  const location = useLocation()

  const navigate = useNavigate()

  const { classes } = useStyles()

  const handleSignUp = (user) => {
    axiosPost(PATIENTS_ENDPOINT, user).then((response) => {
      if (response.status === 201) {
        navigate(SIGN_IN_LINK)
        showSuccessNotification('A confirmation email has been sent!')
      } else {
        showErrorNotification(response.response.data.errors.messages)
      }
    })
  }

  const handleSignIn = (user) => {
    axiosPost(SIGN_IN_ENDPOINT, user).then((response) => {
      if (response.status === 200) {
        setCookie(accessTokenCookie, response.data.access_token, response.data.access_token_expiration)

        if (response.data.user.email_verified) {
          switch (response.data.role.name) {
            case 'admin':
              window.location.assign(CLIENT_DASHBOARD_LINK)
              break
            case 'doctor':
              window.location.assign(CLIENT_APPOINTMENTS_LINK)
              break
            case 'patient':
              window.location.assign(CLIENT_APPOINTMENTS_LINK)
              break
          }
        } else {
          window.location.assign(VERIFY_EMAIL_LINK)
        }
      } else {
        showErrorNotification(response.response.data.errors.messages)
      }
    })
  }

  const displayTitle = () => (location.pathname === SIGN_IN_LINK ? 'Welcome back!' : 'Create an account')

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
        <Title order={2} className={classes.authTitle} align="center" mt="md" mb={50}>
          {displayTitle()}
        </Title>
        {displayForm()}
      </Paper>
    </div>
  )
}

export default Auth
