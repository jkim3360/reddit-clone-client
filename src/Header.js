import { useState, useContext } from 'react'
import logo from './assets/logo.png'
import {
  BellIcon,
  ChatIcon,
  PlusIcon,
  SearchIcon,
  ChevronDownIcon,
  UserIcon,
  LoginIcon
} from '@heroicons/react/outline'
import ClickOutHandler from 'react-clickout-handler'
import Button from './Button'
import AuthModalContext from './AuthModalContext'

function Header() {
  const modalContext = useContext(AuthModalContext)
  const [userDropdownVisibility, setUserDropdownVisibility] = useState('hidden')

  const toggleUserDropDown = e => {
    if (userDropdownVisibility === 'hidden') {
      return setUserDropdownVisibility('visible')
    } else if (!this.node.contains(e.target)) {
      return setUserDropdownVisibility('hidden')
    }
  }
  return (
    <header className='w-full bg-reddit_dark p-2 items-center'>
      <div className='mx-4 flex relative'>
        <img src={logo} className='w-8 h-8 mr-4' alt='logo' />
        <form
          action=''
          className='bg-reddit_dark-brighter px-3 flex rounded-md border border-reddit_border mx-4 flex-grow'
        >
          <SearchIcon className='text-gray-300 h-6 w-6 mt-1' />
          <input
            type='text'
            className='bg-reddit_dark-brighter text-sm p-1 pl-2 pr-0 block focus:outline-none text-white'
            placeholder='Search'
          />
        </form>
        <button className='px-2 py-1'>
          <ChatIcon className='text-gray-400 w-6 h-6 mx-2' />
        </button>
        <button className='px-2 py-1'>
          <BellIcon className='text-gray-400 w-6 h-6 mx-2' />
        </button>
        <button className='px-2 py-1'>
          <PlusIcon className='text-gray-400 w-6 h-6 mx-2' />
        </button>

        <div className='mx-2 hidden sm:block'>
          <Button
            outline={1}
            className='mr-1 h-8'
            onClick={() => {
              modalContext.setShowAuthModal(true)
              modalContext.setModalType('login')
            }}
          >
            Login
          </Button>
          <Button
            className='h-8'
            onClick={() => {
              modalContext.setShowAuthModal(true)
              modalContext.setModalType('register')
            }}
          >
            Sign Up
          </Button>
        </div>
        <ClickOutHandler
          onClickOut={() => {
            setUserDropdownVisibility('hidden')
          }}
        >
          <button
            className='rounded-md flex ml-4'
            onClick={() => toggleUserDropDown()}
          >
            <UserIcon className='w-6 h-6 text-gray-400 m-1' />
            <ChevronDownIcon className='text-gray-500 w-5 h-5 mt-2 ml-1' />
          </button>
          <div
            className={
              'absolute right-0 top-8 bg-reddit_dark border border-gray-700 z-10 rounded-md text-reddit_text overflow-hidden ' +
              userDropdownVisibility
            }
          >
            <button
              className='block flex w-40 py-2 px-3 hover:bg-gray-300 hover:text-black text-sm'
              onClick={() => {
                modalContext.setShowAuthModal(true)
                setUserDropdownVisibility('hidden')
              }}
            >
              <LoginIcon className='w-6 h-6 mr-2' />
              Log In / Sign Up
            </button>
          </div>
        </ClickOutHandler>
      </div>
    </header>
  )
}
export default Header
