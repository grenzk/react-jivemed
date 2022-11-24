import { Image, Container, Title, Button, Group, Text, List, ThemeIcon } from '@mantine/core'
import RootNavbar from '../components/Root/Navbar/RootNavbar'
import { SIGN_UP_LINK } from '../services/constants/links'
import { TbCheck } from 'react-icons/tb'
import image from '../assets/img/hero.svg'
import useStyles from '../services/hooks/useStyles'
import useRedirect from '../services/hooks/useRedirect'

const Root = () => {
  useRedirect()

  const { classes } = useStyles()

  const handleGetStarted = () => window.location.assign(SIGN_UP_LINK)

  return (
    <div>
      <RootNavbar />
      <Container>
        <div className={classes.rootInner}>
          <div className={classes.rootContent}>
            <Title className={classes.rootTitle}>Skip the lines, and meet your doctor</Title>
            <Text color="dimmed" mt="xl" size="lg">
              No stress added. Focus on what really matters.
              <br />
              Getting your health checked.
            </Text>

            <List
              mt={30}
              spacing="sm"
              size="md"
              icon={
                <ThemeIcon size={20} radius="xl">
                  <TbCheck size={12} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <b>Fast and easy</b>
              </List.Item>
              <List.Item>
                <b>Pay your appointments online</b>
              </List.Item>
              <List.Item>
                <b>Choose your preferred doctor based on your availability</b>
              </List.Item>
            </List>

            <Group mt={30}>
              <Button size="md" className={classes.rootControl} onClick={handleGetStarted}>
                Get started
              </Button>
            </Group>
          </div>
          <Image src={image} className={classes.rootImage} width={400} height={400} />
        </div>
      </Container>
    </div>
  )
}

export default Root
