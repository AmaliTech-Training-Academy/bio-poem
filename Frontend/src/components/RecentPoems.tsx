import {useEffect, useState} from 'react'
// import GridImg from '../assets/Rectangle 36.png'
import Poems from '../components/Poems';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../store/store';
import { getRecentPoems, selectRecentPoems } from '../store/poemSlice';

const RecentPoems = () => {
    const recentPoems = useSelector(selectRecentPoems);
    const dispatch = useAppDispatch()
    console.log(recentPoems);
    

    // const [images, setImages] = useState([]);

    useEffect(() => {
      dispatch(getRecentPoems())
    }, [])
    

  return (
    <div className='mx-auto mt-5 font-Inter'>
      <div>
        <h1 className="text-2xl font-medium py-7">Recent Poems</h1>
                <Poems data={recentPoems}/>
      </div>
    </div>
  )
}

export default RecentPoems