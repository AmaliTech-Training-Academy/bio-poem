import Header from '../components/Header'
import Carousel2 from '../components/Carousel2'
import RecentPoems from '../components/RecentPoems'
import Modal from './Modal'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'

const MainContent = () => {
  const enableModal = useSelector((state:RootState)=>state.poem.enableModal)

  console.log('modal', enableModal);
  
  return (
    <div className='ml-10 pl-4 w-full'>
        <Header/>
        <div>
        <Carousel2/>
        <RecentPoems/>
        </div>
        {enableModal && <Modal/>}
    </div>
  )
}

export default MainContent