import { useState, useEffect } from 'react'
import { useForm } from '@mantine/form'
import { Button, Group, TextInput, PasswordInput, MultiSelect } from '@mantine/core'
import { TbUser, TbMail, TbLock, TbReportMoney, TbMedicalCross } from 'react-icons/tb'
import { DEPARTMENTS_ENDPOINT } from '../../../../services/constants/endpoints'
import { axiosGet } from '../../../../services/utilities/axios'
import { headers } from '../../../../services/constants/headers'

const AddDoctorForm = ({ loading, onSubmit }) => {
  const [departments, setDepartments] = useState([])
  const [department, setDepartment] = useState([])

  useEffect(() => {
    getDepartments()
  }, [])

  const form = useForm({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      doctorFee: '',
    },

    validate: {
      firstName: (value) => (value !== '' ? null : 'Invalid first name'),
      lastName: (value) => (value !== '' ? null : 'Invalid last name'),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) => (value !== '' ? null : 'Invalid password'),
      doctorFee: (value) => (value !== '' ? null : 'Invalid amount'),
    },
  })

  const getDepartments = () => {
    axiosGet(DEPARTMENTS_ENDPOINT, headers).then((response) => {
      if (response.status === 200) {
        setDepartments(
          response.data.departments.map((department) => {
            return {
              value: department.id,
              label: department.name,
            }
          })
        )
      } else {
        showErrorNotification(response.response.data.errors.messages)
      }
    })
  }

  return (
    <form
      onSubmit={form.onSubmit((values) => {
        onSubmit({
          user: {
            first_name: values.firstName,
            last_name: values.lastName,
            password: values.password,
            email: values.email,
          },
          department: {
            department_id: department,
          },
          doctor_fee: {
            amount: values.doctorFee,
          },
        })
        form.reset()
        setDepartment([])
      })}
    >
      <Group mb="sm" grow>
        <TextInput required label="First Name" icon={<TbUser />} {...form.getInputProps('firstName')} />
        <TextInput required label="Last Name" icon={<TbUser />} {...form.getInputProps('lastName')} />
      </Group>
      <TextInput required label="Email" mb="sm" icon={<TbMail />} {...form.getInputProps('email')} />
      <PasswordInput required mb="sm" label="Password" icon={<TbLock />} {...form.getInputProps('password')} />
      <TextInput
        required
        mb="sm"
        label="Doctor Fee"
        type="number"
        step="0.01"
        min="100"
        icon={<TbReportMoney />}
        {...form.getInputProps('doctorFee')}
      />
      <MultiSelect
        required
        mb="xl"
        label="Department"
        icon={<TbMedicalCross />}
        data={departments}
        value={department}
        onChange={setDepartment}
        limit={20}
        maxDropdownHeight={160}
        clearable
        searchable
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

export default AddDoctorForm
