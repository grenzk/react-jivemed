import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Header, Container, Group, Burger, Paper, Transition, Avatar, Divider, ActionIcon, Modal } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { TbLogout } from 'react-icons/tb'
import Logo from '../Logo'
import AccountSettings from './AccountSettings/AccountSettings'
import { HEADER_HEIGHT } from '../../services/constants/styles'
import useStyles from '../../services/hooks/useStyles'
import {
  SIGN_IN_LINK,
  CLIENT_DASHBOARD_LINK,
  CLIENT_PATIENTS_LINK,
  CLIENT_DOCTORS_LINK,
  CLIENT_DEPARTMENTS_LINK,
  CLIENT_SCHEDULES_LINK,
  CLIENT_AVAILABLE_SCHEDULES_LINK,
  CLIENT_APPOINTMENTS_LINK,
  CLIENT_TRANSACTIONS_LINK,
} from '../../services/constants/links'
import { adminNavLinks, userNavLinks, doctorNavLinks } from '../../services/constants/navLinks'
import { deleteCookie } from '../../services/utilities/cookie'
import { accessTokenCookie } from '../../services/constants/cookies'

const Navbar = ({ user, avatar, role, onDisplayUser }) => {
  const [opened, { toggle, close }] = useDisclosure(false)

  const [active, setActive] = useState('')
  const [navLinks, setNavLinks] = useState([])
  const [modalOpened, setModalOpened] = useState(false)

  const { classes, cx } = useStyles()

  const location = useLocation()

  const navigate = useNavigate()

  useEffect(() => {
    const getNavLinks = () => {
      switch (role) {
        case 'admin':
          setNavLinks(adminNavLinks)
          break
        case 'patient':
          setNavLinks(userNavLinks)
          break
        case 'doctor':
          setNavLinks(doctorNavLinks)
      }
    }

    getNavLinks()
  }, [role])

  useEffect(() => {
    const setActiveLink = () => {
      switch (location.pathname) {
        case CLIENT_DASHBOARD_LINK:
          setActive(CLIENT_DASHBOARD_LINK)
          break
        case CLIENT_DOCTORS_LINK:
          setActive(CLIENT_DOCTORS_LINK)
          break
        case CLIENT_PATIENTS_LINK:
          setActive(CLIENT_PATIENTS_LINK)
          break
        case CLIENT_DEPARTMENTS_LINK:
          setActive(CLIENT_DEPARTMENTS_LINK)
          break
        case CLIENT_SCHEDULES_LINK:
          setActive(CLIENT_SCHEDULES_LINK)
          break
        case CLIENT_AVAILABLE_SCHEDULES_LINK:
          setActive(CLIENT_AVAILABLE_SCHEDULES_LINK)
          break
        case CLIENT_APPOINTMENTS_LINK:
          setActive(CLIENT_APPOINTMENTS_LINK)
          break
        case CLIENT_TRANSACTIONS_LINK:
          setActive(CLIENT_TRANSACTIONS_LINK)
          break
      }
    }

    setActiveLink()
  }, [location])

  const signOut = () => {
    deleteCookie(accessTokenCookie)
    window.location.assign(SIGN_IN_LINK)
  }

  const items = navLinks.map((link) => (
    <a
      key={link.label}
      className={cx(classes.navbarLink, {
        [classes.navbarLinkActive]: active === link.link,
      })}
      onClick={() => {
        setActive(link.link)
        navigate(link.link)
        close()
      }}
    >
      {link.label}
    </a>
  ))

  return (
    <>
      <Header height={HEADER_HEIGHT} mb={30} className={classes.navbarRoot}>
        <Container size={1250} className={classes.navbarHeader}>
          <Logo />
          <Group>
            <Group spacing={8} className={classes.navbarLinks}>
              {items}
            </Group>
            <Divider orientation="vertical" />
            <ActionIcon onClick={() => setModalOpened(true)}>
              <Avatar color="cyan" radius="xl">
                {avatar}
              </Avatar>
            </ActionIcon>
            <ActionIcon onClick={signOut}>
              <TbLogout size={18} />
            </ActionIcon>
          </Group>
          <Burger opened={opened} onClick={toggle} className={classes.navbarBurger} size="sm" />
          <Transition transition="pop-top-right" duration={200} mounted={opened}>
            {(styles) => (
              <Paper className={classes.navbarDropdown} withBorder style={styles}>
                {items}
              </Paper>
            )}
          </Transition>
        </Container>
      </Header>
      <Modal opened={modalOpened} onClose={() => setModalOpened(false)} title="Account Settings" fullScreen>
        <AccountSettings user={user} role={role} onDisplayUser={onDisplayUser} />
      </Modal>
    </>
  )
}

export default Navbar
