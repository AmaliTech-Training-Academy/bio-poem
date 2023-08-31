import { LiaArrowLeftSolid } from 'react-icons/lia'
import { LiaArrowRightSolid } from 'react-icons/lia'
import GridImg from '../assets/Rectangle 36.png'
import Modal from '../components/Modal'
import { useState } from 'react'

// import {Swiper, SwiperSlide } from 'swiper/react'
// import 'swiper/css';

const Carousel = () => {
    const [showModal, setShowModal] = useState(false);

    const handleOnClose = () => setShowModal(false)

  return (
    <div className='mx-auto mt-5'>
        <h1 className='text-2xl font-medium py-7'>Popular Poems</h1>
        <div className='flex items-center'>
            {/* Swiper starts here */}
            {/* <Swiper
                slidesPerView={4}
            >
             <SwiperSlide></SwiperSlide>
            </Swiper> */}
            <button className='rounded-full border-2 border-[#F06A30] h-10 w-10 flex items-center justify-center mr-5'><LiaArrowLeftSolid/></button>
            <div id="content" className='flex gap-x-11'>
                <div onClick={() => setShowModal(true)} className='border-2 rounded-md border-[#F06A30]'>
                    <div>
                        <img className='h-[163px] w-[183px]' src={GridImg} />
                    </div>
                    <div className='text-center'>
                        <h3>Ekow Smith</h3>
                        <p className='text-[#F06A30] cursor-pointer'>Bio Poem</p>
                    </div>
                </div>

                <div onClick={() => setShowModal(true)} className='border-2 rounded-md border-[#F06A30]'>
                <div>
                        <img className='h-[163px] w-[183px]' src={GridImg} />
                    </div>
                    <div className='text-center'>
                        <h3>Ekow Smith</h3>
                        <p className='text-[#F06A30] cursor-pointer'>Bio Poem</p>
                    </div>
                </div>

                <div className='border-2 rounded-md border-[#F06A30]'>
                    <div>
                        <img className='h-[163px] w-[183px]' src={GridImg} />
                    </div>
                    <div className='text-center'>
                        <h3>Ekow Smith</h3>
                        <p className='text-[#F06A30] cursor-pointer'>Bio Poem</p>
                    </div>
                </div>

                <div className='border-2 rounded-md border-[#F06A30]'>
                    <div>
                        <img className='h-[163px] w-[183px]' src={GridImg} />
                    </div>
                    <div className='text-center'>
                        <h3>Ekow Smith</h3>
                        <p className='text-[#F06A30] cursor-pointer'>Bio Poem</p>
                    </div>
                </div>


                <Modal onClose={handleOnClose} visible={showModal}/>
            </div>
            <button className='rounded-full border-2 border-[#F06A30] h-10 w-10 flex items-center justify-center ml-5'><LiaArrowRightSolid/></button>
        </div>
    </div>
  )
}

export default Carousel