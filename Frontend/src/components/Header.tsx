import HeaderPattern from '../assets/Rectangle 73.png'
import HeaderBg from '../assets/Rectangle 74.png'

const Header = () => {
  return (
    <div className='flex border-2 border-[#D9D9D9] justify-between mx-auto w-[1080px] rounded-lg mt-5 relative p-5'>
        <div className='z-20 my-10 gap-10'>
            <h1 className='font-semibold text-4xl'>Bio Poem</h1>
            <p className='text-[21.3px] text-[#646363] pt-5'>Bio poems crafted, a journey grand</p>
        </div>
        <div>
            <img className='absolute w-[679px] left-0' src={HeaderBg} alt="header" />
            <img className='w-567px' src={HeaderPattern} alt=""/>
        </div>
    </div>
  )
}

export default Header