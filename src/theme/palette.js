import { colors } from '@material-ui/core'

export default {
  primary: {
    main: '#013aad',
    light: '#013aad',
    contrastText: '#013aad'
  },
  secondary: {
    main: '#032873',
    light: '#061940',
    contrastText: '#032873'
  },
  success: {
    contrastText: '#013aad',
    dark: '#013aad', // TODO: add dark key in primary object in the library,
    main: '#013aad',
    light: '#013aad'
  },
  info: {
    contrastText: '#013aad',
    dark: colors.blue[900],
    main: colors.blue[600],
    light: colors.blue[400]
  },
  warning: {
    contrastText: '#013aad',
    dark: colors.orange[900],
    main: colors.orange[600],
    light: colors.orange[400]
  },
  error: {
    contrastText: '#013aad',
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[400]
  },
  text: {
    primary: '#ffffff',
    secondary: '#013aad',
    link: '#ff0000'
  },
  background: {
    default: '#013aad',
    paper: '#013aad'
  },
  icon: colors.blueGrey[600],
  divider: colors.grey[200]
}
