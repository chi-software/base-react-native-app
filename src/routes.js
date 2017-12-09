import React from 'react'
import { connect } from 'react-redux'
import { Scene, Router, Stack } from 'react-native-router-flux'
import Home from './containers/Home'
import About from './containers/About'

const ConnectedRouter = connect()(Router)

const Routes = () => (
  <ConnectedRouter>
    <Stack key="root">
      <Scene key="Home" component={Home} title="Home" initial={true} />
      <Scene key="About" component={About} title="About" />
    </Stack>
  </ConnectedRouter>
)

export default Routes
