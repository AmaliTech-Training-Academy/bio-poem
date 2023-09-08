import SideBar from '../components/SideBar'
import SearchPoem from '../components/SearchPoem'
import MainContent from '../components/MainContent'
import { resetState } from '../store/formSlice'
import { useAppDispatch, useAppSelector } from '../store/store'
import { resetTheme } from '../store/themeSlice'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';


const Homepage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const openSearch = useAppSelector((state)=>state.search.openSearch);
  const userId = useAppSelector(state=> state.user.userId);
  console.log(userId);

  useEffect(()=> {
    if(!userId){
      navigate('/get-started')
    }
  })
  
  
  dispatch(resetState())
  dispatch(resetTheme())
  
  return (
    <div className='flex w-full'>
        <SideBar/>
        {openSearch && <SearchPoem/>}
        <div className='w-9/12 md:px-5 xl:pl-10 xl:pr-14'>
        <MainContent/>
      </div>
      </div>
    )
}
export default Homepage