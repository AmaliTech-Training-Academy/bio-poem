import SideBar from '../components/SideBar'
import SearchPoem from '../components/SearchPoem'
import MainContent from '../components/MainContent'
import { resetState } from '../store/formSlice'
import { useAppDispatch, useAppSelector } from '../store/store'
import { resetTheme } from '../store/themeSlice'



const Homepage = () => {
  const dispatch = useAppDispatch();

  const openSearch = useAppSelector((state)=>state.search.openSearch);
  const userId = useAppSelector(state=> state.user.userId);

  
  dispatch(resetState())
  dispatch(resetTheme())
  
  
  
  return (
    <div className='flex overflow-x-hidden'>
        <SideBar/>
        {openSearch && <SearchPoem/>}
        <div className={`w-9/12 md:px-5  ${openSearch ? 'xl:ml-34 2xl:ml-[38rem]' :'xl:ml-34 2xl:ml-80 ml-auto'}`}>
        <MainContent/>
        </div>
      </div>
    )
}
export default Homepage