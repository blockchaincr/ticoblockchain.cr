import React from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'

import routes from 'routes'

const App = () => (
  <BrowserRouter>
    <Switch>
      {routes.map(({ path, component: Component }) => (
        <Route key={`path-${path}`} path={path}>
          <Component />
        </Route>
      ))}
      <Redirect exact from="/" to="/" />
      <Redirect to="/not-found" />
    </Switch>
  </BrowserRouter>
)

export default App
