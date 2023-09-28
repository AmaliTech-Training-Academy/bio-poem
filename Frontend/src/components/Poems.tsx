import GridImage from '../assets/user.png'
import { useAppDispatch, useAppSelector } from "../store/store";
import { setPoemSingleData, setShowModal } from "../store/poemSlice";
// import Modal from "./Modal";
import { Poem } from "./Carousel2";
import Pagination from "./Pagination";

type User = {
  _id: string
  username:string
  profileImage:string
}

export type propsObject = {
  _id: string;
  firstName: string;
  lastName: string;
  adjectives: string;
  importantRelation: string;
  loves: string;
  feelings: string;
  fears: string;
  accomplishments: string;
  expectations: string;
  residence: string;
  upvotes: number;
  downvotes: number;
  backgroundTheme: string;
  profileImage: string;
  fontColor: string;
  fontFamily: string
  user: User
}


type propsArray = {
  data: propsObject[];
};

const Poems: React.FC<propsArray> = ({ data }) => {
  const dispatch = useAppDispatch();

  const handleShowSinglePoem = (data: Poem) => {
    dispatch(setPoemSingleData(data)); 
    dispatch(setShowModal());
  };

  const toggle = useAppSelector((state)=>state.darkMode.toggle)
  const openSearch = useAppSelector((state)=>state.search.openSearch)

  // xl:grid-cols-2 grid-cols-1
  return (
    <>
      <div className={`grid gap-x-12 gap-y-7 pr-2 mb-10 ${openSearch ? 'gap-x-3 xl:grid-cols-3' : 'md:grid-cols-2 xl:grid-cols-3  '}`}>
        {data?.map((poem: propsObject) => {
          return (
              <div className={`flex justify-between w-full h-[140px] border-2 rounded-md p-5 items-center ${toggle ? 'bg-black border-[#646363]' : ''}`} 
              key={poem._id}>
                <div>
                  {poem.user.profileImage ? (
                  <img
              className="rounded-full w-[119px] h-[119px]"
              src={poem.user.profileImage}
              alt='profile image'
            />
          ) : (
            <div className='bg-white rounded-full'>
              <img
                className="rounded-full w-[119px] h-[119px]"
                src={GridImage}
                alt="GridImage"
              />
            </div>
          )}
                </div>
                <div className="text-center">
                  <p className="pb-5">
                    {poem.firstName} {poem.lastName}
                  </p>
                  <p
                    onClick={() => handleShowSinglePoem(poem)}
                    className="text-[#F06A30] bg-[#FEF6EE] rounded-xl cursor-pointer w-auto"
                  >
                    Preview
                  </p>
                </div>
              </div>
          );
        })}
      </div>
      <Pagination
      />
    </>
  );
};

export default Poems;
