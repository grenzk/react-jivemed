import { TextInput, PasswordInput, Button, Text, Anchor, Group } from '@mantine/core'
import { useForm } from '@mantine/form'
import { TbUser, TbMail, TbLock } from 'react-icons/tb'
import { SIGN_IN_LINK } from '../../../services/constants/links'

const SignUpForm = ({ handleSignUp }) => {
  const form = useForm({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },

    validate: {
      firstName: (value) => (value !== '' ? null : 'Invalid first name'),
      lastName: (value) => (value !== '' ? null : 'Invalid last name'),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) => (value != '' ? null : 'Invalid password'),
    },
  })

  return (
    <form
      onSubmit={form.onSubmit((values) => {
        handleSignUp({
          user: {
            first_name: values.firstName,
            last_name: values.lastName,
            email: values.email,
            password: values.password,
          },
        })
        form.reset()
      })}
    >
      <Group align="baseline" grow>
        <TextInput label="First Name" size="md" icon={<TbUser />} {...form.getInputProps('firstName')} />
        <TextInput label="Last Name" size="md" icon={<TbUser />} {...form.getInputProps('lastName')} />
      </Group>
      <TextInput label="Email" mt="md" size="md" icon={<TbMail />} {...form.getInputProps('email')} />
      <PasswordInput label="Password" mt="md" size="md" icon={<TbLock />} {...form.getInputProps('password')} />
      <Button fullWidth mt="xl" size="md" type="submit">
        Sign up
      </Button>
      <Text align="center" mt="md">
        Already have an account?{' '}
        <Anchor href={SIGN_IN_LINK} weight={700}>
          Sign in
        </Anchor>
      </Text>
    </form>
  )
}

export default SignUpForm
