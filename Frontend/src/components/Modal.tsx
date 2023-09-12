import GridImg from "../assets/Rectangle 36.png";
import { VscClose } from "react-icons/vsc";
import { BiDownvote, BiUpvote } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { setShowModal } from "../store/poemSlice";
import { Poem } from "./Carousel2";
import axios from 'axios'
import {useState} from 'react'

interface ModalProps {
  poems?: Poem[];
  id?: string;
}

const Modal: React.FC<ModalProps> = () => {
  const visible = useSelector((state: RootState) => state.poem.showModal);
  const singlePoem = useSelector((state: RootState) => state.poem.singlePoem);
  const [vote, setVote] = useState(null)
  const dispatch = useDispatch();

  const upvotePoem = async () => {
      const url = `https://bio-poem.onrender.com/api/v1/poems/${singlePoem._id}/upvote`;
      try {
        const response = await axios.post(url);
        console.log('uptake', response.data.message);
        setVote(response.data.message)
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  const downvotePoem = async () => {
    const url = `https://bio-poem.onrender.com/api/v1/poems/${singlePoem._id}/downvote`;
    try {
      const response = await axios.post(url);
      console.log('downtake', response);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

  const handleClose = (e: any) => {
    if (e.target.id === "container") dispatch(setShowModal());
  };

  if (!visible || !singlePoem ) return null;


  return (
    <div
      id="container"
      onClick={handleClose}
      className="fixed w-[100%] h-[784px] left-[14%] top-[20%] inset-0 bg-black bg-opacity-5 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="absolute top-20 w-[693px] rounded-3xl px-10 py-5" 
      style={{background: singlePoem.backgroundTheme.length <= 9 ? singlePoem.backgroundTheme : "#ffffff" }}>
        {singlePoem.backgroundTheme.length > 9 ?
                            <img 
                        src={ singlePoem.backgroundTheme} 
                        className='absolute h-full w-full' 
                        style={{background: singlePoem.backgroundTheme.length <= 9 ? '#ffffff' : undefined}}/>
                        : undefined}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              className="rounded-full h-[65px] w-[65px]"
              src={GridImg}
              alt="Profile"
            />
            <p className="ml-5 font-medium text-2xl text-black">
              {singlePoem.firstName} {singlePoem.lastName}
            </p>
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
  
            <ul className="ml-16 z-20">
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
  
        </div>
        <div className="flex items-center gap-2 ml-24">
          <BiUpvote className="cursor-pointer" onClick={upvotePoem} style={vote !== null && {color:'red'}}/>
          <span>{vote !== null ? singlePoem.upvotes +1 : singlePoem.upvotes}</span>
          <BiDownvote className="cursor-pointer" onClick={downvotePoem} />
          <span>{singlePoem.downvotes}</span>
        </div>
      </div>
    </div>
  );
};

export default Modal;
