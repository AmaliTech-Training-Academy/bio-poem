import HeaderPattern from '../assets/Group 33.png'
// import HeaderBg from '../assets/Rectangle 74.png'

const Header = () => {
  return (
    <div className='flex border-2 border-[#D9D9D9] justify-between rounded-lg mt-8 relative p-5 w-11/12'>
        <div className='absolute left-[5%] bottom-[35%]'>
            <h1 className='font-semibold text-xl lg:text-4xl'>Bio Poem</h1>
            <p className='text-xs lg:text-[21px]  text-[#343434] font-medium pt-5'>Bio poems crafted, a journey grand</p>
        </div>
        <div>
          <img src={HeaderPattern} alt="" />
        </div>
    </div>
  )
}

export default Header