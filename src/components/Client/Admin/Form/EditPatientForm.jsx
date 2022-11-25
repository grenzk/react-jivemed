import { useForm } from '@mantine/form'
import { Button, Group, TextInput, PasswordInput } from '@mantine/core'
import { TbUser, TbMail } from 'react-icons/tb'

const EditPatientForm = ({ patient, onSubmit }) => {
  const form = useForm({
    initialValues: {
      firstName: patient.first_name,
      lastName: patient.last_name,
      email: patient.email,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  })

  return (
    <form
      onSubmit={form.onSubmit((values) => {
        onSubmit({
          id: patient.id,
          values,
        })
        form.reset()
      })}
    >
      <Group mb="sm">
        <TextInput required label="First Name" icon={<TbUser />} {...form.getInputProps('firstName')} />
        <TextInput required label="Last Name" icon={<TbUser />} {...form.getInputProps('lastName')} />
      </Group>
      <TextInput required label="Email" mb="xl" icon={<TbMail />} {...form.getInputProps('email')} />
      <Button variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }} fullWidth={true} type="submit">
        Submit
      </Button>
    </form>
  )
}

export default EditPatientForm
