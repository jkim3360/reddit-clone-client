import { useState, useEffect } from 'react'
import PostContent from './PostContent'
import ClickOutHandler from 'react-clickout-handler'
import axios from 'axios'

function CommentModal(props) {
  const [comment, setComment] = useState({})

  const visibleClass = props.open ? 'block' : 'hidden'

  useEffect(() => {
    axios.get('http://localhost:4000/comments/' + props.id).then(response => {
      setComment(response.data)
    })
  }, [props.id])

  function close() {
    setComment({})
    props.onClickOut()
  }

  return (
    <div
      className={
        'w-screen h-screen fixed top-0 left-0 z-20 flex ' + visibleClass
      }
      style={{ backgroundColor: 'rgba(0,0,0,0.6' }}
    >
      <ClickOutHandler onClickOut={() => close()}>
        <div className='border border-reddit_dark-brightest my-4 w-3/4 sm:w-1/2 lg:w-1/4 bg-reddit_dark p-5 text-reddit_text self-center mx-auto rounded-md'>
          <div
            className='block overflow-scroll'
            style={{ maxHeight: 'calc(100vh - 200px' }}
          >
            <PostContent {...comment} />
          </div>
        </div>
      </ClickOutHandler>
    </div>
  )
}
export default CommentModal
