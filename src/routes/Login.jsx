import { Button, Group } from '@mantine/core'
import {
  startNavigationProgress,
  resetNavigationProgress,
  completeNavigationProgress,
} from '@mantine/nprogress'
import LoginForm from '../components/Login/Form/LoginForm'

const Login = () => {
  return (
    <>
      <LoginForm />
    </>
  )
}

export default Login
