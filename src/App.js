import { useState, useEffect } from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import Header from './Header'
import Board from './Board'
import CommentPage from './CommentPage'
import AuthModal from './AuthModal'
import AuthModalContext from './AuthModalContext'
import UserContext from './UserContext'

import axios from 'axios'

import './styles.css'

function App() {
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [modalType, setModalType] = useState('login')
  const [user, setUser] = useState({})

  useEffect(() => {
    axios
      .get('http://localhost:4000/user', { withCredentials: true })
      .then(response => setUser(response.data))
  }, [])

  function logout() {
    axios
      .post('http://localhost:4000/logout', { withCredentials: true })
      .then(() => {
        setUser({})
      })
  }

  return (
    <AuthModalContext.Provider
      value={{ showAuthModal, setShowAuthModal, modalType, setModalType }}
    >
      <UserContext.Provider value={{ ...user, setUser, logout }}>
        <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Board} />
            <Route exact path='/comments/:id' component={CommentPage} />
          </Switch>
        </BrowserRouter>
        <AuthModal />
      </UserContext.Provider>
    </AuthModalContext.Provider>
  )
}

export default App
