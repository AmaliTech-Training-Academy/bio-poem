import Header from '../components/Header'
import Carousel2 from '../components/Carousel2'
import RecentPoems from '../components/RecentPoems'


const MainContent = () => {
  
  return (
    <div className=' pl-4 w-full'>
        <Header/>
        <div>
        <Carousel2/>
        <RecentPoems/>
        </div>
    </div>
  )
}

export default MainContent