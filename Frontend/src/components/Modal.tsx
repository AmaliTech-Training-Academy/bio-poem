import GridImg from '../assets/Rectangle 36.png'
import { VscClose } from 'react-icons/vsc'
import { BiDownvote, BiUpvote, BiSolidDownvote, BiSolidUpvote } from 'react-icons/bi'


const Modal = ({visible, onClose}) => {
  
  const handleClose = (e) =>{
    if(e.target.id === 'container')
    onClose();
  }

  if (!visible) return null;

  return (
    <div id='container' onClick={handleClose} className='fixed w-[1118px] h-[784px] left-[49rem] top-[20%] inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
      <div className='bg-white w-[693px] h-[358px] rounded-3xl px-10 py-5'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <img className='rounded-full h-[65px] w-[65px]' src={GridImg} />
            <p className='ml-5 font-medium text-2xl text-black'>This is a modal</p>
          </div>
          
          <VscClose className='text-xl hover:text-gray-400 cursor-pointer' onClick={onClose}/>
        </div>

        <div className='flex my-5'>
            <div className='flex flex-col items-center ml-7 pt-1'>
                <div className='w-2 h-2 rounded-full bg-black'></div>
                <div className='bg-black w-[2px] h-full'></div>
                <div className='w-2 h-2 rounded-full bg-black'></div>
            </div>
            <p className='ml-16'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Sapiente perspiciatis accusamus molestias, 
                ipsum ratione provident quis, 
                repudiandae nam voluptate maiores tempora neque porro quo quibusdam perferendis, 
                dolorem tempore cum. 
                Libero iusto unde facilis repellat laboriosam blanditiis consequuntur commodi soluta adipisci!
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