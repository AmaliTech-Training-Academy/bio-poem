import { ProgressStepper } from './ProgressStepper'
import { UserInput } from './UserInput'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'


export const CreatePoemContent = () => {
  const currentPage = useSelector((state:RootState)=> state.form.page);
  const container = document.querySelector(".container-stepper")
  const current = container?.querySelector('[data-title="5"]')
  console.log(current);
  
  
  if(currentPage === 5){
    current?.classList.remove('item-step-current');
    
  }

  return (
    <div className='my-4'>
        <ProgressStepper currentPage={currentPage}/>
        <UserInput currentPage={currentPage}/>
    </div>
  )
}
