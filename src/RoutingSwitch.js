import { useState, useEffect } from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import Board from './Board'
import CommentModal from './CommentModal'
import PostPage from './PostPage'
import CreatePostModal from './CreatePostModal'
import CreatePostContext from './CreatePostContext'

function RoutingSwitch() {
  const [comments, setComments] = useState([])
  const [postOpen, setPostOpen] = useState(false)
  const [createPost, openCreatePost] = useState(false)

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

  if (location.pathname === '/submit') {
    location.pathname = '/'
  }

  useEffect(() => {
    setPostOpen(true)
    commentId = ''
  }, [commentId])

  // useEffect(() => {
  //   openCreatePost(false)
  // }, [location.pathname])

  // Commenting this out to see if breaks anything 4/9/22
  // useEffect(() => {
  //   commentId = null
  // }, [postOpen])

  return (
    <CreatePostContext.Provider
      value={{ createPost, openCreatePost, comments, setComments }}
    >
      {commentId && (
        <CommentModal
          id={commentId}
          open={postOpen}
          onClickOut={() => setPostOpen(false)}
        />
      )}
      {createPost && (
        <CreatePostModal onClickOut={() => openCreatePost(false)} />
      )}
      <Switch location={location}>
        <Route exact path='/' component={Board} />
        <Route exact path='/posts/:id' component={PostPage} />
        <Route exact path='/submit' component={CreatePostModal} />
      </Switch>
    </CreatePostContext.Provider>
  )
}
export default RoutingSwitch
