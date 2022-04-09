import { useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import Input from './Input'
import Textarea from './Textarea'
import Button from './Button'
import UserContext from './UserContext'
import CreatePostContext from './CreatePostContext'

import axios from 'axios'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import ClickOutHandler from 'react-clickout-handler'

function PostModal(props) {
  const [title, setTitle] = useState('')
  const [posted, setPosted] = useState(false)
  const [textarea, setTextarea] = useState('')

  const userContext = useContext(UserContext)
  const CreatePostsContext = useContext(CreatePostContext)
  const history = useHistory()
  const user = userContext.username
  const userId = userContext.id
  const markdown = `Just a link: https://reactjs.com.`

  async function post() {
    const data = { userId, user, title, textarea }
    axios
      .post('http://localhost:4000/comment', data, {
        withCredentials: true
      })
      .then(response => {
        let path = '/comments/' + response.data._id
        history.push(path)

        const commentId = response.data._id
        const data = { userId, commentId }

        axios.put('http://localhost:4000/user', data, {
          withCredentials: true
        })
      })
      .catch(err => {
        console.error('There was an error posting.')
      })
    props.onClickOut()
    setPosted(true)
  }

  return (
    <div
      className={'w-screen h-screen fixed top-0 left-0 z-20 flex'}
      style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}
    >
      <ClickOutHandler
        onClickOut={() => {
          props.onClickOut()
        }}
      >
        <div className='border border-reddit_dark-brightest w-3/4 sm:w-1/2 lg:w-1/4 bg-reddit_dark p-5 text-reddit_text self-center mx-auto rounded-md'>
          <h1 className='text-2xl mb-3'>Create a post</h1>
          <Input
            type='text'
            className='mb-3 w-full'
            placeholder='Title'
            value={title}
            onChange={e => {
              setTitle(e.target.value)
            }}
          />
          <Textarea
            className={'w-full mb-3'}
            placeholder='Text (required)'
            onChange={e => {
              setTextarea(e.target.value)
            }}
          />
          <ReactMarkdown># Hello, *world*!</ReactMarkdown>
          <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />,
          <div className='text-right'>
            <Button
              outline={1}
              className='px-4 py-2'
              onClick={e => {
                props.onClickOut()
              }}
            >
              Cancel
            </Button>
            <Button
              className='px-4 py-2'
              onClick={() => {
                post()
              }}
            >
              POST
            </Button>
          </div>
        </div>
      </ClickOutHandler>
    </div>
  )
}

export default PostModal
