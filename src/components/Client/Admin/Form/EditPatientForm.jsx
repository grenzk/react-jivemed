import { useForm } from '@mantine/form'
import { Button, Group, TextInput, PasswordInput } from '@mantine/core'
import { TbUser, TbMail } from 'react-icons/tb'

const EditPatientForm = ({ user, onSubmit }) => {
  const form = useForm({
    initialValues: {
      firstName: user.first_name,
      lastName: user.last_name,
      email: user.email,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  })

  return (
    <form
      onSubmit={form.onSubmit((values) => {
        onSubmit(values)
        form.reset()
      })}
    >
      <Group mb="sm">
        <TextInput
          required
          label="First Name"
          icon={<TbUser />}
          {...form.getInputProps('firstName')}
        />
        <TextInput
          required
          label="Last Name"
          icon={<TbUser />}
          {...form.getInputProps('lastName')}
        />
      </Group>
      <TextInput
        required
        label="Email"
        mb="xl"
        icon={<TbMail />}
        {...form.getInputProps('email')}
      />
      <Button
        variant="gradient"
        gradient={{ from: 'indigo', to: 'cyan' }}
        fullWidth={true}
        type="submit"
      >
        Submit
      </Button>
    </form>
  )
}

export default EditPatientForm
