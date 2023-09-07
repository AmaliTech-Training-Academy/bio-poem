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
    <div className='flex'>
        <SideBar/>
        {openSearch && <SearchPoem/>}
        <div className=''>
        <MainContent/>
      </div>
      </div>
    )
}
export default Homepage