import Header from '../components/Header'
import Carousel2 from '../components/Carousel2'
import RecentPoems from '../components/RecentPoems'
import Modal from './Modal'
// import { useAppSelector } from '../store/store'

const MainContent = () => {
  // const openSearch = useAppSelector((state)=>state.search.openSearch)
  
  return (
    <div className='overflow-hidden pl-1 pr-5'>
        <Header text1='Bio Poem'/>
        <div className='relative overflow-hidden'>
          <Carousel2/>
          <RecentPoems/>
          <Modal/>
        </div>
    </div>
  )
}

export default MainContent

// '2xl:w-8/12  xl:w-8/12 lg:w-7/12'