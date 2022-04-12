import { useState, useEffect } from 'react'
import PostContent from './PostContent'
import ClickOutHandler from 'react-clickout-handler'
import axios from 'axios'

function CommentModal(props) {
  const [post, setPost] = useState({})
  const [overflow, setOverflow] = useState('auto')

  const visibleClass = props.open ? 'block' : 'hidden'

  useEffect(() => {
    axios.get('http://localhost:4000/posts/' + props.id).then(response => {
      setPost(response.data)
    })
    document.querySelector('body').style.overflow = 'hidden'
  }, [props.id])

  function close() {
    setPost({})
    props.onClickOut()
    document.querySelector('body').style.overflow = 'auto'
  }
  // border border-reddit_dark-brightest my-4 w-3/4 sm:w-1/2 lg:w-1/4 bg-reddit_dark p-5 text-reddit_text self-center mx-auto rounded-md
  return (
    <div
      className={
        'w-screen h-screen fixed top-0 left-0 z-20 flex ' + visibleClass
      }
    >
      <ClickOutHandler onClickOut={() => close()}>
        <div
          className='w-screen flex overflow-auto'
          style={{ backgroundColor: 'rgba(0,0,0,0.6', top: '0' }}
          onClick={() => close()}
        >
          <div
            className='max-w-screen-xl mx-auto rounded-md text-reddit_text'
            style={{ width: 'calc(100% - 160px)' }}
          >
            <PostContent {...post} isModal={true} />
          </div>
        </div>
      </ClickOutHandler>
    </div>
  )
}
export default CommentModal
