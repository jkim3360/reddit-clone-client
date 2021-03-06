import Header from './Header'
import BoardHeader from './BoardHeader'
import PostForm from './PostForm'
import AuthModal from './AuthModal'

import './styles.css'

function App() {
  return (
    <div className='App'>
      <Header />
      <AuthModal show={false} />
      <BoardHeader />
      <PostForm />
      <div className='px-6 bg-reddit_dark text-reddit_text'>
        <div className='border border-reddit_border bg-reddit_dark-brighter p-2 rounded-md'>
          <h5 className='text-reddit_text-darker text-sm mb-1'>
            Posted by u/AutoModerator 17 days ago
          </h5>
          <h2 className='text-xl mb-3'>
            Monthly Getting Started / Web Dev Career Thread
          </h2>
          <div className='text-sm leading-6'>
            <p>
              Due to a growing influx of questions on this topic, it has been
              decided to commit a monthly thread dedicated to this topic to
              reduce the number of repeat posts on this topic. These types of
              posts will no longer be allowed in the main thread.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
