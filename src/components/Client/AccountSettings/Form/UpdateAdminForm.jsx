import { useForm } from '@mantine/form'
import { Button, Group, TextInput, PasswordInput } from '@mantine/core'
import { TbUser, TbMail, TbLock } from 'react-icons/tb'

const UpdateAdminForm = ({ loading, admin, onSubmit }) => {
  const form = useForm({
    initialValues: {
      firstName: admin.first_name,
      lastName: admin.last_name,
      password: '',
      email: admin.email,
    },

    validate: {
      firstName: (value) => (value !== '' ? null : 'Invalid first name'),
      lastName: (value) => (value !== '' ? null : 'Invalid last name'),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  })

  return (
    <form
      onSubmit={form.onSubmit((values) => {
        const checkPassword = () => {
          if (values.password === '') {
            return {
              user: {
                first_name: values.firstName,
                last_name: values.lastName,
                email: values.email,
              },
            }
          } else {
            return {
              user: {
                first_name: values.firstName,
                last_name: values.lastName,
                password: values.password,
                email: values.email,
              },
            }
          }
        }

        onSubmit({
          id: admin.id,
          values: checkPassword(),
        })
      })}
    >
      <Group mb="sm" grow>
        <TextInput required label="First Name" icon={<TbUser />} {...form.getInputProps('firstName')} />
        <TextInput required label="Last Name" icon={<TbUser />} {...form.getInputProps('lastName')} />
      </Group>
      <TextInput required label="Email" mb="xl" icon={<TbMail />} {...form.getInputProps('email')} />
      <PasswordInput label="Password" mb="xl" icon={<TbLock />} {...form.getInputProps('password')} />
      <Button
        variant="gradient"
        gradient={{ from: 'indigo', to: 'cyan' }}
        fullWidth={true}
        type="submit"
        loading={loading}
      >
        Submit
      </Button>
    </form>
  )
}

export default UpdateAdminForm
