import { Button, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import { TbMedicalCross } from 'react-icons/tb'

const AddDepartmentForm = ({ onSubmit }) => {
  const form = useForm({
    initialValues: {
      name: '',
    },

    validate: {
      name: (value) => (value === '' ? 'Invalid name' : null),
    },
  })

  return (
    <form
      onSubmit={form.onSubmit((values) => {
        onSubmit({
          department: {
            name: values.name,
          },
        })
        form.reset()
      })}
    >
      <TextInput required label="Name" mb="xl" icon={<TbMedicalCross />} {...form.getInputProps('name')} />
      <Button variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }} fullWidth={true} type="submit">
        Submit
      </Button>
    </form>
  )
}

export default AddDepartmentForm
