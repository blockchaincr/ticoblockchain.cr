export default (theme) => ({
  landingPageRoot: {
    padding: theme.spacing(3, 1, 0, 1),
    [`${theme.breakpoints.down('sm')} and (orientation: landscape)`]: {
      marginTop: theme.spacing(4)
    },
    [theme.breakpoints.up('md')]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4)
    },
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(3, 0)
    }
  },
  titleBox: {
    width: 225,
    paddingLeft: theme.spacing(2),
    '& h4': {
      fontSize: 33,
      letterSpacing: '-0.49px',
      color: '#000000',
      fontWeight: 'bold'
    },
    [`${theme.breakpoints.down('sm')} and (orientation: landscape)`]: {
      width: '70% !important',
      '& h4': {
        fontSize: '33px !important',
        letterSpacing: '-0.49px !important',
        color: '#000000',
        fontWeight: 'bold'
      }
    },
    [theme.breakpoints.up('sm')]: {
      width: '70%',
      paddingLeft: 0,
      '& h4': {
        letterSpacing: '-0.91px',
        fontSize: 59.2
      }
    }
  },
  colorText: {
    color: theme.palette.text.primary
  },
  colorTextSecondary: {
    color: theme.palette.text.link
  },
  iconStyle: {
    width: 80,
    height: 80,
    backgroundColor: theme.palette.secondary.main,
    borderRadius: '50%',
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      float: 'right'
    }
  },
  paddingIconText: {
    marginTop: 'auto',
    marginBottom: 'auto',
    paddingLeft: 10
  },
  layer: {
    padding: 16,
    [theme.breakpoints.up('lg')]: {
      paddingRight: theme.spacing(28),
      paddingLeft: theme.spacing(28)
    }
  },
  iconSize: {
    width: 70,
    marginTop: 5
  },
  socialMediaIcons: {
    width: 60,
    [theme.breakpoints.up('lg')]: {
      float: 'right'
    }
  },
  infoBannerText: {
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: 500,
    fontStyle: 'normal',
    padding: '60px 20px'
  },
  secondaryButton: {
    padding: '10px 24px 10px 24px',
    backgroundColor: '#ffffff',
    textTransform: 'none',
    '&:hover': {
      color: theme.palette.text.primary
    }
  },
  headerTtitle: {
    paddingTop: 100,
    fontSize: 11.5,
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      paddingTop: 170
    }
  },
  iconsBox: {
    [theme.breakpoints.down('md')]: {
      marginTop: 10,
      marginBottom: 10
    }
  },
  centerText: {
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    }
  }
})
