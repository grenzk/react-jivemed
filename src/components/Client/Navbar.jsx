import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import {
  Header,
  Container,
  Group,
  Burger,
  Paper,
  Transition,
  Avatar,
  Divider,
  ActionIcon,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { TbLogout } from 'react-icons/tb'
import Logo from '../Logo'
import { HEADER_HEIGHT } from '../../services/constants/styles'
import useStyles from '../../services/hooks/useStyles'
import {
  CLIENT_DASHBOARD_LINK,
  CLIENT_PATIENTS_LINK,
  CLIENT_DOCTORS_LINK,
  CLIENT_DEPARTMENTS_LINK,
  CLIENT_AVAILABLE_SCHEDULES_LINK,
  CLIENT_APPOINTMENTS_LINK,
  CLIENT_TRANSACTIONS_LINK,
} from '../../services/constants/links'
import {
  adminNavLinks,
  userNavLinks,
  doctorNavLinks,
} from '../../services/constants/navLinks'

const Navbar = ({ role }) => {
  const [opened, { toggle, close }] = useDisclosure(false)

  const [active, setActive] = useState('')
  const [navLinks, setNavLinks] = useState([])

  const { classes, cx } = useStyles()

  const location = useLocation()

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

  const showItems = () => {
    return navLinks.map((link) => (
      <a
        key={link.label}
        href={link.link}
        className={cx(classes.navbarLink, {
          [classes.navbarLinkActive]: active === link.link,
        })}
        onClick={() => {
          setActive(link.link)
          close()
        }}
      >
        {link.label}
      </a>
    ))
  }

  return (
    <Header height={HEADER_HEIGHT} mb={30} className={classes.navbarRoot}>
      <Container size={1250} className={classes.navbarHeader}>
        <Logo />

        <Group>
          <Group spacing={8} className={classes.navbarLinks}>
            {showItems()}
          </Group>

          <Divider orientation="vertical" />

          <Avatar color="cyan" radius="xl">
            MK
          </Avatar>
          <ActionIcon>
            <TbLogout size={18} />
          </ActionIcon>
        </Group>

        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.navbarBurger}
          size="sm"
        />

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.navbarDropdown} withBorder style={styles}>
              {showItems()}
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  )
}

export default Navbar
