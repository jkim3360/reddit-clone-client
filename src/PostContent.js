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

export default PostContent
