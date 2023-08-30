import { Stepper } from 'react-stepper-responsive'
import '../App.css'

type Props = {
currentPage: number,
}

export const ProgressStepper: React.FC<Props> = ({currentPage}) => {

  
  return (
    <div className='md:w-3/6 xl:w-2/6 mx-auto'>
    <Stepper
      steppers={["1", "2", "3", "4", "5"]}
      lineStyle	= {{background: '#D1D5DB' }}
      progressStyle	= {{background: '#F06A30', color: '#F06A30' }}
      currentStep={currentPage}
    />
    </div>
    )
  }
  
