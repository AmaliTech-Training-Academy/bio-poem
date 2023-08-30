import React from 'react'
import {BiSearchAlt2} from 'react-icons/bi'
import {MdClose} from 'react-icons/md'
import person from '../assets/searchImage.png'

const SearchPoem = () => {
  return (
    <div className='border-[#D9D9D9] border-r-[0.5px] flex flex-col items-center text-[#343434]'>
        <div className='flex items-center border border-[#D9D9D9] rounded-lg py-3 pl-3.5 w-[23.438rem] mt-[53px] mb-[40px]'>
            <BiSearchAlt2 style={{color:'#8E8D8D'}} className='mr-4 cursor-pointer'/>
            <input type='text' placeholder='Search...' className='focus:outline-none'/>
        </div>
        <div className='flex gap-x-56 w-fit px-9 py-3 border-y-[0.5px] border-[#D9D9D9] mb-[40px]'>
            <p className='text-base'>Recent</p>
            <p className='text-[#F06A30] w-max cursor-pointer'>Clear all</p>
        </div>

        <div className='flex gap-x-28 mb-[30px]'>
            <div className='flex items-center'>
                <img src={person} alt='person' className='rounded-[50%] w-[55px] h-[55px]'/>
                <p className='ml-5 font-medium'>Johnson Sam</p>
            </div>

            <div className='flex items-center '>
                <button className='text-white bg-orange-500 px-2.5 rounded-r-full rounded-l-full font-medium cursor-pointer'>View</button>
                <div className='ml-5 bg-[#D9D9D9] rounded-full  cursor-pointer'><MdClose/></div>

            </div>

        </div>

        <p className='text-[#F06A30] border-b-[1px] border-[#F06A30] cursor-pointer'>See more</p>
    </div>
  )
}

export default SearchPoem