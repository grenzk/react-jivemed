import { Group, Text, Button } from '@mantine/core'
const DeleteScheduleForm = ({ schedule, onSubmit }) => {
  return (
    <>
      <Group mb="xl">
        <Text>Are you sure you want to delete this?</Text>
      </Group>
      <Group position="right">
        <Button color="red" onClick={() => onSubmit(schedule.user.id)}>
          Delete
        </Button>
      </Group>
    </>
  )
}

export default DeleteScheduleForm
