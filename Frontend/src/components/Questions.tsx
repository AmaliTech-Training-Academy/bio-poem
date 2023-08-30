import { FormSection } from "./FormSection"
import { BsArrowLeft } from "react-icons/bs"
import { BsArrowRight } from "react-icons/bs"
import { forward, back } from "../store/formSlice"
import { questions } from "../questionsData"
import { CardTheme } from "./CardTheme"
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/store'
// import { data } from "../store/formSlice"

type Props = {
    currentPage: number,
    }

export const Questions: React.FC<Props> = ({currentPage}) => {
    const dispatch = useDispatch()
    
    const answers = useSelector((state:RootState)=> state.form.answers)
    console.log(answers);

    const firstPage = questions.slice(0, 4);
    const secondPage = questions.slice(4, 7);
    const thirdPage = questions.slice(7);

    const firstPageValues = answers.slice(0, 4);
    const secondPageValues = answers.slice(4, 7);
    const thirdPageValues = answers.slice(7);

    // let test = answers[3]
    // console.log(Object.keys(test)[0]);
    // let id = 'fname';
    // // // const answerIndex = answers.findIndex((answer)=> Object.keys(answer)[0] === id);
    // const answerArr = answers.filter((answer) => Object.keys(answer)[0] === id)
    // console.log(answerArr);
    // let newb = answerArr[0][id] = 'ben';


    // console.log(newb);

    // const newAnswer = answers[answerIndex][id]
    // console.log(answers[answerIndex][id] = 'Hello');
    

    let currentData;
    let currentValues: any;

    if(currentPage == 1){
        currentData = firstPage;   
        currentValues = firstPageValues;
    } 
    if(currentPage == 2){
        currentData = secondPage;
        currentValues = secondPageValues;        
    } 
    if(currentPage == 3){
        currentData = thirdPage;
        currentValues = thirdPageValues;        
    } 
    

    return (
    <form className='mt-4'>
        {currentData?.map((data, index) => 
            <FormSection 
                question={data.question}
                type={data.type}
                id={data.id}
                height={data.height}
                placeholder={data.placeholder}
                bottom={data.bottom}
                key={data.id}
                value={currentValues[index][data.id]}
            />         
        )}
        
        { currentPage === 4 ? <CardTheme/> : undefined }
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
