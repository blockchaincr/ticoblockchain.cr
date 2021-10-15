import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/styles'
import Container from '@material-ui/core/Container'

import styles from './styles'

const useStyles = makeStyles(styles)

const Main = ({ children }) => {
  const classes = useStyles()

  return (
    <Container
      component="main"
      maxWidth="xl"
      className={clsx({
        [classes.root]: true
      })}
    >
      {children}
    </Container>
  )
}

Main.propTypes = {
  children: PropTypes.node
}

export default Main
