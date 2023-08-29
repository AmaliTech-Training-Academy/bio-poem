import React, {useState} from 'react'
import logo from '../assets/logo.png' 
import {LiaHomeSolid} from 'react-icons/lia'
import {BiSearchAlt2, BiFolderPlus} from 'react-icons/bi'
import {MdOutlineLightMode,MdLightMode} from 'react-icons/md'
import {LiaToggleOnSolid, LiaToggleOffSolid} from 'react-icons/lia'

const SideBar = () => {
    const [activeSection, setActiveSection] = useState('home')
    const [toggle, setToggle] = useState(false)
    const [openSearch, setOpenSearch] = useState(false)

    const handleSectionClick = (section) => {
        setActiveSection(section)
      };

    const handleOpenSearch = ()=>{

    }

  return (
    <div className='min-h-screen border-r border-gray-400 border-r-1 pr-28 pl-6 pt-10 pb-4 '>
        <img src={logo} alt='logo' className='m-auto'/>
        <div className='text-2xl font-normal mt-[114px] w-fit m-auto'>
            <div className={`flex items-center cursor-pointer ${activeSection === 'home' ? 'border-l-4 border-orange-500' : ''} hover:bg-gray-200`}
                onClick={() => handleSectionClick('home')}>
                <LiaHomeSolid className='ml-5'/>
                {!openSearch && <p className='ml-11'>Home</p>}
                
            </div>
            <div className={`flex items-center my-[55px] cursor-pointer ${activeSection === 'search' ? 'border-l-4 border-orange-500' : ''} hover:bg-gray-200`}
                 onClick={() => handleSectionClick('search')}>
                <BiSearchAlt2 className='ml-5'/>
                {!openSearch && <p className='ml-11'>Search</p>}
            </div>
            <div className={`flex items-center cursor-pointer ${activeSection === 'create' ? 'border-l-4 border-orange-500' : ''} hover:bg-gray-200`}
                onClick={() => handleSectionClick('create')}>
                <BiFolderPlus className='ml-5'/>
                {!openSearch && <p className='ml-11'>Create Poem</p >}
                
            </div>
        </div>

        <div className='py-4 px-5 border border-[#F06A30] rounded-3xl mt-[470px]'>
            <div className='flex items-center mb-[5px]'>
                <p className='mr-24'>Appearance</p> 
                {!toggle ? <MdOutlineLightMode className='w-11 h-5 cursor-pointer '/> : <MdLightMode className='w-11 h-5 cursor-pointer'/>}
                
            </div>
            <hr className='h-[1px] bg-[#928F8F]'/>
            <div className='flex items-center my-[26px]'>
                <p className='mr-24'>Dark mode</p> 
                {toggle ?<LiaToggleOnSolid className='w-11 h-5 mr-23 cursor-pointer' style={{color:'grey'}} onClick={()=>setToggle(false)}/> : <LiaToggleOffSolid className='w-11 h-5 cursor-pointer' style={{color:'grey'}} onClick={()=>setToggle(true)}/>}
                
            </div>
        </div>
    </div>
  )
}

export default SideBar