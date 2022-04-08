import { useState, useEffect } from 'react'
import Post from './Post'
import axios from 'axios'

function CommentPage(props) {
  const commentId = props.match.params.id
  const [comment, setComment] = useState({})
  useEffect(() => {
    axios
      .get(`${'http://localhost:4000/comments/' + commentId}`)
      .then(response => {
        setComment(response.data)
      })
  }, [])
  return (
    <div className='bg-reddit_dark'>{comment && <Post {...comment} />}</div>
  )
}

export default CommentPage
