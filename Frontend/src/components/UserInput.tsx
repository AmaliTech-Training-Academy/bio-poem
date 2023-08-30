import profile from '../assets/mock-image.png'
import { Questions } from './Questions'

type Props = {
  currentPage: number,
  }

export const UserInput: React.FC<Props> = ({currentPage}) => {
  return (
    <div className='w-4/6 my-4 mx-auto'>
        <img className='w-20 h-20 mx-auto' src={profile}/>
        <Questions currentPage={currentPage}/>
    </div>
  )
}
