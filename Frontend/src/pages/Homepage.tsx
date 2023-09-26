import SideBar from '../components/SideBar'
import SearchPoem from '../components/SearchPoem'
import MainContent from '../components/MainContent'
import { resetState } from '../store/formSlice'
import { useAppDispatch, useAppSelector } from '../store/store'
import { resetTheme } from '../store/themeSlice'
import { resetProfile } from '../store/userProfile'



const Homepage = () => {
  const dispatch = useAppDispatch();

  const openSearch = useAppSelector((state)=>state.search.openSearch);

  dispatch(resetState())
  dispatch(resetTheme())
  dispatch(resetProfile())
  
  
  
  return (
    <div className='flex h-full overflow-clip'>
        <SideBar/>
        {openSearch && <SearchPoem/>}
        <div style={openSearch ? {width: '65%'} : {width: '85%', overflow: 'hidden'}}>
        <MainContent/>
        </div>
      </div>
    )
  }
  export default Homepage


  {/* <div className={`w-9/12 md:px-5  ${openSearch ? 'lg:ml-[34rem] xl:ml-34 2xl:ml-[38rem]' :undefined}`}> */}