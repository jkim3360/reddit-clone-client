import { useState, useEffect } from 'react'
import Post from './Post'
import axios from 'axios'

function PostPage(props) {
  const commentId = props.match.params.id
  const [comment, setComment] = useState({})

  useEffect(() => {
    axios
      .get(`${'http://localhost:4000/posts/' + commentId}`)
      .then(response => {
        setComment(response.data)
      })
  }, [])

  return (
    <div className='bg-reddit_dark py-4'>
      {comment && <Post {...comment} open={true} />}
    </div>
  )
}

export default PostPage
