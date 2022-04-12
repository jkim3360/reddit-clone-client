import { useEffect, useContext } from 'react'
import Post from './Post'
import CreatePostContext from './CreatePostContext'
import axios from 'axios'

function PostsListing() {
  const CreatePostsContext = useContext(CreatePostContext)
  const comments = CreatePostsContext.comments

  useEffect(() => {
    axios
      .get('http://localhost:4000/posts', { withCredentials: true })
      .then(response => CreatePostsContext.setComments(response.data))
  }, [])

  return (
    <div className='bg-reddit_dark self-center'>
      {comments.map(comment => (
        <Post {...comment} isListing={true} key={comment._id} />
      ))}
    </div>
  )
}

export default PostsListing
