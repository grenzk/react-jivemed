import { Button, Group } from '@mantine/core'
import {
  startNavigationProgress,
  resetNavigationProgress,
  completeNavigationProgress,
} from '@mantine/nprogress'
import SignUpForm from '../components/SignUp/Form/SignUpForm'

const SignUp = () => {
  return (
    <>
      <SignUpForm />
    </>
  )
}

export default SignUp
