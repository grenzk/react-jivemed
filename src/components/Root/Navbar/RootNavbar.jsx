import { createStyles, Header, Group, Button, Text, Divider, Box, Burger, Drawer, ScrollArea } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import Logo from '../../Logo'
import { SIGN_IN_LINK, SIGN_UP_LINK } from '../../../services/constants/links'
import useStyles from '../../../services/hooks/useStyles'

const RootNavbar = () => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false)
  const { classes, theme } = useStyles()

  const handleLogo = () => {
    window.location.assign('/')
  }

  const handleSignIn = () => {
    window.location.assign(SIGN_IN_LINK)
  }

  const handleSignUp = () => {
    window.location.assign(SIGN_UP_LINK)
  }

  return (
    <Box>
      <Header height={60} px="md">
        <Group position="apart" sx={{ height: '100%' }}>
          <Logo />
          <Group className={classes.hiddenMobile}>
            <Button variant="default" onClick={handleSignIn}>
              Sign in
            </Button>
            <Button onClick={handleSignUp}>Sign up</Button>
          </Group>
          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            className={classes.hiddenDesktop}
            color={theme.colors.gray[6]}
          />
        </Group>
      </Header>
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <ScrollArea xsx={{ height: 'calc(100vh - 60px)' }} mx="-md">
          <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />
          <Group position="center" grow pb="xl" px="md">
            <Button variant="default" onClick={handleSignIn}>
              Sign in
            </Button>
            <Button onClick={handleSignUp}>Sign up</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  )
}

export default RootNavbar
