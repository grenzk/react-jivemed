import { Button, Group } from '@mantine/core'
import {
  startNavigationProgress,
  resetNavigationProgress,
  completeNavigationProgress,
} from '@mantine/nprogress'
import SignInForm from '../components/SignIn/Form/SignInForm'

const SignIn = () => {
  return (
    <>
      <SignInForm />
    </>
  )
}

export default SignIn
