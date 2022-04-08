import Post from './Post'

function PostListing(props) {
  return (
    <div className='bg-reddit_dark'>
      {props.posts.map(post => {
        return <Post {...post} />
      })}
    </div>
  )
}

export default PostListing
