import { TextInput, PasswordInput, Button, Text, Anchor } from '@mantine/core'
import { useForm } from '@mantine/form'
import { SIGN_UP_LINK } from '../../../services/constants/links'

const SignInForm = ({ handleSignIn }) => {
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },

    validate: {
      email: (value) => (value === '' ? 'Invalid email' : null),
      password: (value) => (value === '' ? 'Invalid password' : null),
    },
  })

  return (
    <>
      <form onSubmit={form.onSubmit((values) => handleSignIn(values))}>
        <TextInput label="Email" size="md" {...form.getInputProps('email')} />
        <PasswordInput
          label="Password"
          mt="md"
          size="md"
          {...form.getInputProps('password')}
        />
        <Button fullWidth mt="xl" size="md" type="submit">
          Sign in
        </Button>
        <Text align="center" mt="md">
          Don&apos;t have an account?{' '}
          <Anchor href={SIGN_UP_LINK} weight={700}>
            Sign up
          </Anchor>
        </Text>
      </form>
    </>
  )
}

export default SignInForm
