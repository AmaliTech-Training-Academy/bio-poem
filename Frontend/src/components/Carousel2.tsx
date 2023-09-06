import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { LiaArrowLeftSolid, LiaArrowRightSolid } from 'react-icons/lia';
import GridImg from '../assets/Rectangle 36.png'

// import { poems } from '../data';
import Modal from './Modal';
import { setShowModal } from '../store/poemSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { useState, useEffect } from 'react';
import { searchPoem } from '../store/searchSlice';


function SampleNextArrow({ onClick }) {
    
    return (
      <div onClick={onClick} className='rounded-full border-2 border-[#F06A30] h-10 w-10 flex items-center justify-center ml-5 absolute -right-12 bottom-40 cursor-pointer'>
        <LiaArrowRightSolid />
      </div>
    );
  }
  
  function SamplePrevArrow({ onClick }) {
    
    return (
      <div onClick={onClick} className='rounded-full border-2 border-[#F06A30] h-10 w-10 flex items-center justify-center mr-5 absolute -left-12 bottom-40 cursor-pointer'>
        <LiaArrowLeftSolid />
      </div>
    );
  }

const Carousel2 = () => {
    const dispatch = useDispatch();
    const searchResponse = useSelector((state: RootState) => state.search.response);
    const [poems, setPoems] = useState([])
    console.log('response',searchResponse)
    console.log(poems);
    

    useEffect(() => {
      dispatch(searchPoem())
      setPoems(searchResponse.poems)
    }, [dispatch])
    

    console.log(poems);
    
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

  return (
    <div className='h-[500px] w-[1150px] mt-5 mr-auto'>
        <h1 className="text-2xl font-medium py-7">Popular Poems</h1>
        <Slider {...settings}>
            {poems.map((ele) => (
                    <div className='overflow-hidden border-4 border-[#F06A30] rounded-md' key={ele.id}>
                        <div>
                            <img className='object-cover w-[100%] h-[250px]' src={GridImg} alt="" />
                        </div>
                        <div className='text-center py-5'>
                        <h2 className='text-[#646363] font-semibold'> {ele.firstName} {ele.lastName}
                         </h2>
                        <p onClick={() => dispatch(setShowModal())} className='text-[#F90A0A] cursor-pointer'>Bio poem</p>
                        </div>
                    </div>
             ))}
        </Slider>
            <Modal />
    </div>
  )
}

export default Carousel2