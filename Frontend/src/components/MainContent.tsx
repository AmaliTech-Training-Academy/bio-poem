import Header from '../components/Header'
import Carousel from '../components/Carousel'
import RecentPoems from '../components/RecentPoems'

const MainContent = () => {
  return (
    <div className='ml-10 pl-4 pr-5 w-full'>
        <Header/>
        <Carousel/>
        <RecentPoems/>
    </div>
  )
}

export default MainContent