import { CreatePoemHeader } from '../components/CreatePoemHeader'
import { CreatePoemContent } from '../components/CreatePoemContent'
import SideBar from '../components/SideBar'
import { useAppSelector } from '../store/store'
import SearchPoem from '../components/SearchPoem'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';

export const CreatePoem = () => {
  const navigate = useNavigate();

  const userId = useAppSelector(state=> state.user.userId);

  useEffect(()=> {
    if(!userId){
      navigate('/get-started')
    }
  })

  const openSearch = useAppSelector((state)=>state.search.openSearch)
  return (
    <div className='flex overflow-clip'>
        <SideBar/>
        {openSearch && <SearchPoem/>}
        {/* Main Content */}
        <div style={openSearch ? {width: '65%'} : {width: '85%', overflow: 'hidden', padding:'1rem 2rem 0 2rem'}}>            
          <CreatePoemHeader/>
          <CreatePoemContent/>
        </div>
    </div>
  )
}
