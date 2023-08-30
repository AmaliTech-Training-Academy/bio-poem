import GridImg from '../assets/Rectangle 36.png'

const RecentPoems = () => {
  return (
    <div className='mx-auto mt-5 font-Inter'>
      <div>
        <h1 className="text-2xl font-medium py-7">Recent Poems</h1>
        <div className='grid grid-cols-3 gap-x-12 gap-y-9 '>
            <div className='flex justify-between w-[299px] h-[140px] border-2 rounded-md p-5 items-center'>
                    <div >
                        <img className='rounded-full w-[119px] h-[119px]' src={GridImg} />
                    </div>
                    <div className='text-center'>
                        <h3>Ekow Smith</h3>
                        <p className='text-[#F06A30] bg-[#FEF6EE] rounded-xl cursor-pointer'>Preview</p>
                    </div>
                </div>

                <div className='flex justify-between w-[299px] h-[140px] border-2 rounded-md p-5 items-center'>
                    <div >
                        <img className='rounded-full w-[119px] h-[119px]' src={GridImg} />
                    </div>
                    <div className='text-center'>
                        <h3>Ekow Smith</h3>
                        <p className='text-[#F06A30] bg-[#FEF6EE] rounded-xl cursor-pointer'>Preview</p>
                    </div>
                </div>

                <div className='flex justify-between w-[299px] h-[140px] border-2 rounded-md p-5 items-center'>
                    <div >
                        <img className='rounded-full w-[119px] h-[119px]' src={GridImg} />
                    </div>
                    <div className='text-center'>
                        <h3>Ekow Smith</h3>
                        <p className='text-[#F06A30]'>Preview</p>
                    </div>
                </div>

                <div className='flex justify-between w-[299px] h-[140px] border-2 rounded-md p-5 items-center'>
                    <div >
                        <img className='rounded-full w-[119px] h-[119px]' src={GridImg} />
                    </div>
                    <div className='text-center'>
                        <h3>Ekow Smith</h3>
                        <p className='text-[#F06A30]'>Preview</p>
                    </div>
                </div>

                <div className='flex justify-between w-[299px] h-[140px] border-2 rounded-md p-5 items-center'>
                    <div >
                        <img className='rounded-full w-[119px] h-[119px]' src={GridImg} />
                    </div>
                    <div className='text-center'>
                        <h3>Ekow Smith</h3>
                        <p className='text-[#F06A30]'>Preview</p>
                    </div>
                </div>

                <div className='flex justify-between w-[299px] h-[140px] border-2 rounded-md p-5 items-center'>
                    <div >
                        <img className='rounded-full w-[119px] h-[119px]' src={GridImg} />
                    </div>
                    <div className='text-center'>
                        <h3>Ekow Smith</h3>
                        <p className='text-[#F06A30]'>Preview</p>
                    </div>
                </div>
        </div>
      </div>
    </div>
  )
}

export default RecentPoems