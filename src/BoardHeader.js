import subheader from './assets/subheader.png'
import communityIcon from './assets/communityIcon.jpg'

function BoardHeader() {
  return (
    <>
      <div
        className='h-20 bg-cover'
        style={{ backgroundImage: `url(${subheader})` }}
      ></div>
      <div className='bg-reddit_dark-brighter'>
        <div className='mx-6 relative flex'>
          <div className='h-20 w-20 rounded-full overflow-hidden relative -top-4 border-4 border-white bg-white'>
            <img src={communityIcon} alt='' />
          </div>
          <div className='pt-2 pl-4'>
            <h1 className='text-gray-300 text-3xl'>
              webdev: reddit for web developers
            </h1>
            <h5 className='text-gray-500'>r/webdev/</h5>
          </div>
        </div>
      </div>
    </>
  )
}

export default BoardHeader
