import React, {useState} from 'react'
import logo from '../assets/logo.png' 
import {LiaHomeSolid} from 'react-icons/lia'
import {BiSearchAlt2, BiFolderPlus} from 'react-icons/bi'
import {MdOutlineLightMode,MdLightMode} from 'react-icons/md'
import {LiaToggleOnSolid, LiaToggleOffSolid} from 'react-icons/lia'
import { NavLink } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'


const SideBar = () => {
    // const navigate = useNavigate()
    const [activeSection, setActiveSection] = useState('home')
    const [toggle, setToggle] = useState(false)
    const [appearance, setAppearance] = useState(false)

    const handleSectionClick = (section: string) => {
        setActiveSection(section)
      };

  return (
    <div className='min-h-screen border-r border-gray-400 border-r-1 pr-28 pl-6 pt-10 pb-4 ' id='sidebar'>
        <img src={logo} alt='logo' className='m-auto'/>
        <div className='text-2xl font-normal mt-[114px] w-fit m-auto'>
            <NavLink to={'/'} >
                <div className={`flex items-center cursor-pointer` }
                    onClick={() => handleSectionClick('home')}>
                    <LiaHomeSolid className='ml-5'/> <p className='ml-11'>Home</p>
                </div>
            </NavLink>
            <div className={`flex items-center my-[55px] cursor-pointer`}
                onClick={() => handleSectionClick('search')}>
                <BiSearchAlt2 className='ml-5'/><p className='ml-11'>Search</p>
            </div>
            <NavLink to={'/create'}>
                <div className={`flex items-center cursor-pointer`}
                    onClick={() => handleSectionClick('create')}>
                    <BiFolderPlus className='ml-5'/><p className='ml-11'>Create Poem</p >
                </div>
            </NavLink>
        </div>

        <div className='py-4 px-5 border border-[#F06A30] rounded-3xl mt-[470px]'>
            <div className='flex items-center'>
                <p className='mr-24'>Appearance</p> 
                {appearance ? <MdOutlineLightMode className='w-11 h-5 cursor-pointer ' onClick={()=>setAppearance(false)}/> : <MdLightMode className='w-11 h-5 cursor-pointer' onClick={()=>setAppearance(true)}/>}
                
            </div>
            <div className='flex items-center my-[26.5px]'>
                <p className='mr-24'>Dark mode</p> 
                {toggle ?<LiaToggleOnSolid className='w-11 h-5 mr-23 cursor-pointer' style={{color:'grey'}} onClick={()=>setToggle(false)}/> : <LiaToggleOffSolid className='w-11 h-5 cursor-pointer' style={{color:'grey'}} onClick={()=>setToggle(true)}/>}
                
            </div>
        </div>
    </div>
  )
}

export default SideBar