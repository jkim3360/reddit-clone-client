import { useState } from 'react'
import Input from './Input'
import Button from './Button'
import axios from 'axios'

function AuthModal(props) {
  const [modalType, setModalType] = useState('login')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const visibleClass = props.show ? 'block' : 'hidden'

  function register(e) {
    e.preventDefault()
    const data = { email, username, password }
    axios.post('http://localhost:4000/register', data, {
      withCredentials: true
    })
  }

  return (
    <div
      className={
        'w-screen h-screen fixed top-0 left-0 z-20 flex ' + visibleClass
      }
      style={{ backgroundColor: 'rgba(0,0,0,0.6' }}
    >
      <div className='border border-reddit_dark-brightest w-3/4 sm:w-1/2 lg:w-1/4 bg-reddit_dark p-5 text-reddit_text self-center mx-auto rounded-md'>
        {modalType === 'login' && <h1 className='text-2xl mb-3'>Login</h1>}
        {modalType === 'register' && (
          <h1 className='text-2xl mb-3'>Register</h1>
        )}

        {modalType === 'register' && (
          <label>
            <span className='text-reddit_text-darker text-sm'>E-mail:</span>
            <Input
              type='text'
              className='mb-3 w-full'
              placeholder='email'
              value={email}
              onChange={e => {
                setEmail(e.target.value)
              }}
            />
          </label>
        )}
        <label>
          <span className='text-reddit_text-darker text-sm'>Username:</span>
          <Input
            type='text'
            className='mb-3 w-full'
            placeholder='username'
            value={username}
            onChange={e => {
              setUsername(e.target.value)
            }}
          />
        </label>
        <label>
          <span className='text-reddit_text-darker text-sm'>Password:</span>
          <Input
            type='password'
            className='mb-3 w-full'
            placeholder='password'
            value={password}
            onChange={e => {
              setPassword(e.target.value)
            }}
          />
        </label>

        {modalType === 'login' && (
          <Button
            className='w-full py-2 mb-3'
            style={{ borderRadius: '.3rem' }}
          >
            Log In
          </Button>
        )}
        {modalType === 'register' && (
          <Button
            className='w-full py-2 mb-3'
            style={{ borderRadius: '.3rem' }}
            onClick={e => {
              register(e)
            }}
          >
            Sign Up
          </Button>
        )}
        {modalType === 'login' && (
          <div>
            New to Reddit?{' '}
            <button
              className='text-blue-600'
              onClick={() => setModalType('register')}
            >
              SIGN UP
            </button>
          </div>
        )}
        {modalType === 'register' && (
          <div>
            New to Reddit?{' '}
            <button
              className='text-blue-600'
              onClick={() => setModalType('login')}
            >
              LOG IN
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default AuthModal

// npm i react-clickout-handler
