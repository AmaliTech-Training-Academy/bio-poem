import GridImg from '../assets/Rectangle 36.png'

const RecentPoems = () => {
  return (
    <div className='mx-auto w-[1080px] mt-5 font-Inter'>
        <h1 className="text-2xl font-medium py-7">Recent Poems</h1>
        <div className='grid grid-cols-4 w-[299px] h-[140px] border-2 rounded-md '>
            <div className='flex justify-between'>
                    <div >
                        <img className='rounded-full' src={GridImg} />
                    </div>
                    <div className='text-center'>
                        <h3>Ekow Smith</h3>
                        <p className='text-[#F06A30]'>Preview</p>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default RecentPoems