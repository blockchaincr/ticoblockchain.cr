import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { useTranslation } from 'react-i18next'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { useMediaQuery } from 'react-responsive'

import TitlePage from 'components/PageTitle'
import FullWidthTabs from '../../../components/TabPanel'

import styles from './styles'

const ticoBlockchainLogo = '/ticoBlockchain-logo.svg'
const edeniaLogo = '/eoscr-by-edenia-logo.svg'
const location = '/icons/location.svg'
const calendar = '/icons/calendar.svg'
const ticket = '/icons/ticket.svg'
const microphone = '/icons/microphone.svg'
const facebook = '/icons/facebook.svg'
const twitter = '/icons/twitter.svg'
const youtube = '/icons/youtube.svg'

const useStyles = makeStyles(styles)

const Header = () => {
  const classes = useStyles()

  return (
    <Grid container className={classes.layer}>
      <Grid item md={12} xs={12}>
        <img style={{ width: 145 }} src={ticoBlockchainLogo} />
      </Grid>
      <Grid className={classes.headerTtitle} item md={12} xs={12}>
        <Typography
          style={{ marginRight: 10 }}
          className={classes.colorText}
          variant="h1"
        >
          Seminarios
        </Typography>
        <Typography className={classes.colorTextSecondary} variant="h1">
          TicoBlockchain 2021
        </Typography>
      </Grid>
      <Grid style={{ paddingTop: 69 }} item md={10} xs={12}>
        <Typography className={classes.colorText} variant="h3">
          La Asociación Blockchain Costa Rica (AsoBlockchain), tiene el placer
          de invitarle a los Seminarios TicoBlockchain, eventos gratuitos de
          educación sobre blockchain y activos digitales.
        </Typography>
      </Grid>
    </Grid>
  )
}

