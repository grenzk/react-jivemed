import { TextInput, PasswordInput, Button, Text, Anchor } from '@mantine/core'
import { useForm } from '@mantine/form'
import { TbMail, TbLock } from 'react-icons/tb'
import { SIGN_UP_LINK } from '../../../services/constants/links'

const SignInForm = ({ loading, handleSignIn }) => {
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

  const submitForm = (values) => handleSignIn({ user: values })

  return (
    <form
      onKeyDown={(event) => {
        if (event.key === 'Enter') {
          form.onSubmit((values) => {
            submitForm(values)
            form.reset()
          })
        }
      }}
      onSubmit={form.onSubmit((values) => {
        submitForm(values)
        form.reset()
      })}
    >
      <TextInput label="Email" size="md" icon={<TbMail />} {...form.getInputProps('email')} />
      <PasswordInput label="Password" mt="md" size="md" icon={<TbLock />} {...form.getInputProps('password')} />
      <Button fullWidth mt="xl" size="md" type="submit" loading={loading}>
        Sign in
      </Button>
      <Text align="center" mt="md">
        Don&apos;t have an account?{' '}
        <Anchor href={SIGN_UP_LINK} weight={700}>
          Sign up
        </Anchor>
      </Text>
    </form>
  )
}

export default SignInForm
