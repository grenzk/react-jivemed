import { useState, useEffect } from 'react'
import { Table, ScrollArea, Center, Paper, Title, Stack, Group } from '@mantine/core'
import { USER_TRANSACTIONS_ENDPOINT } from '../../../../services/constants/endpoints'
import { headers } from '../../../../services/constants/headers'
import { axiosGet } from '../../../../services/utilities/axios'
import useStyles from '../../../../services/hooks/useStyles'

const PatientTransactionsTable = () => {
  const { classes, cx } = useStyles()

  const [scrolled, setScrolled] = useState(false)
  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    getPatients()
  }, [])

  const rows = transactions.map((transaction, index) => (
    <tr key={index}>
      <td>{transaction.user.id.toString()}</td>
      <td>{transaction.details.stripe_id}</td>
      <td>
        {parseFloat(transaction.details.amount).toLocaleString('en-US', {
          style: 'currency',
          currency: 'PHP',
        })}
      </td>
      <td>{new Date(transaction.details.created_at).toLocaleString('en-US', { hour12: false })}</td>
    </tr>
  ))

  const getPatients = () => {
    axiosGet(USER_TRANSACTIONS_ENDPOINT, headers).then((response) =>
      response.status === 200
        ? setTransactions(response.data.user_transactions)
        : showErrorNotification(response.response.data.errors.messages)
    )
  }

  return (
    <>
      <Center>
        <Stack>
          <Group position="apart">
            <Title order={2}>Transactions</Title>
          </Group>
          <Paper shadow="xs" p="md">
            <ScrollArea sx={{ height: 450 }} onScrollPositionChange={({ y }) => setScrolled(y !== 0)}>
              <Table sx={{ minWidth: 1000 }} verticalSpacing="md">
                <thead
                  className={cx(classes.header, {
                    [classes.scrolled]: scrolled,
                  })}
                >
                  <tr>
                    <th>Id</th>
                    <th>Stripe Id</th>
                    <th>Name</th>
                    <th>Created At</th>
                  </tr>
                </thead>
                <tbody>{rows}</tbody>
              </Table>
            </ScrollArea>
          </Paper>
        </Stack>
      </Center>
    </>
  )
}

export default PatientTransactionsTable
