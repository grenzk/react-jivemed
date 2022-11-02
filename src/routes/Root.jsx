import {
  createStyles,
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
} from '@mantine/core'
import RootNavbar from '../components/Root/Navbar/RootNavbar.jsx'
import { SIGN_UP_LINK } from '../services/constants/links.js'
// import { IconCheck } from '@tabler/icons';
import image from '../assets/img/hero.svg'
import bgImage from '../assets/img/calendar.svg'

const useStyles = createStyles((theme) => ({
  root: {
    backgroundSize: '40rem',
    backgroundPosition: 'right',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${bgImage})`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl * 4,
  },

  content: {
    maxWidth: 480,
    marginRight: theme.spacing.xl * 3,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan('xs')]: {
      fontSize: 28,
    },
  },

  control: {
    [theme.fn.smallerThan('xs')]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  highlight: {
    position: 'relative',
    backgroundColor: theme.fn.variant({
      variant: 'light',
      color: theme.primaryColor,
    }).background,
    borderRadius: theme.radius.sm,
    padding: '4px 12px',
  },
}))

const Root = () => {
  const { classes } = useStyles()

  const handleGetStarted = () => window.location.assign(SIGN_UP_LINK)

  return (
    <div className={classes.root}>
      <RootNavbar />
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              A <span className={classes.highlight}>modern</span> React <br />{' '}
              components library
            </Title>
            <Text color="dimmed" mt="md">
              Build fully functional accessible web applications faster than
              ever – Mantine includes more than 120 customizable components and
              hooks to cover you in any situation
            </Text>

            <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon size={20} radius="xl">
                  {/* <IconCheck size={12} stroke={1.5} /> */}
                </ThemeIcon>
              }
            >
              <List.Item>
                <b>TypeScript based</b> – build type safe applications, all
                components and hooks export types
              </List.Item>
              <List.Item>
                <b>Free and open source</b> – all packages have MIT license, you
                can use Mantine in any project
              </List.Item>
              <List.Item>
                <b>No annoying focus ring</b> – focus ring will appear only when
                user navigates with keyboard
              </List.Item>
            </List>

            <Group mt={30}>
              <Button
                size="md"
                className={classes.control}
                onClick={handleGetStarted}
              >
                Get started
              </Button>
              <Button variant="default" size="md" className={classes.control}>
                Source code
              </Button>
            </Group>
          </div>
          <Image
            src={image}
            className={classes.image}
            width={400}
            height={400}
          />
        </div>
      </Container>
    </div>
  )
}

export default Root
