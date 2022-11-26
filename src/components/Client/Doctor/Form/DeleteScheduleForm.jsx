import { Group, Text, Button } from '@mantine/core'
const DeleteScheduleForm = ({ loading, schedule, onSubmit }) => {
  return (
    <>
      <Group mb="xl">
        <Text>Are you sure you want to delete this?</Text>
      </Group>
      <Group position="right">
        <Button color="red" onClick={() => onSubmit(schedule.schedule.id)} loading={loading}>
          Delete
        </Button>
      </Group>
    </>
  )
}

export default DeleteScheduleForm
