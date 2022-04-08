import { Switch, Route, BrowserRouter } from 'react-router-dom'

import Header from './Header'
import RoutingSwitch from './RoutingSwitch'

function Routes() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <RoutingSwitch />
      </BrowserRouter>
    </>
  )
}

export default Routes
