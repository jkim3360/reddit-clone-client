import BoardHeader from './BoardHeader'
import PostForm from './PostForm'
import PostListing from './PostListing'

function Board() {
  return (
    <>
      <BoardHeader />
      <div className='flex flex-col'>
        <PostForm />
        <PostListing />
      </div>
    </>
  )
}

export default Board
