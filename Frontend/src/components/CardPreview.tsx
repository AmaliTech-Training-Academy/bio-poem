import { IoChevronDown, IoChevronUp } from 'react-icons/io5'
import {BiDownvote, BiUpvote } from 'react-icons/bi'
import { IoClose } from 'react-icons/io5'
import { Themes } from './Themes'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { useState } from 'react'
import profile from '../assets/searchImage.png'
// import line from '../assets/line.png'


export type themeProps = {
    currentOption: string,
}

export const CardPreview: React.FC<themeProps> = ({currentOption}) => {
    const [view, setView] = useState<boolean>(false)
    // const selectedTheme = useSelector((state: RootState)=> state.form.answers.backgroundTheme)

    const userPoem = useSelector((state:RootState)=> state.form.answers);
    const poemData = Object.values(userPoem);
    
    console.log(poemData);
    
return (
    <div className="mt-8">
        <Themes currentOption={currentOption}/>
        <div className='flex  flex-col self-start text-customOrange'>
            <div >
                <div className='flex w-[70px] justify-between items-center cursor-pointer text-sm mb-4' onClick={()=>setView(!view)}>Preview  {view ? <IoChevronUp/> : <IoChevronDown/>}</div> 
            </div>
            {/* Preview */}
            {view ?
                <div className='border border-customGrey1 rounded-lg px-16 pt-4 pb-6 xl:w-9/12'>
                    <div className='rounded-lg border border-black bg-contain relative overflow-hidden lg:w-full' style={{background: userPoem.backgroundTheme.length <= 9 ? userPoem.backgroundTheme: 'none'}}>
                        {userPoem.backgroundTheme.length > 9 ?
                            <img 
                        src={ userPoem.backgroundTheme} 
                        className='absolute z-10 h-full w-full' 
                        style={userPoem.backgroundTheme.length <= 9 ? {display: 'none'} : undefined  }/>
                        : undefined}
                        <div className='z-40 relative px-4 py-1'>
                            <div className='flex items-center'>
                                <img src={profile} className='w-6 h-6 rounded-full'/>
                                <div className='ml-3 text-xs'>{userPoem.firstName +' '+ userPoem.lastName}</div>
                                <IoClose className="ml-auto text-black w-3 h-3"/>
                            </div>
                            <div className='pl-2 flex'>
                                <div className='flex flex-col items-center pt-1'>
                                    <div className='w-2 h-2 rounded-full bg-black'></div>
                                    <div className='bg-black w-[2px] h-full'></div>
                                    <div className='w-2 h-2 rounded-full bg-black'></div>
                                </div>
                                <ul className='text-black ml-5 text-[10px] font-semibold leading-3'>
                                    {
                                    poemData.slice(0, 10).map(line => <li>{line}</li>)
                                    }
                                </ul>
                            </div>
                            <div className='flex ml-8 text-black'>
                                <BiUpvote/> <span className='mr-2'></span> <BiDownvote/> <span></span>
                            </div>
                        </div>
                    </div>
                </div>
                : undefined
            }
        </div>
    </div>
    ) 
}
