import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import Box from '@material-ui/core/Box'

import FrontLayer from '../FrontLayer'
import MainPageBackdrop from './MainPage.backdrop'
import styles from '../styles'

const useStyles = makeStyles(styles)

const MainPage = ({ useBackdrop, ual }) => {
  const classes = useStyles()

  return useBackdrop ? (
    <MainPageBackdrop ual={ual} />
  ) : (
    <Box className={classes.rootMainPage}>
      <FrontLayer ual={ual} />
    </Box>
  )
}

MainPage.propTypes = {
  ual: PropTypes.object,
  useBackdrop: PropTypes.bool
}

export default MainPage
