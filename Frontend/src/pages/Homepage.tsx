import SideBar from '../components/SideBar'
import SearchPoem from '../components/SearchPoem'
import MainContent from '../components/MainContent'
import { resetState } from '../store/formSlice'
import { useAppDispatch, useAppSelector } from '../store/store'

const Homepage = () => {
  const dispatch = useAppDispatch();

  const openSearch = useAppSelector((state)=>state.search.openSearch)
  dispatch(resetState())
  
  return (
    <div className='flex w-full'>
        <SideBar/>
        {openSearch && <SearchPoem/>}
        <div className='w-9/12 md:px-5 xl:pl-10 xl:pr-14'>
        <MainContent/>
      </div>
      </div>
    )
}
export default Homepage