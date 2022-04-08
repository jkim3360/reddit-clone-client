import { Switch, Route, useLocation } from 'react-router-dom'
import Board from './Board'
import CommentPage from './CommentPage'

function RoutingSwitch() {
  console.log(useLocation())
  return (
    <Switch location={useLocation()}>
      <Route exact path='/' component={Board} />
      <Route exact path='/comments/:id' component={CommentPage} />
    </Switch>
  )
}
export default RoutingSwitch
