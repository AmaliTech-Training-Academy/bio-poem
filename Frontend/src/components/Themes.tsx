import { colors } from '../colorData';
import { patterns } from '../patternData';
import { themeProps } from './CardPreview';

export const Themes: React.FC<themeProps> = ({currentOption}) => {

    if(currentOption === 'none'){
        return null
    }
    console.log(currentOption);
    
  return (
    <div className="mb-6 border border-customGrey1 rounded-lg p-4 h-56 lg:w-12/12 xl:w-[480px] flex flex-wrap justify-center gap-3">
        {currentOption === 'solid' ? colors.map((color) => 
        <div className='w-16 h-14 rounded-lg border border-customGrey1' style={{background: color.color}} key={color.id}></div>
        ) 
        : undefined}
        {currentOption === 'pattern' ? patterns.map((pattern)=> 
        <img className='w-16 h-14 rounded-lg border border-customGrey1' src={pattern.pattern} key={pattern.id}/>
        )
        : undefined
        }
    </div>
  )
}
