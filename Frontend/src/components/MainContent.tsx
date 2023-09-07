import Header from '../components/Header'
import Carousel2 from '../components/Carousel2'
import RecentPoems from '../components/RecentPoems'

const MainContent = () => {
  return (
    <div className='ml-10 pl-4 pr-5 w-full'>
        <Header/>
        <Carousel2/>
        <RecentPoems/>
    </div>
  )
}

export default MainContent