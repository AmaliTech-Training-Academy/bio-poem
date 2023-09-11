import {useState, useEffect} from 'react'
import logo from '../assets/logo.png' 
import darkModeLogo from '../assets/mdi_bio.png'
import {LiaHomeSolid} from 'react-icons/lia'
import {BiSearchAlt2, BiFolderPlus} from 'react-icons/bi'
import {MdOutlineLightMode,MdLightMode} from 'react-icons/md'
import {PiToggleRightFill, PiToggleLeftFill} from 'react-icons/pi'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { resetSearchState, setOpenSearch } from '../store/searchSlice'
import { RootState } from '../store/store'
import { setDarkMode} from '../store/darkModeSlice'


const SideBar = () => {
    const [activeSection, setActiveSection] = useState(window.location.pathname)
    const toggle = useSelector((state:RootState)=>state.darkMode.toggle)
    const openSearch = useSelector((state:RootState)=>state.search.openSearch)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const initialBorderColor = activeSection === '/create' ? 'orange' : 'orange';

    useEffect(() => {
        setActiveSection(window.location.pathname);
      }, [window.location.pathname]);

    const handleSectionClick = (section:any) => {
        setActiveSection(section)
        if(section==='search'){
        dispatch(setOpenSearch())

        }else if(section==='/'){
            navigate('/')
            dispatch(resetSearchState())
        }else if(section === '/create'){
            navigate('/create')
            dispatch(resetSearchState())
        }
      };
      

  return (
    <div className='fixed top-0 left-0 h-screen md:px-4 xl:pr-14 pl-6 pt-10 pb-4  overflow-y-auto border-r border-gray-400 z-10'>
        {toggle ? <img src={darkModeLogo} alt='logo' className='m-auto'/>: <img src={logo} alt='logo' className='m-auto'/>}
        <div className='text-2xl font-normal mt-[7vh] w-fit m-auto' >

                <div className={`flex items-center cursor-pointer py-2.5 ${activeSection === '/' && !openSearch ? `border-l-4 border-${initialBorderColor}-500` : ''}`}
                    onClick={() => handleSectionClick('/')}>
                    <LiaHomeSolid className='lg:ml-3 xl:ml-5'/>
                {!openSearch && <p className='lg:ml-5 ml-11'>Home</p>}
                
                </div>

                <div className={`flex items-center my-[6.875vh] cursor-pointer py-2.5 ${activeSection === 'search' || openSearch ? 'border-l-4 border-orange-500' : ''}`}
                    onClick={() => handleSectionClick('search')}>
                    <BiSearchAlt2 className='lg:ml-3 ml-5'/>
                    {!openSearch && <p className='lg:ml-5 ml-11'>Search</p>}
                </div>

                <div className={`flex items-center cursor-pointer py-2.5 ${activeSection === '/create' && !openSearch? `border-l-4 border-${initialBorderColor}-500` : ''}`}
                onClick={() => handleSectionClick('/create')}>
                    <BiFolderPlus className='lg:ml-3 ml-5'/>
                {!openSearch && <p className='lg:ml-5 ml-11 w-max'>Create Poem</p >}
                </div>
        </div>

        <div className={`py-4  border border-[#F06A30] rounded-3xl m-auto mt-[30vh]  ${!openSearch ? `px-5` : `w-16`}`}>
            {!openSearch && <div className='flex items-center mb-[0.25vh] justify-between'>
                <p >Appearance</p> 
                {!toggle ? <MdOutlineLightMode className='w-11 h-5'/> : <MdLightMode className='w-11 h-5'/>}
                
            </div>}
            {!openSearch && <hr className='h-[1px] bg-[#928F8F]'/>}
            {!openSearch &&<div className='flex items-center my-[26px] justify-between'>
                 <p className=''>Dark mode</p> 
                {toggle ?<PiToggleRightFill className='w-11 h-5 mr-23  cursor-pointer w-[50px] h-[50px]' style={{color:'#E9E9EA'}} onClick={()=>dispatch(setDarkMode())}/> : <PiToggleLeftFill className='w-[50px] h-[50px] cursor-pointer' style={{color:'#E9E9EA'}} onClick={()=>dispatch(setDarkMode())}/>}
                
            </div>
            }

            {openSearch && (
                <div>
                    {toggle ? <PiToggleLeftFill className='w-[50px] h-[150px] m-auto cursor-pointer' style={{color:'#E9E9EA'}}  onClick={()=>dispatch(setDarkMode())}/> : <PiToggleRightFill className='w-[50px] h-[150px] m-auto cursor-pointer' style={{color:'#E9E9EA'}}  onClick={()=>dispatch(setDarkMode())}/>}
                </div>
                )}
        </div>
    </div>
  )
}

export default SideBar

