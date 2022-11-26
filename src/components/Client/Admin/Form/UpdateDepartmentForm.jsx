import { Button, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import { TbMedicalCross } from 'react-icons/tb'

const UpdateDepartmentForm = ({ loading, department, onSubmit }) => {
  const form = useForm({
    initialValues: {
      name: department.name,
    },

    validate: {
      name: (value) => (value === '' ? 'Invalid name' : null),
    },
  })

  return (
    <form
      onSubmit={form.onSubmit((values) => {
        onSubmit({
          id: department.id,
          values: {
            department: {
              name: values.name,
            },
          },
        })
      })}
    >
      <TextInput required label="Name" mb="xl" icon={<TbMedicalCross />} {...form.getInputProps('name')} />
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

export default UpdateDepartmentForm
