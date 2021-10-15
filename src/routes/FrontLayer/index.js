import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import Box from '@material-ui/core/Box'

import LandingPage from './Landing'

const FrontLayer = () => {
  return (
    <Box>
      <Switch>
        <Route exact path="/Landing" component={LandingPage} />
        <Redirect from="/" to="/Landing" />
      </Switch>
    </Box>
  )
}

export default FrontLayer
