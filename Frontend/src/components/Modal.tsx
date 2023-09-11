import GridImg from '../assets/Rectangle 36.png'
import { VscClose } from 'react-icons/vsc'
import { BiDownvote, BiUpvote, } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { setShowModal } from '../store/poemSlice'

interface ModalProps {
  poems: Poem[];
  id: string;
}

const Modal: React.FC = () => {
  const visible = useSelector((state:RootState)=>state.poem.showModal)
  const dispatch = useDispatch()

  // const OnClose = () => dispatch(setShowModal);

  const handleClose = (e:any) =>{
    if(e.target.id === 'container')
    dispatch(setShowModal())
    // onClose();
  }

  if (!visible) return null;

  return (
    <div id='container' onClick={handleClose} className='fixed w-[100%] h-[784px] left-[14%] top-[20%] inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
      <div className='bg-white w-[693px] h-[358px] rounded-3xl px-10 py-5'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <img className='rounded-full h-[65px] w-[65px]' src={GridImg} />
            <p className='ml-5 font-medium text-2xl text-black'>This is a modal</p>
          </div>

          <VscClose
            className="text-xl hover:text-gray-400 cursor-pointer"
            onClick={() => dispatch(setShowModal())}
          />
        </div>

        <div className="flex my-5">
          <div className="flex flex-col items-center ml-7 pt-1">
            <div className="w-2 h-2 rounded-full bg-black"></div>
            <div className="bg-black w-[2px] h-full"></div>
            <div className="w-2 h-2 rounded-full bg-black"></div>
          </div>
          <p className="ml-16">
            <ul>
              <li>{singlePoem.firstName}</li>
              <li>{singlePoem.adjectives}</li>
              <li>{singlePoem.importantRelation}</li>
              <li>Loves to{" "} {singlePoem.loves}</li>
              <li>Who feels {singlePoem.feelings}</li>
              <li>And who is scared of {singlePoem.fears}</li>
              <li>Who {singlePoem.accomplishments}</li>
              <li>{singlePoem.expectations}</li>
              <li>Residence of {singlePoem.residence}</li>
              <li>{singlePoem.lastName}</li>
            </ul>
          </p>
        </div>
        <div className="flex items-center gap-2 ml-24">
          <BiUpvote className="cursor-pointer" onClick={upvotePoem} />
          <span>{singlePoem.upvotes}</span>
          <BiDownvote className="cursor-pointer" onClick={downvotePoem} />
          <span>{singlePoem.downvotes}</span>
        </div>
      </div>
    </div>
  );
};

export default Modal;
