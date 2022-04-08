import { Link } from 'react-router-dom'
import PostContent from './PostContent'

function Post(props) {
  const classes =
    'block border border-reddit_border hover:border-reddit_text bg-reddit_dark-brighter p-2 rounded-md cursor-pointer'

  return (
    <div className='px-6  text-reddit_text pb-4 pb-4'>
      {props.open && (
        <div className={classes}>
          {' '}
          <PostContent {...props} />
        </div>
      )}

      {!props.open && (
        <Link
          to={{
            pathname: '/comments/' + props._id,
            state: { commentId: props._id }
          }}
          className={classes}
        >
          <PostContent {...props} />
        </Link>
      )}
    </div>
  )
}

export default Post
