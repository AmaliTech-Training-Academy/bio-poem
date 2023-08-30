
type Props = {
    question: string,
    type: string,
    id: string,
    height: string,
    placeholder:string,
    bottom: string,
}

export const FormSection: React.FC<Props> = ({question, type, id, height, placeholder, bottom}) => {
  return (
    <div className="flex flex-col" >  
        <label htmlFor={id} className="px-3 font-semibold text-xl py-[10px]">{question}</label>
        <input 
        type={type} 
        id={id} name={id} 
        className="border border-[#D9D9D9] text-[#646363] rounded-lg outline-none px-3" 
        style={{height: height, paddingBottom: bottom}}
        placeholder={placeholder}/>    
    </div>
  )
}
