import { useState } from 'react'
import Input from './Input'
import Textarea from './Textarea'
import Button from './Button'

import ClickOutHandler from 'react-clickout-handler'

function PostModal(props) {
  const [title, setTitle] = useState('')

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
          <Textarea className={'w-full mb-3'} placeholder='Text (required)' />
          <div className='text-right'>
            <Button className='px-4 py-2'>POST</Button>
          </div>
        </div>
      </ClickOutHandler>
    </div>
  )
}

export default PostModal
