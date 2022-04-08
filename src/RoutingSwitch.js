import { useState, useEffect } from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import Board from './Board'
import CommentModal from './CommentModal'
import CommentPage from './CommentPage'

function RoutingSwitch() {
  const [postOpen, setPostOpen] = useState(false)

  let location = useLocation()

  let commentId = ''

  if (location.state && location.state.commentId) {
    location.pathname = '/'
    if (postOpen) {
      commentId = location.state.commentId
    } else {
      location.state.commentId = null
    }
  }

  useEffect(() => {
    setPostOpen(true)
  }, [commentId])

  useEffect(() => {
    commentId = null
  }, [postOpen])

  return (
    <>
      {commentId && (
        <CommentModal
          id={commentId}
          open={postOpen}
          onClickOut={() => setPostOpen(false)}
        />
      )}
      <Switch location={location}>
        <Route exact path='/' component={Board} />
        <Route exact path='/comments/:id' component={CommentPage} />
      </Switch>
    </>
  )
}
export default RoutingSwitch
