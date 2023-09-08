import { useEffect, useState } from "react";
import { useAppDispatch } from "../store/store";
import GridImg from '../assets/Rectangle 36.png'
import ReactPaginate from 'react-paginate'
import { setShowModal } from '../store/poemSlice';
import Modal from "./Modal";

type propsObject = {
  _id: string
 firstName: string
 lastName: string
 image: string
}

type propsArray = {
  data: propsObject[]
}

const Poems: React.FC<propsArray> = ({data}) => {
  
  // const dispatch = useDispatch();
  const [currentItems, setCurrentItems] = useState<propsObject[]>([]);
        const [pageCount, setPageCount] = useState(0);
        const [itemOffset, setItemOffset] = useState(0);
        const itemsPerPage = 6;


      useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length / itemsPerPage));
      }, [itemOffset,itemsPerPage,data]);
        
      
        const handlePageClick = (event: any) => {
          const newOffset = (event.selected * itemsPerPage) % data.length;
          setItemOffset(newOffset);
        };
      console.log(currentItems);
      
        return (
          <>
          <div className="grid grid-cols-3 gap-x-12 gap-y-9 mb-10">
            {data?.map((poem:propsObject) => {
                return (
                <div key={poem._id}>
                <div className='flex justify-between w-[299px] h-[140px] border-2 rounded-md p-5 items-center'>
                        <div >
                            <img className='rounded-full w-[119px] h-[119px]' src={GridImg} />
                        </div>
                        <div className='text-center'>
                        <p>{poem.firstName} {poem.lastName}</p>
                            <p onClick={() => dispatch(setShowModal())} className='text-[#F06A30] bg-[#FEF6EE] rounded-xl cursor-pointer'>Preview</p>
                        </div>
                    </div>
                    <Modal />
                </div>
                )
            })}
          </div>
            <ReactPaginate
              breakLabel="..."
              nextLabel="Next >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel="< Previous"
              renderOnZeroPageCount={null}
              containerClassName="pagination"
              pageLinkClassName="page-num"
              previousLinkClassName="page-num"
              nextLinkClassName="page-num"
              activeLinkClassName="active"
            />
          </>
        );
      }

export default Poems