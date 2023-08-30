import { ProgressStepper } from './ProgressStepper'
import { UserInput } from './UserInput'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'

export const CreatePoemContent = () => {
  const currentPage = useSelector((state:RootState)=> state.form.page)

  return (
    <div className='my-4'>
        <ProgressStepper currentPage={currentPage}/>
        <UserInput currentPage={currentPage}/>
    </div>
  )
}
