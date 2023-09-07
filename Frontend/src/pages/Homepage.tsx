import SideBar from '../components/SideBar'
import SearchPoem from '../components/SearchPoem'
import MainContent from '../components/MainContent'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'

const Homepage = () => {
  const openSearch = useSelector((state:RootState)=>state.search.openSearch)

  return (
    <div className='flex overflow-x-hidden'>
        <SideBar/>
        {openSearch && <SearchPoem/>}
        <MainContent/>
      </div>
    )
}
export default Homepage