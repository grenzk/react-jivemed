import { useState, useEffect } from 'react'
import { useForm } from '@mantine/form'
import { Button, Group, TextInput, PasswordInput, MultiSelect } from '@mantine/core'
import { TbUser, TbMail, TbLock, TbReportMoney, TbMedicalCross } from 'react-icons/tb'
import { DEPARTMENTS_ENDPOINT } from '../../../../services/constants/endpoints'
import { axiosGet } from '../../../../services/utilities/axios'
import { headers } from '../../../../services/constants/headers'

const UpdateDoctorForm = ({ loading, doctor, onSubmit }) => {
  const [departments, setDepartments] = useState([])
  const [department, setDepartment] = useState(doctor.departments.map((department) => department.id))

  useEffect(() => {
    getDepartments()
  }, [])

  const form = useForm({
    initialValues: {
      firstName: doctor.user.first_name,
      lastName: doctor.user.last_name,
      email: doctor.user.email,
      password: '',
      doctorFee: doctor.doctor_fee.amount,
    },

    validate: {
      firstName: (value) => (value !== '' ? null : 'Invalid first name'),
      lastName: (value) => (value !== '' ? null : 'Invalid last name'),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
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
        const checkPassword = () => {
          if (values.password === '') {
            return {
              user: {
                first_name: values.firstName,
                last_name: values.lastName,
                email: values.email,
              },
              department: {
                department_id: department,
              },
              doctor_fee: {
                amount: values.doctorFee,
              },
            }
          } else {
            return {
              user: {
                first_name: values.firstName,
                last_name: values.lastName,
                email: values.email,
                password: values.password,
              },
              department: {
                department_id: department,
              },
              doctor_fee: {
                amount: values.doctorFee,
              },
            }
          }
        }

        onSubmit({
          id: doctor.user.id,
          values: checkPassword(),
        })
      })}
    >
      <Group mb="sm" grow>
        <TextInput required label="First Name" icon={<TbUser />} {...form.getInputProps('firstName')} />
        <TextInput required label="Last Name" icon={<TbUser />} {...form.getInputProps('lastName')} />
      </Group>
      <TextInput required label="Email" mb="sm" icon={<TbMail />} {...form.getInputProps('email')} />
      <PasswordInput label="Password" mb="sm" icon={<TbLock />} {...form.getInputProps('password')} />
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

export default UpdateDoctorForm
