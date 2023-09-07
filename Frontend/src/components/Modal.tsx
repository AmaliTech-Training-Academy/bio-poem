import GridImg from '../assets/Rectangle 36.png'
import { VscClose } from 'react-icons/vsc'
import { BiDownvote, BiUpvote, } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, useAppSelector } from '../store/store'
import { setShowModal } from '../store/poemSlice'


const Modal: React.FC = () => {
  const dispatch = useDispatch()
  const poemsResponse = useAppSelector((state)=>state.search.response)
  
  const allPoems = poemsResponse.poems
  console.log('allData', allPoems);

  return (
    <div id='container'  className='fixed  inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center' onClick={()=>dispatch(setShowModal())}>
      <div className='bg-white w-[693px] h-[358px] rounded-3xl px-10 py-5'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <img className='rounded-full h-[65px] w-[65px]' src={GridImg} alt=''/>
            <p className='ml-5 font-medium text-2xl text-black'>This is a modal</p>
          </div>
          
          <VscClose className='text-xl hover:text-gray-400 cursor-pointer' onClick={()=>dispatch(setShowModal())}/>
        </div>

        <div className='flex my-5'>
            <div className='flex flex-col items-center ml-7 pt-1'>
                <div className='w-2 h-2 rounded-full bg-black'></div>
                <div className='bg-black w-[2px] h-full'></div>
                <div className='w-2 h-2 rounded-full bg-black'></div>
            </div>
            <p className='ml-16'>
                
              </p>
        </div>
        <div className='flex items-center gap-2 ml-24'>
          <BiUpvote/><span>0</span>
          <BiDownvote/><span>0</span>
        </div>
      </div>
    </div>
  )
}

export default Modal