import { CreatePoemHeader } from '../components/CreatePoemHeader'
import { CreatePoemContent } from '../components/CreatePoemContent'

export const CreatePoem = () => {
  return (
    <div className='flex'>
        {/* Sidebar */}
        <div className='w-3/12'>Sidebar</div>
        {/* Main Content */}
        <div className='pt-4 w-9/12 pl-10 pr-14'>
            <CreatePoemHeader/>
            <CreatePoemContent/>
        </div>
    </div>
  )
}
