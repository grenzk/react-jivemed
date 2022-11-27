import { useForm } from '@mantine/form'
import { Button, Group, TextInput } from '@mantine/core'
import { TbUser, TbCreditCard, TbCalendar, TbInfoCircle } from 'react-icons/tb'

const AddAppointmentForm = ({ loading, schedule, onSubmit }) => {
  const form = useForm({
    initialValues: {
      name: '',
      number: '',
      exp_month: '',
      exp_year: '',
      cvc: '',
    },

    validate: {
      name: (value) => (value !== '' ? null : 'Invalid first name'),
      number: (value) => (value !== '' ? null : 'Invalid last card number'),
      exp_month: (value) => (value !== '' ? null : 'Invalid month'),
      exp_year: (value) => (value !== '' ? null : 'Invalid year'),
      cvc: (value) => (value !== '' ? null : 'Invalid CVC'),
    },
  })

  return (
    <form
      onSubmit={form.onSubmit((values) => {
        onSubmit({
          card: {
            name: values.name,
            number: values.number,
            exp_month: values.exp_month,
            exp_year: values.exp_year,
            cvc: values.cvc,
          },
          appointment: {
            schedule_id: schedule.id,
          },
        })
        form.reset()
      })}
    >
      <TextInput required label="Name on card" mb="sm" icon={<TbUser />} {...form.getInputProps('name')} />
      <TextInput
        required
        label="Card number"
        mb="sm"
        type="number"
        icon={<TbCreditCard />}
        {...form.getInputProps('number')}
      />
      <Group grow>
        <TextInput
          required
          label="Month"
          mb="sm"
          type="number"
          min="01"
          max="12"
          icon={<TbCalendar />}
          {...form.getInputProps('exp_month')}
        />
        <TextInput
          required
          label="Year"
          mb="sm"
          type="number"
          min={new Date().getFullYear().toString()}
          icon={<TbCalendar />}
          {...form.getInputProps('exp_year')}
        />
      </Group>
      <TextInput
        required
        label="CVC/CVV"
        mb="xl"
        type="number"
        icon={<TbInfoCircle />}
        {...form.getInputProps('cvc')}
      />
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

export default AddAppointmentForm
