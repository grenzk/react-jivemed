import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Header, Container, Group, Avatar, Divider, ActionIcon } from '@mantine/core'
import { Center, Title, Text, Button } from '@mantine/core'
import { TbLogout } from 'react-icons/tb'
import Logo from '../../components/Logo'
import { showSuccessNotification, showErrorNotification } from '../../components/Notification'
import { HEADER_HEIGHT } from '../../services/constants/styles'
import useStyles from '../../services/hooks/useStyles'
import { SIGN_IN_LINK } from '../../services/constants/links'
import { deleteCookie } from '../../services/utilities/cookie'
import { accessTokenCookie } from '../../services/constants/cookies'
import { REQUEST_EMAIL_TOKEN_ENDPOINT } from '../../services/constants/endpoints'
import { axiosGet } from '../../services/utilities/axios'
import { headers } from '../../services/constants/headers'

const VerifyEmail = ({ avatar, email }) => {
  const { classes } = useStyles()

  const signOut = () => {
    deleteCookie(accessTokenCookie)
    window.location.assign(SIGN_IN_LINK)
  }

  const handleResendEmail = () => {
    axiosGet(REQUEST_EMAIL_TOKEN_ENDPOINT, headers).then((response) =>
      response.status === 200
        ? showSuccessNotification('A confirmation email has been sent!')
        : showErrorNotification(response.response.data.errors.messages)
    )
  }

  return (
    <>
      <Header height={HEADER_HEIGHT} mb={30} className={classes.navbarRoot}>
        <Container size={1250} className={classes.navbarHeader}>
          <Logo />
          <Group>
            <Divider orientation="vertical" />
            <ActionIcon>
              <Avatar color="cyan" radius="xl">
                {avatar}
              </Avatar>
            </ActionIcon>
            <ActionIcon onClick={signOut}>
              <TbLogout size={18} />
            </ActionIcon>
          </Group>
        </Container>
      </Header>
      <Title align="center" order={2}>
        Please verify your email
      </Title>
      <Text color="dimmed" size="sm" align="center" mt="md">
        We sent an email to <b>{email}</b>
      </Text>
      <Text color="dimmed" size="sm" align="center" mt="md">
        Still can&apos;t find the email?
      </Text>
      <Center style={{ marginTop: '16px' }}>
        <Button onClick={handleResendEmail}>Resend Email</Button>
      </Center>
    </>
  )
}

export default VerifyEmail
