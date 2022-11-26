import { Group, Text, Button } from '@mantine/core'
const DeleteDepartmentForm = ({ loading, department, onSubmit }) => {
  return (
    <>
      <Group mb="xl">
        <Text>Are you sure you want to delete this?</Text>
      </Group>
      <Group position="right">
        <Button color="red" onClick={() => onSubmit(department.id)} loading={loading}>
          Delete
        </Button>
      </Group>
    </>
  )
}

export default DeleteDepartmentForm
