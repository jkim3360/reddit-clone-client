function PostContent(props) {
  let modalClass
  modalClass = props.isModal === true ? ' bg-reddit_dark' : ''

  return (
    <div className={'p-5 border border-reddit_dark-brightest' + modalClass}>
      <h5 className='text-reddit_text-darker text-sm mb-1'>
        Posted by u/{props.author} {props.postedAt}
      </h5>
      <h2 className='text-xl mb-3'>{props.title}</h2>
      <div className={'text-sm leading-6'}>
        <p>{props.body}</p>
      </div>
    </div>
  )
}

export default PostContent
