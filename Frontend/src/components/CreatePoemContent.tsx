import { ProgressStepper } from './ProgressStepper'
import { UserInput } from './UserInput'
import { useAppSelector } from '../store/store'


export const CreatePoemContent = () => {
  const currentPage = useAppSelector((state)=> state.form.page);

  return (
    <div className='mt-4 h-fit overflow-hidden'>
        <ProgressStepper currentPage={currentPage}/>
        <UserInput currentPage={currentPage}/>
    </div>
  )
}
