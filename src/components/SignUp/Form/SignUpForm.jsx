import {
  Paper,
  createStyles,
  TextInput,
  PasswordInput,
  Button,
  Title,
  Text,
  Anchor,
  Group,
} from '@mantine/core'
import { LOGIN_LINK } from '../../../services/constants/links'

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: '100vh',
    backgroundSize: 'cover',
    backgroundImage:
      'url(https://images.unsplash.com/photo-1484242857719-4b9144542727?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&q=80)',
  },

  form: {
    borderRight: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
    minHeight: '100vh',
    maxWidth: 450,
    paddingTop: 80,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: '100%',
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  logo: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    width: 120,
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}))

const SignUpForm = () => {
  const { classes } = useStyles()

  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30}>
        <Title
          order={2}
          className={classes.title}
          align="center"
          mt="md"
          mb={50}
        >
          Create an account
        </Title>
        <Group grow>
          <TextInput label="First Name" mt="md" size="md" />
          <TextInput label="Last Name" mt="md" size="md" />
        </Group>
        <TextInput label="Email" mt="md" size="md" />
        <Group grow>
          <PasswordInput label="Password" mt="md" size="md" />
          <PasswordInput label="Confirm Password" mt="md" size="md" />
        </Group>
        <Button fullWidth mt="xl" size="md">
          Sign up
        </Button>
        <Text align="center" mt="md">
          Already have an account?{' '}
          <Anchor href={LOGIN_LINK} weight={700}>
            Log in
          </Anchor>
        </Text>
      </Paper>
    </div>
  )
}

export default SignUpForm
