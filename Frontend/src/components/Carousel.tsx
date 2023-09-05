// import { LiaArrowLeftSolid } from 'react-icons/lia'
// import { LiaArrowRightSolid } from 'react-icons/lia'
// // import GridImg from '../assets/Rectangle 36.png'
// import Modal from '../components/Modal'
// import { useState } from 'react'
// import { poems } from '../data'


// // import {Swiper, SwiperSlide } from 'swiper/react'
// // import 'swiper/css';

// const Carousel = () => {
//     const [showModal, setShowModal] = useState(false);
//     const handleOnClose = () => setShowModal(false)

//     const slideLeft = () => {
//         var slider = document.getElementById('slider')
//         slider.scrollLeft = slider.scrollLeft - 500;
//     }

//     const slideright = () => {
//         var slider = document.getElementById('slider')
//         slider.scrollLeft = slider.scrollLeft + 500;
//     }

//   return (
//     <div className='mt-5 w-11/12 mr-auto'>
//         <h1 className='text-2xl font-medium py-7'>Popular Poems</h1>
//         <div className='relative flex items-center'>
//         <button onClick={slideLeft} className='rounded-full border-2 border-[#F06A30] h-10 w-10 flex items-center justify-center mr-5'><LiaArrowLeftSolid/></button>
//             <div id='slider' className='flex w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
//             {poems.map((poem, index) => (
//                 <div key={index} className='inline-block mr-4'> {/* Add margin-right to create gaps */}
//                     {/* Your card content here */}
//                     <img src={poem.profilePic} alt="" />
//                 </div>
//             ))}
//                 <Modal onClose={handleOnClose} visible={showModal}/>
//             </div>
//             <button onClick={slideright} className='rounded-full border-2 border-[#F06A30] h-10 w-10 flex items-center justify-center ml-5'><LiaArrowRightSolid/></button>
//         </div>

//         {/* <div className='relative flex items-center'> */}
//             {/* <button className='rounded-full border-2 border-[#F06A30] h-10 w-10 flex items-center justify-center mr-5'><LiaArrowLeftSolid/></button> */}
//             <div id="slider" className=''>
                
                

                
//                 {/* Test code for flip */}
//                 {/* <div className=' bg-orange-100 border-2 rounded-md border-[#F06A30] '>
//                     <div className='group h-[163px] w-[183px] [perspective:1000px] '>
//                         <div className='relative h-full w-full rounded-xl shadow-xl transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
//                             <div className='absolute inset-0'>
//                             <img className='h-full w-full rounded-xl' src={GridImg} />
//                                 <div className='text-center [backface-visibility:hidden]'>
//                                     <h3>Mat redman</h3>
//                                     <p className='text-[#F06A30] cursor-pointer'>Bio Poem</p>
//                                 </div>
//                             </div>
//                             <div className="absolute inset-0 h-full w-full rounded-xl bg-white px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
//                                 <div className='flex flex-col min-h-full items-center justify-center'>
//                                     <h3>Ekow Smith</h3>
//                                     <p className='text-[#F06A30] text-xs font-light cursor-pointer'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod debitis provident voluptate.</p>
//                                     <button className='mt-2 rounded-md bg-neutral-800'>View Poem</button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div> */}


//             {/* </div> */}
//             {/* <button className='rounded-full border-2 border-[#F06A30] h-10 w-10 flex items-center justify-center ml-5'><LiaArrowRightSolid/></button> */}
//         </div>
//     </div>
//   )
// }

// export default Carousel

import React, { useState } from 'react';
import { LiaArrowLeftSolid, LiaArrowRightSolid } from 'react-icons/lia';
import Modal from '../components/Modal';
import { poems } from '../data';

const Carousel = () => {
  const [showModal, setShowModal] = useState(false);
  const handleOnClose = () => setShowModal(false);
  const cardWidth = 700; 
  const cardMargin = 50; 
  const cardsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(0);

  const slideLeft = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const slideRight = () => {
    const maxPage = Math.ceil(poems.length / cardsPerPage) - 1;
    if (currentPage < maxPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const visibleCards = poems.slice(currentPage * cardsPerPage, (currentPage + 1) * cardsPerPage);

  return (
    <div className='mt-5 w-11/12 mr-auto'>
      <h1 className='text-2xl font-medium py-7'>Popular Poems</h1>
      <div className='relative flex items-center'>
        <button onClick={slideLeft} className='rounded-full border-2 border-[#F06A30] h-10 w-10 flex items-center justify-center mr-5'>
          <LiaArrowLeftSolid />
        </button>
        <div id='slider' className='flex w-full h-full overflow-x-hidden whitespace-nowrap scroll-snap-type-x mandatory scrollbar-hide'>
          {visibleCards.map((poem, index) => (
            <div onClick={() => setShowModal(true)} key={index} className='inline-block border-4 border-[#F06A30] rounded-md' style={{ marginRight: cardMargin, scrollSnapAlign: 'start' }}>
              {/* Your card content here */}
              <img className='h-[163px]' src={poem.profilePic} alt='' style={{ width: cardWidth }} />
              <div className='text-center my-5'>
                <h3>{poem.name}</h3>
                <p>Bio Poem</p>
              </div>
            </div>
            
          ))}
          <Modal onClose={handleOnClose} visible={showModal} />
        </div>
        <button onClick={slideRight} className='rounded-full border-2 border-[#F06A30] h-10 w-10 flex items-center justify-center ml-5'>
          <LiaArrowRightSolid />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
