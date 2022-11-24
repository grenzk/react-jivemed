import { useForm } from '@mantine/form'
import { Button, Group, TextInput, PasswordInput } from '@mantine/core'
import { TbUser, TbMail, TbLock } from 'react-icons/tb'

const AddPatientForm = ({ onSubmit }) => {
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
        onSubmit({
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
      <Group mb="sm">
        <TextInput required label="First Name" icon={<TbUser />} {...form.getInputProps('firstName')} />
        <TextInput required label="Last Name" icon={<TbUser />} {...form.getInputProps('lastName')} />
      </Group>
      <TextInput required label="Email" mb="sm" icon={<TbMail />} {...form.getInputProps('email')} />
      <PasswordInput required label="Password" mb="xl" icon={<TbLock />} {...form.getInputProps('password')} />
      <Button variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }} fullWidth={true} type="submit">
        Submit
      </Button>
    </form>
  )
}

export default AddPatientForm
