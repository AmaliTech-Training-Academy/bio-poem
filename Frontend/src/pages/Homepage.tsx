import SideBar from '../components/SideBar'
import SearchPoem from '../components/SearchPoem'
import MainContent from '../components/MainContent'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'

const Homepage = () => {
  const openSearch = useSelector((state:RootState)=>state.search.openSearch)

  return (
    <div className='overflow-hidden w-full h-full relative flex z-0'>
        <SideBar/>
        {openSearch && <SearchPoem/>}
        <div className=''>
        <MainContent/>
      </div>
      </div>
    )
}
export default Homepage