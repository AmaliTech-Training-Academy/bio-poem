import Header from '../components/Header'
import Carousel from '../components/Carousel'
import RecentPoems from '../components/RecentPoems'

const MainContent = () => {
  return (
    <div className='ml-10 w-9/12'>
        <Header/>
        <Carousel/>
        <RecentPoems/>
    </div>
  )
}

export default MainContent