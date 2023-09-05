import profile from '../assets/mock-image.png'
import { Questions } from './Questions'

type Props = {
  currentPage: number,
  }

export const UserInput: React.FC<Props> = ({currentPage}) => {
  return (
    <div className='md:w-4/6 xl:w-3/6 my-4 mx-auto'>
        {currentPage >= 4 ? undefined :  
          <img className='w-20 h-20 mx-auto' src={profile}/>
        }
        <Questions currentPage={currentPage}/>
    </div>
  )
}
