import none from '../assets/null.png'
import defaultPattern from '../assets/default-pattern.png'
import { CardPreview } from './CardPreview'
import { useDispatch, useSelector } from 'react-redux'
import { changeThemeOption } from '../store/themeSlice'
import {RootState} from '../store/store'


export const CardTheme = () => {
    const dispatch = useDispatch()
    const currentOption = useSelector((state:RootState) => state.theme.theme)

    return (
        <div className="mt-10">
            <div className="font-semibold text-xl mb-6">11. Choose a background or theme for your card</div>
            {/* Select theme */}
            <div className='flex'>
                {/* None */}
                <div className='flex flex-col items-center mr-8 cursor-pointer' 
                    onClick={()=>{dispatch(changeThemeOption('none'))}}>
                    <div className='w-16 h-14 bg-[#D9D9D98C] rounded-lg flex justify-center items-center mb-2'
                    style={currentOption === 'none' ? {border: '1px solid #F06A30'}: undefined}>
                        <img src={none}/>
                    </div>
                    <div className="text-sm font-semibold">None</div>
                </div>
                {/* Solid */}
                <div className='flex flex-col items-center mr-8 cursor-pointer' 
                    onClick={()=>{dispatch(changeThemeOption('solid'))}}>
                    <div className='w-16 h-14 rounded-lg bg-[#00000075] mb-2'
                    style={currentOption === 'solid' ? {border: '1px solid #F06A30'}: undefined}>
                    </div>
                    <div className="text-sm font-semibold">Solid</div>
                </div>
                {/* Pattern */}
                <div className='flex flex-col items-center mr-8 cursor-pointer' 
                    onClick={()=>{dispatch(changeThemeOption('pattern'))}}>
                    <div className='w-16 h-14 bg-[#D9D9D98C] rounded-lg flex justify-center items-center mb-2 overflow-hidden'
                    style={currentOption === 'pattern' ? {border: '1px solid #F06A30'}: undefined}>
                        <img src={defaultPattern}/>
                    </div>
                    <div className="text-sm font-semibold">Pattern</div>
                </div>
            </div>
            <CardPreview currentOption={currentOption}/>
        </div>
    )
}
