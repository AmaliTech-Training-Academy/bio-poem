import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { LiaArrowLeftSolid, LiaArrowRightSolid } from 'react-icons/lia';
import GridImg from '../assets/Rectangle 36.png'

// import { poems } from '../data';
import Modal from './Modal';
import { setShowModal } from '../store/poemSlice';
import { useAppDispatch, useAppSelector } from '../store/store';
import { useState, useEffect } from 'react';
import { searchPoem } from '../store/searchSlice';


interface Poem {
  id: number;
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
}
interface SampleArrowProps {
  onClick: () => void;
}

function SampleNextArrow({ onClick }: SampleArrowProps){
    
    return (
      <div 
      onClick={onClick} 
      className='rounded-full border-2 border-[#F06A30] h-10 w-10 flex items-center justify-center ml-5 absolute -right-12 bottom-40 cursor-pointer'>
        <LiaArrowRightSolid />
      </div>
    );
  }
  
  function SamplePrevArrow({onClick}: SampleArrowProps){
    
    return (
      <div 
      onClick={onClick} 
      className='rounded-full border-2 border-[#F06A30] h-10 w-10 flex items-center justify-center mr-5 absolute -left-12 bottom-40 cursor-pointer'>
        <LiaArrowLeftSolid />
      </div>
    );
  }

const Carousel2: React.FC = () => {
    const dispatch = useAppDispatch();
    const searchResponse = useAppSelector((state) => state.search.response);
    const [poems, setPoems] = useState<Poem[]>([])

    // console.log('response',searchResponse)
    // console.log(poems);
    

    useEffect(() => {
      dispatch(searchPoem())
      setPoems(searchResponse.poems)
    },)
    

    console.log(poems);
    
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow onClick={() => {}} />,
      prevArrow: <SamplePrevArrow onClick={() => {}} />,
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
              <div className='overflow-hidden border-4 border-[#F06A30] rounded-md ' key={ele.id}>
                <div className='group [perspective:1000px]'>
                  <div className='inset-0 transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
                        <div>
                            <img className='object-cover w-[100%] h-[250px]' src={GridImg} alt="" />
                        </div>
                        <div className='text-center py-5'>
                        <h2 className='text-[#646363] font-semibold'> {ele.firstName} {ele.lastName}
                         </h2>
                        <p onClick={() => dispatch(setShowModal())} className='text-[#F90A0A] cursor-pointer'>Bio poem</p>
                        </div>

                        <div className="absolute inset-0 h-full w-full rounded-xl bg-white px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <div className='flex flex-col min-h-full items-center justify-center py-10'>
                                    {/* <h3 className='font-semibold'>{ele.firstName}</h3> */}
                                    <p className='text-[#646363] text-lg font-light cursor-pointer'>{ele.adjectives} {ele.importantRelation} Loves to {ele.loves} {ele.feelings}</p>
                                    <p className='text-[#646363] text-lg font-light cursor-pointer'>{ele.fears} Who {ele.accomplishments} {ele.expectations} Residence of {ele.residence}</p>
                                    {/* <h3 className='font-semibold'>{ele.lastName}</h3> */}
                                    <button onClick={() => dispatch(setShowModal())} className='mt-2 rounded-md border-[#A5A2A2] border-2 bg-[#F06A30] py-3 px-2 text-white'>View Poem</button>
                                </div>
                            </div>
                    </div>
                </div>
              </div>
             ))}
        </Slider>
         <Modal />
    </div>
  )
}

export default Carousel2