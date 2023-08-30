import { FormSection } from "./FormSection"
import { BsArrowLeft } from "react-icons/bs"
import { BsArrowRight } from "react-icons/bs"
import { forward, back } from "../store/formSlice"
import { useDispatch } from 'react-redux'
import { questions } from "../questionsData"
import { CardTheme } from "./CardTheme"

type Props = {
    currentPage: number,
    }

export const Questions: React.FC<Props> = ({currentPage}) => {
    const dispatch = useDispatch()

    const firstPage = questions.slice(0, 4);
    const secondPage = questions.slice(4, 7);
    const thirdPage = questions.slice(7);

    let currentData;

    if(currentPage == 1){
        currentData = firstPage;        
    } 
    if(currentPage == 2){
        currentData = secondPage;        
    } 
    if(currentPage == 3){
        currentData = thirdPage;        
    } 
    

    
    return (
    <form className='mt-4'>
        {currentData?.map((data) => 
            <FormSection 
                question={data.question}
                type={data.type}
                id={data.id}
                height={data.height}
                placeholder={data.placeholder}
                bottom={data.bottom}
                key={data.id}
            />
            )}
        
        { currentPage === 4 ? <CardTheme/> : undefined
        }
        {/* Navigation */}
        <div className="flex justify-between mt-4 mb-8">
            <div className="flex items-center p-[10px] cursor-pointer"
                onClick={()=>{dispatch(back())}}
                style={currentPage > 1 ? {color: '#F06A30'} : undefined}>
                <BsArrowLeft/> 
                <span className="ml-[10px]">Previous</span>
            </div>

            { currentPage === 4 ? ( 
                <button className="p-[10px] bg-customOrange text-white rounded-lg">Submit</button>
            ) :
                <div className="flex items-center p-[10px] cursor-pointer"
                    onClick={()=>{dispatch(forward())}}
                    style={{color: '#F06A30'}}>
                    <span className="mr-[10px]">Next</span>
                    <BsArrowRight/>
                </div>
            }
        </div>
    </form>
    )
}
