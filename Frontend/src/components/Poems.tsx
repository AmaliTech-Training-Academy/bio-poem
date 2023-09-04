import { useEffect, useState } from "react";

import ReactPaginate from 'react-paginate'

const Poems = (props) => {
    const {data} = props;
        const [currentItems, setCurrentItems] = useState([]);
        const [pageCount, setPageCount] = useState(0);
        const [itemOffset, setItemOffset] = useState(0);
        const itemsPerPage = 6;


      useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length / itemsPerPage));
      }, [itemOffset,itemsPerPage,data]);
        
      
        const handlePageClick = (event) => {
          const newOffset = (event.selected * itemsPerPage) % data.length;
          setItemOffset(newOffset);
        };
      
        return (
          <>
          <div className="images">
            {currentItems.map(image => {
                return <div>
                    <img src={image.url}/>
                </div>
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