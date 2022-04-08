import { Link } from 'react-router-dom'

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

function PostContent(props) {
  return (
    <>
      <h5 className='text-reddit_text-darker text-sm mb-1'>
        Posted by u/{props.author} {props.postedAt}
      </h5>
      <h2 className='text-xl mb-3'>{props.title}</h2>
      <div className='text-sm leading-6'>
        <p>{props.body}</p>
      </div>
    </>
  )
}

export default Post
