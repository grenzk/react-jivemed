import { useState } from 'react'
import { DatePicker } from '@mantine/dates'
import { Button } from '@mantine/core'

const AddScheduleForm = ({ loading, onSubmit }) => {
  const [value, setValue] = useState(new Date())
  const [error, setError] = useState('')

  return (
    <>
      <DatePicker
        required
        value={value}
        onChange={setValue}
        mb="xl"
        label="Schedule"
        firstDayOfWeek="sunday"
        withAsterisk
        error={error}
      />
      <Button
        variant="gradient"
        gradient={{ from: 'indigo', to: 'cyan' }}
        fullWidth={true}
        onClick={() => {
          if (value === '') {
            setError('Invalid date.')
          } else {
            onSubmit({
              schedule: { date: new Date(value).toLocaleDateString('en-CA') },
            })
            setValue()
          }
        }}
        loading={loading}
      >
        Submit
      </Button>
    </>
  )
}

export default AddScheduleForm
