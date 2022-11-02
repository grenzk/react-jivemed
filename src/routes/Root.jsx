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
import { TbCheck } from 'react-icons/tb'
import image from '../assets/img/hero.svg'

const useStyles = createStyles((theme) => ({
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
    fontSize: 50,
    lineHeight: 1.1,
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
              Skip the lines, and meet your doctor
            </Title>
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
