import { useLocation } from 'react-router-dom'
import { Paper, Title } from '@mantine/core'
import Logo from '../components/Logo'
import SignInForm from '../components/SignIn/Form/SignInForm'
import SignUpForm from '../components/SignUp/Form/SignUpForm'
import { SIGN_IN_LINK } from '../services/constants/links'
import { axiosPost } from '../services/utilities/axios'
import {
  USER_SIGN_IN_ENDPOINT,
  USER_SIGN_UP_ENDPOINT,
} from '../services/constants/endpoints'
import { setCookie } from '../services/utilities/cookie'
import useStyles from '../services/hooks/useStyles'

const Auth = () => {
  const location = useLocation()
  const { classes } = useStyles()

  const handleSignUp = (userInfo) => {
    axiosPost(USER_SIGN_UP_ENDPOINT, userInfo).then((response) => {
      console.log(response.data)
    })
  }

  const handleSignIn = (userInfo) => {
    axiosPost(USER_SIGN_IN_ENDPOINT, userInfo).then((response) => {
      setCookie(
        'access_token',
        response.data.access_token,
        response.data.access_token_expiration
      )
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
