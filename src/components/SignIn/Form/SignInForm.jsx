import { TextInput, PasswordInput, Button, Text, Anchor } from '@mantine/core'
import { SIGN_UP_LINK } from '../../../services/constants/links'

const SignInForm = () => {
  return (
    <>
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
    </>
  )
}

export default SignInForm
