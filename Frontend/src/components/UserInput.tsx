import { Questions } from './Questions'
import camera from '../assets/camera-icon.png'
import profile from '../assets/searchImage.png'

type Props = {
  currentPage: number,
  }

export const UserInput: React.FC<Props> = ({currentPage}) => {

  // const form = new FormData();
  // form.append("test", currentPage);

  // console.log(form);
  
  return (
    <div className='md:w-4/6 xl:w-3/6 my-4 mx-auto'>
        {currentPage ===  1 ?
        <div className='relative w-1/6 mx-auto cursor-pointer'>
          <img className='w-20 h-20 rounded-full mx-auto' src={profile}/>
          <div className='absolute w-8 h-8 border bg-white flex items-center justify-center border-black rounded-full top-10 -right-4'>
            <img className='' src={camera} />
          </div>
        </div> : undefined
        }
        <Questions currentPage={currentPage}/>
    </div>
  )
}
