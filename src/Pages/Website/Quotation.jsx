import {useRef, useState } from "react";
import Hero from "../../Components/Quote/Hero"
import Form from '../../Components/Quote/Form'
const Quotation = ()=>{
    const formRef = useRef();
    const [isSubmitted, setIsSubmitted] = useState(false);
  const onSubmitClick = () => {
    if (formRef.current) {
      formRef.current.requestSubmit(); // triggers form submit programmatically
    }
  };
    return(<>
        <main className="px-28 py-10">
            <div className="flex gap-10">
              <div className="basis-1/2 pr-20"><Hero onSubmitClick={onSubmitClick} isSubmitted={isSubmitted} /></div>
              <div className="basis-1/2"><Form formRef={formRef} setIsSubmitted={setIsSubmitted}/></div>
            </div>
        </main>
    </>)
}
export default Quotation;