import React, { useState } from 'react'
import PropTypes from 'prop-types'
import SwipeableViews from 'react-swipeable-views'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import { Grid } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'

import styles from './styles'

const useStyles = makeStyles(styles)

const TabPanel = (props) => {
  const classes = useStyles()
  const { title, date, description, link, info, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Grid container>
          <Grid className={classes.descriptionBox} item md={8} xs={12}>
            <Typography style={{ color: '#013aad' }} variant="h4">
              {title}
            </Typography>
            <Typography
              style={{ color: '#013aad', fontStyle: 'italic' }}
              variant="h5"
            >
              {date}
            </Typography>
            {description.map((text) => (
              <Box style={{ marginTop: 21 }}>
                <Typography style={{ color: '#013aad' }} variant="subtitle1">
                  {text?.title}
                </Typography>
                <Typography style={{ color: '#013aad' }} variant="body1">
                  {text?.description}
                </Typography>
              </Box>
            ))}
          </Grid>
          <Grid style={{ height: '100%' }} item md={4} xs={12}>
            <Box className={classes.registerBox}>
              <Button
                className={classes.primaryButton}
                href={link}
                variant="contained"
                target="_blank"
              >
                Inscribirse
              </Button>
              <Typography className={classes.infoText}>{info}</Typography>
            </Box>
          </Grid>
        </Grid>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
  title: PropTypes.string,
  description: PropTypes.array,
  date: PropTypes.string,
  link: PropTypes.string,
  info: PropTypes.string
}

const a11yProps = (index) => {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`
  }
}

const FullWidthTabs = () => {
  const classes = useStyles()
  const theme = useTheme()
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleChangeIndex = (index) => {
    setValue(index)
  }

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{
            style: {
              display: 'none'
            }
          }}
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
          style={{ width: '100%' }}
        >
          <Tab
            style={{
              backgroundColor: value === 0 ? '#032873' : '#013aad'
            }}
            className={classes.tabStyle}
            label="Día 1"
            {...a11yProps(0)}
          />
          <Tab
            style={{
              backgroundColor: value === 1 ? '#032873' : '#013aad'
            }}
            className={classes.tabStyle}
            label="Día 2"
            {...a11yProps(1)}
          />
          <Tab
            style={{
              backgroundColor: value === 2 ? '#032873' : '#013aad'
            }}
            className={classes.tabStyle}
            label="Día 3"
            {...a11yProps(2)}
          />
          <Tab
            style={{
              backgroundColor: value === 3 ? '#032873' : '#013aad'
            }}
            className={classes.tabStyle}
            label="Día 4"
            {...a11yProps(3)}
          />
        </Tabs>
      </AppBar>
      <SwipeableViews
        style={{ backgroundColor: '#ffffff' }}
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel
          title="Introducción a Blockchain y Activos Digitales"
          date="Martes 26 octubre 3:00pm - 5pm"
          description={[
            {
              title: 'Presentación de Asociación Blockchain Costa Rica:',
              description:
                'Federico Zamora (Presidente AsoBlockchain y socio director de Invermaster Investment Banking).'
            },
            {
              title:
                'Algunas Consideraciones en Torno a las Monedas Digitales y los Criptoactivos:',
              description:
                'Rodrigo Cubero (Presidente del Banco Central de Costa Rica).'
            },
            {
              title: 'Introducción a Blockchain:',
              description:
                'Otto Mora (Tesorero Asoblockchain y consultor de EY).'
            },
            {
              title: 'Introducción a Tokens y Billeteras:',
              description:
                'Ricardo Barquero (Chief Marketing Officer de Nimiq).'
            },
            { title: 'Preguntas y Respuestas con los participantes.' }
          ]}
          link="https://us02web.zoom.us/webinar/register/WN_wLiafkqRQNC5_D7Cxp5I1A"
          info="* Recuerde inscribirse en cada una de las sesiones de las que quiera formar parte."
          value={value}
          index={0}
          dir={theme.direction}
        />
        <TabPanel
          title="Tratamiento Prudencial de los Activos Digitales"
          date="Martes 2 noviembre 3:00pm - 5pm"
          description={[
            {
              title: 'Presentación de Asociación Blockchain Costa Rica:',
              description:
                'Rocio Aguilar (Superintendente General de Entidades Financieras y Superintendente de Pensiones) y Reyner Brenes (Asesor del CONASSIF).'
            },
            {
              title: 'Tipos de Activos Digitales:',
              description:
                'Daniel Rojas (educador y consultor de activos digitales).'
            },
            {
              title:
                'Prevención de Legitimación de Capitales y Financiamiento al Terrorismo en Activos Digitales:',
              description:
                'Ciphertrace (Empresa de rastreo y análisis de transacciones en Blockchain), Hilda María Miño (Fundadora Miño Consultores) y José Miguel Zamora (Socio fundador Lighthouse Equipo Legal).'
            },
            {
              title: 'Experiencias de regulación en otros países:',
              description:
                'USA y America Latina a cargo de Randall Barquero (Socio Consortium) / Europa y Asia a cargo de Nikolajs Sulima, Ph.D.'
            }
          ]}
          link="https://us02web.zoom.us/webinar/register/WN__fjWTw-NTBWRXTZnbb58Ww"
          info="* Recuerde inscribirse en cada una de las sesiones de las que quiera formar parte."
          value={value}
          index={1}
          dir={theme.direction}
        />
        <TabPanel
          title="Finanzas Descentralizadas e Inversión"
          date="Martes 9 noviembre 3:00pm - 5pm"
          description={[
            {
              title:
                'Presentación: Perspectiva sobre Instrumentos Financieros en Blockchain:',
              description: 'Daniel Truque (Fundador Satoshi Capital).'
            },
            {
              title:
                'Introducción a Criptobonos e Instrumentos financieros en Blockchain (Acciones y Otros):',
              description:
                'Daniel Rojas (educador y consultor de activos digitales).'
            },
            {
              title: 'Introducción a Finanzas Descentralizadas:',
              description: 'Carlos Cerrato (Fundador Grupo Xource).'
            },
            {
              title: 'Fondos de Inversión de Capital Privado:',
              description:
                'Roberto Ponce (Socio director de Invermaster Venture Capital).'
            }
          ]}
          link="https://us02web.zoom.us/webinar/register/WN_J3pnsGRDTq2oqBfUjPjMQg"
          info="* Recuerde inscribirse en cada una de las sesiones de las que quiera formar parte."
          value={value}
          index={2}
          dir={theme.direction}
        />
        <TabPanel
          title="Hub de Innovación y Aplicaciones Empresariales"
          date="Martes 16 noviembre 3:00pm - 5pm"
          description={[
            {
              title:
                'Intro Presentación Centro de Innovación y la importancia para el ecosistema:',
              description: 'Reyner Brenes (Asesor del CONASSIF).'
            },
            {
              title: 'Plataformas Blockchain en el mercado:',
              description:
                'Edgar Fernandez (Socio Edenia) y Jeffrey Esquivel (Blockchain Core Developer Nimiq).'
            },
            {
              title: 'Casos de uso de negocios actuales:',
              description:
                'Empresariales a cargo de Edgar Fernandez y Otto Mora (Asoblockchain) / Minado a cargo de Eduardo Kopper (Data Center CR).'
            }
          ]}
          link="https://us02web.zoom.us/webinar/register/WN_vOl6gjl1TRGeCr2VLBBFlA"
          info="* Recuerde inscribirse en cada una de las sesiones de las que quiera formar parte."
          value={value}
          index={3}
          dir={theme.direction}
        />
      </SwipeableViews>
    </div>
  )
}

export default FullWidthTabs
