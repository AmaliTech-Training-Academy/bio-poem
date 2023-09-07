import { CreatePoemHeader } from '../components/CreatePoemHeader'
import { CreatePoemContent } from '../components/CreatePoemContent'
import SideBar from '../components/SideBar'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import SearchPoem from '../components/SearchPoem'

export const CreatePoem = () => {
  const openSearch = useSelector((state:RootState)=>state.search.openSearch)
  return (
    <div className='flex overflow-x-hidden'>
        <SideBar/>
        {openSearch && <SearchPoem/>}
        {/* Main Content */}
        <div className='pt-4 w-9/12 md:px-5 xl:pl-10 xl:pr-14'>
            <CreatePoemHeader/>
            <CreatePoemContent/>
        </div>
    </div>
  )
}
