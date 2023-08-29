
import SideBar from '../components/SideBar'
import MainContent from '../components/MainContent'

const Homepage = () => {
  return (
    <div className='flex w-full'>
        <SideBar/>
        <div>
        <MainContent/>
        </div>
      </div>
    )
}
export default Homepage