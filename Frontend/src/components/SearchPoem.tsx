import {BiSearchAlt2} from 'react-icons/bi'
import {MdClose} from 'react-icons/md'
import person from '../assets/searchImage.png'
import { useSelector } from 'react-redux'
import { useState } from 'react'

const SearchPoem = () => {
    const darkMode  = useSelector((state)=>state.darkMode.toggle)
    const [poems, setPoems ] = useState<string>('')
    const [recentPoems, setRecentPoems] = useState([])
    const [searchPoems, setSearchPoems] = useState([])

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) =>{
       const searchWord = e.target.value
       setPoems(searchWord)

       const filterPoems = poems.filter((poem:string)=>
            poem.toLowerCase().includes(searchWord.toLowerCase()));

        setSearchPoems(filterPoems);
    }
    
  return (
    <div className='border-[#D9D9D9] border-r-[0.5px] flex flex-col items-center text-[#343434]'>
        <div className={`flex items-center border border-[#D9D9D9] rounded-lg py-3 pl-3.5 w-[23.438rem] mt-[53px] mb-[40px] ${darkMode ? 'bg-[#fff]' : ''}`}>
            <BiSearchAlt2 style={{color:'#8E8D8D'}} className='mr-4 cursor-pointer'/>
            <input type='text' placeholder='Search...' className='focus:outline-none' value={poems} onChange={handleSearch}/>
        </div>
        <div className={`flex gap-x-56 px-2.5 py-3 border-y-[0.5px] border-[#D9D9D9] mb-[40px] w-full`}>
            <p className={`text-base ${darkMode ? 'text-[#fff]' : ''}`}>Recent</p>
            {recentPoems.length !== 0 ? <p className='text-[#F06A30] w-max cursor-pointer'>Clear all</p> : ''}
        </div>

        {/* all poems */}

        {recentPoems.length === 0 ? (<p className='text-[#F06A30] mt-[207px]'>No Results...</p>
        ):(
            <>
                <div className='flex gap-x-28 mb-[30px]'>
                    <div className='flex items-center'>
                        <img src={person} alt='person' className='rounded-[50%] w-[55px] h-[55px]'/>
                        <p className={`ml-5 font-medium ${darkMode ? 'text-[#fff]' : ''}`}>Johnson Sam</p>
                    </div>

                    <div className='flex items-center '>
                        <button className='text-white bg-orange-500 px-2.5 rounded-r-full rounded-l-full font-medium cursor-pointer'>View</button>
                        <div className='ml-5 bg-[#D9D9D9] rounded-full  cursor-pointer'><MdClose/></div>

                    </div>

                </div>

                <p className='text-[#F06A30] border-b-[1px] border-[#F06A30] cursor-pointer'>See more</p>
            </>
            
        )}

        

        
    </div>
  )
}

export default SearchPoem