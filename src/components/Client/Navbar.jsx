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
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { TbLogout } from 'react-icons/tb'
import Logo from '../Logo'
import { HEADER_HEIGHT } from '../../services/constants/styles'
import useStyles from '../../services/hooks/useStyles'
import {
  CLIENT_DASHBOARD_LINK,
  CLIENT_DOCTORS_LINK,
  CLIENT_PATIENTS_LINK,
  CLIENT_DEPARTMENTS_LINK,
} from '../../services/constants/links'
import { adminNavLinks } from '../../services/constants/navLinks'

const Navbar = () => {
  const [opened, { toggle, close }] = useDisclosure(false)

  const [active, setActive] = useState('')

  const { classes, cx } = useStyles()

  const location = useLocation()

  const items = adminNavLinks.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link, {
        [classes.linkActive]: active === link.link,
      })}
      onClick={() => {
        setActive(link.link)
        close()
      }}
    >
      {link.label}
    </a>
  ))

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
      }
    }

    setActiveLink()
  }, [location])

  return (
    <Header height={HEADER_HEIGHT} mb={30} className={classes.root}>
      <Container size={1250} className={classes.header}>
        <Logo />

        <Group>
          <Group spacing={8} className={classes.links}>
            {items}
          </Group>

          <Divider orientation="vertical" />

          <Avatar color="cyan" radius="xl">
            MK
          </Avatar>
          <TbLogout size={24} color="gray" />
        </Group>

        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
        />

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  )
}

export default Navbar
