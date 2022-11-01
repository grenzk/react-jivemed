import {
  TextInput,
  PasswordInput,
  Button,
  Text,
  Anchor,
  Group,
} from '@mantine/core'
import { SIGN_IN_LINK } from '../../../services/constants/links'

const SignUpForm = () => {
  return (
    <>
      <Group grow>
        <TextInput label="First Name" size="md" />
        <TextInput label="Last Name" size="md" />
      </Group>
      <TextInput label="Email" mt="md" size="md" />
      <Group grow>
        <PasswordInput label="Password" mt="md" size="md" />
        <PasswordInput label="Confirm Password" mt="md" size="md" />
      </Group>
      <Button fullWidth mt="xl" size="md">
        Sign up
      </Button>
      <Text align="center" mt="md">
        Already have an account?{' '}
        <Anchor href={SIGN_IN_LINK} weight={700}>
          Sign in
        </Anchor>
      </Text>
    </>
  )
}

export default SignUpForm
