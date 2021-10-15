export default (theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '100%'
  },
  appBar: {
    width: '50%',
    [theme.breakpoints.down('md')]: {
      width: '100%'
    }
  },
  tabStyle: {
    textTransform: 'capitalize',
    fontSize: 25,
    color: '#ffffff !important',
    minWidth: '25%',
    padding: 0,
    border: 'solid 4px #ffffff'
  },
  primaryButton: {
    padding: '10px 24px 10px 24px',
    backgroundColor: '#032873',
    color: '#ffffff !important',
    textTransform: 'capitalize',
    '&:hover': {
      backgroundColor: theme.palette.primary.main
    }
  },
  infoText: {
    marginTop: 20,
    color: '#013aad !important',
    [theme.breakpoints.down('md')]: {
      paddingBottom: 20
    }
  },
  registerBox: {
    height: '100px',
    width: '70%',
    margin: 'auto',
    marginTop: '48%',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      marginTop: '10%'
    }
  },
  descriptionBox: {
    margin: '48px 0 48px 0',
    padding: '40px 81px 40px 81px',
    borderRight: 'solid 3px #013aad',
    [theme.breakpoints.down('md')]: {
      margin: '30px 0 20px 0',
      padding: '10px 20px 0 20px',
      borderRight: 'none'
    }
  }
})
