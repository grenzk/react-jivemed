import { createStyles } from '@mantine/core'
import { HEADER_HEIGHT } from '../constants/styles'
import bgImage from '../../assets/img/sign-in.svg'

const useStyles = createStyles((theme) => ({
  // Root
  rootInner: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl * 4,
  },

  rootContent: {
    maxWidth: 480,
    marginRight: theme.spacing.xl * 3,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      marginRight: 0,
    },
  },

  rootTitle: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 50,
    lineHeight: 1.1,
    fontWeight: 900,

    [theme.fn.smallerThan('xs')]: {
      fontSize: 28,
    },
  },

  rootControl: {
    [theme.fn.smallerThan('xs')]: {
      flex: 1,
    },
  },

  rootImage: {
    flex: 1,

    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  // Root Navbar
  hiddenMobile: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  // Auth
  authWrapper: {
    minHeight: '100vh',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '105%',
    backgroundImage: `url(${bgImage})`,

    [`@media (min-width: ${theme.breakpoints.xl}px)`]: {
      backgroundPosition: '85%',
    },
  },

  authForm: {
    borderRight: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]}`,
    minHeight: '100vh',
    maxWidth: 450,
    paddingTop: 80,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: '100%',
    },
  },

  authTitle: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },

  // Admin Dashboard
  adminDashboardRoot: {
    padding: `0px ${theme.spacing.xl * 1.5}px`,
  },

  adminDashboardValue: {
    fontSize: 24,
    fontWeight: 700,
    lineHeight: 1,
  },

  adminDashboardIcon: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[4],
  },

  adminDashboardTitle: {
    fontWeight: 700,
    textTransform: 'uppercase',
  },

  // Navbar
  navbarRoot: {
    position: 'relative',
    zIndex: 1,
  },

  navbarDropdown: {
    position: 'absolute',
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  navbarHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },

  navbarLinks: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  navbarBurger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  navbarLink: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },

    [theme.fn.smallerThan('sm')]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  navbarLinkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({
        variant: 'light',
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    },
  },

  // Table
  tableHeader: {
    position: 'sticky',
    top: 0,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    transition: 'box-shadow 150ms ease',

    '&::after': {
      content: '""',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      borderBottom: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[2]}`,
    },
  },

  tableScrolled: {
    boxShadow: theme.shadows.sm,
  },
}))

export default useStyles
