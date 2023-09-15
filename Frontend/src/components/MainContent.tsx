import Header from '../components/Header'
import Carousel2 from '../components/Carousel2'
import RecentPoems from '../components/RecentPoems'
import Modal from './Modal'

const MainContent = () => {
  
  return (
    <div className=' pl-4 w-full'>
        <Header/>
        <div className='relative'>
          <Carousel2/>
          <RecentPoems/>
          <Modal/>
        </div>
    </div>
  )
}

export default MainContent