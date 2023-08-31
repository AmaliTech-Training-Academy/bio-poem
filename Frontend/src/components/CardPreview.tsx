import { IoChevronDown } from 'react-icons/io5'
import { Themes } from './Themes'

export type themeProps = {
    currentOption: string,
}

export const CardPreview: React.FC<themeProps> = ({currentOption}) => {

    
return (
    <div className="mt-8">
        <Themes currentOption={currentOption}/>
        <div className='flex items-center text-customOrange'>
            <span className='text-sm'>Preview</span> <IoChevronDown/>
        </div>
    </div>
    ) 
}