const IconsSection = () => {
  const classes = useStyles()

  return (
    <Grid container style={{ paddingTop: 69 }} className={classes.layer}>
      <Grid className={classes.iconsBox} container md={3} sm={6} xs={12}>
        <Grid item md={4} sm={4} xs={4}>
          <Box className={classes.iconStyle}>
            <img className={classes.iconSize} src={location} />
          </Box>
        </Grid>
        <Grid className={classes.paddingIconText} item md={8} sm={8} xs={8}>
          <Typography className={classes.colorText} variant="h4">
            Evento virtual
          </Typography>
          <Typography className={classes.colorText} variant="body1">
            Transmitido por Zoom
          </Typography>
        </Grid>
      </Grid>
      <Grid container className={classes.iconsBox} sm={6} md={3} xs={12}>
        <Grid item md={4} xs={4} sm={4}>
          <Box className={classes.iconStyle}>
            <img className={classes.iconSize} src={calendar} />
          </Box>
        </Grid>
        <Grid className={classes.paddingIconText} item md={8} xs={8} sm={8}>
          <Typography className={classes.colorText} variant="h4">
            4 sesiones
          </Typography>
          <Typography className={classes.colorText} variant="body1">
            En octubre y noviembre
          </Typography>
        </Grid>
      </Grid>
      <Grid className={classes.iconsBox} container sm={6} md={3} xs={12}>
        <Grid item md={4} xs={4} sm={4}>
          <Box className={classes.iconStyle}>
            <img className={classes.iconSize} src={ticket} />
          </Box>
        </Grid>
        <Grid className={classes.paddingIconText} item md={8} xs={8} sm={8}>
          <Typography className={classes.colorText} variant="h4">
            100% gratuito
          </Typography>
          <Typography className={classes.colorText} variant="body1">
            Inscripción verificada
          </Typography>
        </Grid>
      </Grid>
      <Grid className={classes.iconsBox} container sm={6} md={3} xs={12}>
        <Grid item md={4} xs={4} sm={4}>
          <Box className={classes.iconStyle}>
            <img className={classes.iconSize} src={microphone} />
          </Box>
        </Grid>
        <Grid className={classes.paddingIconText} item md={8} xs={8} sm={8}>
          <Typography className={classes.colorText} variant="h4">
            20 expositores
          </Typography>
          <Typography className={classes.colorText} variant="body1">
            Sector público y privado
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

const RegisterSection = () => {
  const classes = useStyles()

  return (
    <Grid container style={{ paddingTop: 119 }} className={classes.layer}>
      <Grid item md={12} xs={12}>
        <Typography className={classes.colorText} variant="h2">
          Inscríbase de manera separada a los foros que desee participar:
        </Typography>
      </Grid>
      <Grid style={{ paddingTop: 119 }} item md={12} xs={12}>
        <FullWidthTabs />
      </Grid>
    </Grid>
  )
}

const InfoBaner = () => {
  const classes = useStyles()

  return (
    <Grid container>
      <Grid item md={12} xs={12}>
        <Typography className={classes.infoBannerText} variant="h4">
          Foro Dirigido Exclusivamente a: Instituciones financieras y demás
          sujetos regulados, personal de las Superintendencias, personal del
          Consejo Nacional de Supervisión del Sistema Financiero (CONASSIF),
          Banco Central de Costa Rica, y multilaterales. Por favor tome en
          cuenta que estaremos verificando el uso de correos electrónicos
          institucionales durante el proceso de registro previo a aprobar su
          solicitud de inscripción.
        </Typography>
      </Grid>
    </Grid>
  )
}

const GoToAsoBlockchain = () => {
  const classes = useStyles()

  return (
    <Grid
      container
      className={classes.layer}
      style={{ textAlign: 'center', marginTop: 105 }}
    >
      <Grid item md={12} xs={12}>
        <Typography className={classes.colorText} variant="h3">
          Síganos en redes para más información de la <br /> Asociación
          Blockchain de Costa Rica
        </Typography>
      </Grid>
    </Grid>
  )
}

const FooterPage = () => {
  const classes = useStyles()
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' })

  return (
    <Grid container className={classes.layer} style={{ marginTop: 52 }}>
      <Grid container className={classes.isDesktop} md={6} xs={12}>
        <Grid style={{ marginTop: 40 }} item md={5} xs={12}>
          <Typography className={classes.colorText} variant="body1">
            Sitio desarrollado por:
          </Typography>
          <a href="https://edenia.com/" target="_blank">
            <img style={{ width: 190, marginLeft: -20 }} src={edeniaLogo} />
          </a>
          <Typography className={classes.colorText} variant="body1">
            Asoblockchain, 2021
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        justify={isDesktop ? 'flex-end' : 'center'}
        md={6}
        xs={12}
      >
        <Grid className={classes.specialCenterText} item md={12} xs={12}>
          <img
            className={classes.ticoBlockchainLogo}
            src={ticoBlockchainLogo}
          />
        </Grid>
        <Grid style={{ textAlign: 'center' }} item md={2} sm={2} xs={4}>
          <a href="https://www.facebook.com/Ticoblockchain" target="_blank">
            <img className={classes.socialMediaIcons} src={facebook} />
          </a>
        </Grid>
        <Grid style={{ textAlign: 'center' }} item md={2} sm={2} xs={4}>
          <a href="https://twitter.com/TicoBlockchain" target="_blank">
            <img className={classes.socialMediaIcons} src={twitter} />
          </a>
        </Grid>
        <Grid style={{ textAlign: 'center' }} item md={2} sm={2} xs={4}>
          <a
            href="https://www.youtube.com/channel/UCy8dXObd4LaZ5YEEdR3wfQQ"
            target="_blank"
          >
            <img className={classes.socialMediaIcons} src={youtube} />
          </a>
        </Grid>
        <Grid container className={classes.isMobile} md={6} xs={12}>
          <Grid
            style={{ marginTop: 40 }}
            className={classes.centerTex}
            item
            md={5}
            xs={12}
          >
            <Typography className={classes.colorText} variant="body1">
              Sitio desarrollado por
            </Typography>
            <a href="https://es.eoscostarica.io/" target="_blank">
              <img style={{ width: 190 }} src={edeniaLogo} />
            </a>
            <Typography className={classes.colorText} variant="body1">
              Asoblockchain, 2021
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

const LandingPage = () => {
  const classes = useStyles()
  const { t } = useTranslation('translations')

  return (
    <Box className={classes.landingPageRoot}>
      <TitlePage title={t('htmlTitle')} />
      <Header />
      <IconsSection />
      <RegisterSection />
      <Box
        className={classes.layer}
        style={{ backgroundColor: '#061940', marginTop: 146 }}
      >
        <InfoBaner />
      </Box>
      <GoToAsoBlockchain />
      <FooterPage />
    </Box>
  )
}

export default LandingPage
