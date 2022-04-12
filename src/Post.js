import { Link } from 'react-router-dom'
import PostContent from './PostContent'

function Post(props) {
  const classes =
    'block border border-reddit_border hover:border-reddit_text bg-reddit_dark-brighter p-2 rounded-md cursor-pointer flex w-screen'

  return (
    <div className='px-6 text-reddit_text pb-4 pb-4 flex max-w-2xl'>
      {props.open && (
        <div className={classes}>
          <PostContent {...props} />
        </div>
      )}

      {!props.open && (
        <Link
          to={{
            pathname: '/posts/' + props._id,
            state: { commentId: props._id }
          }}
          className={classes}
        >
          <div className='w-10'>Counter Up Down</div>
          <PostContent {...props} />
        </Link>
      )}
    </div>
  )
}

export default Post
