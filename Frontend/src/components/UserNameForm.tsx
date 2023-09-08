import logo from '../assets/new-logo.png'
import bio from '../assets/bio.png'
import { BsArrowRight } from 'react-icons/bs'
import { useAppDispatch } from '../store/store'
import { useAppSelector } from '../store/store'
import { submitUserName, updateUsername } from '../store/userSlice'
import { useNavigate } from 'react-router-dom'


export type Payload = {
    userName: string
}
export const UserNameForm = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate()
    const status = useAppSelector(state=> state.user.status)

    const handleUserName = (e:any) => {
        e.preventDefault()
        const userName: Payload = {userName: e.target.value};
        dispatch(updateUsername(userName))
    }
    
    if(status === 'Fulfilled'){
        navigate('/')
    dispatch(updateUsername({userName: ''}))
    }
    
    const value = useAppSelector(state => state.user.userName);
    console.log(status);
    
return (
    <div className='relative flex flex-col items-center z-30'>
        {/* logo */}
        <div className='flex items-center justify-center h-[123px]'>
            <img src={logo} className='h-[70px] mt-2'/>
            <img src={bio} className=''/>
        </div>
        <div className='text-[#898888] w-[504px] text-center mb-5'>
            In verse, a life unfolds, with words we map,Biopoem app, where stories find their sap.Prepare to embark on a fresh adventure, as you share your tales on this platform.
        </div>
        <div className='text-2xl font-bold mb-6'>Get Started</div>
        <form className='flex items-center justify-center border border-customOrange rounded-lg 2xl:w-[700px] xl:w-[619px] overflow-hidden bg-white pr-4'>
            <input 
                type='text' 
                value={value}
                onChange={handleUserName}
                placeholder='Please Enter Your Username To Get Started' 
                className='w-full px-4 py-5 outline-none'/>
                <div 
                className='flex items-center justify-center gap-4 bg-customOrange text-white rounded-lg px-3 h-10'
                onClick={()=>dispatch(submitUserName({username:value}))}
            >
                <div className='text-sm'>Submit</div>
                <div 
                style={{
                    background: 'rgba(252, 255, 252, 0.4)', 
                    borderRadius: '50%'}}
                    className='w-7 h-7 flex items-center justify-center'>
                    <BsArrowRight/>
                </div>
            </div>
        </form>
    </div>
  )
}
