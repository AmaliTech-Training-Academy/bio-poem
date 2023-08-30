
import SideBar from '../components/SideBar'
import SearchPoem from '../components/SearchPoem'
import MainContent from '../components/MainContent'

const Homepage = () => {
  return (
    <div className='flex w-full'>
        <SideBar/>
        <SearchPoem/>
        <MainContent/>
      </div>
    )
}
export default Homepage