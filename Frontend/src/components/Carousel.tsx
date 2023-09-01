import { LiaArrowLeftSolid } from 'react-icons/lia'
import { LiaArrowRightSolid } from 'react-icons/lia'
import GridImg from '../assets/Rectangle 36.png'
import Modal from '../components/Modal'
import { useState } from 'react'
import { poems } from '../data'


// import {Swiper, SwiperSlide } from 'swiper/react'
// import 'swiper/css';

const Carousel = () => {
    const [showModal, setShowModal] = useState(false);
console.log(poems);

    const handleOnClose = () => setShowModal(false)

  return (
    <div className='mt-5 w-11/12 mr-auto'>
        <h1 className='text-2xl font-medium py-7'>Popular Poems</h1>
        <div className='flex items-center'>
            <button className='rounded-full border-2 border-[#F06A30] h-10 w-10 flex items-center justify-center mr-5'><LiaArrowLeftSolid/></button>
            <div id="content" className='flex gap-x-11'>
                {
                    poems.map((poem) => 
                <div onClick={() => setShowModal(true)} className='border-2 rounded-md border-[#F06A30]'>
                    <div>
                        <img className='h-[163px] w-[183px]' src={poem.profilePic} />
                    </div>
                    <div className='text-center'>
                        <h3>{poem.name}</h3>
                        <p className='text-[#F06A30] cursor-pointer'>Bio Poem</p>
                    </div>
                </div>
                    )
                }


                
                {/* Test code for flip */}
                <div className=' bg-orange-100 border-2 rounded-md border-[#F06A30] '>
                    <div className='group h-[163px] w-[183px] [perspective:1000px] '>
                        <div className='relative h-full w-full rounded-xl shadow-xl transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
                            <div className='absolute inset-0'>
                            <img className='h-full w-full rounded-xl' src={GridImg} />
                            <div className='text-center'>
                                <h3>Mat redman</h3>
                                <p className='text-[#F06A30] cursor-pointer'>Bio Poem</p>
                    </div>
                            </div>
                            <div className="absolute inset-0 h-full w-full rounded-xl bg-white px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                <div className='flex flex-col min-h-full items-center justify-center'>
                                    <h3>Ekow Smith</h3>
                                    <p className='text-[#F06A30] text-xs font-light cursor-pointer'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod debitis provident voluptate.</p>
                                    <button className='mt-2 rounded-md bg-neutral-800'>View Poem</button>
                                </div>
                            </div>
                        </div>
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