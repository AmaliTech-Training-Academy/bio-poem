import { CreatePoemHeader } from '../components/CreatePoemHeader'
import { CreatePoemContent } from '../components/CreatePoemContent'
import SideBar from '../components/SideBar'

export const CreatePoem = () => {
  return (
    <div className='flex'>
        {/* Sidebar */}
        {/* <div className='w-3/12'></div> */}
        <SideBar/>
        {/* Main Content */}
        <div className='pt-4 w-9/12 lg:px-5 xl:pl-10 xl:pr-14'>
            <CreatePoemHeader/>
            <CreatePoemContent/>
        </div>
    </div>
  )
}
