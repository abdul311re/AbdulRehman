import Hero from "../../Components/Quote/Hero"
import Form from '../../Components/Quote/Form'
const Quotation = ()=>{
    return(<>
        <main className="px-28 py-10">
            <div className="flex gap-10">
              <div className="basis-1/2 pr-20"><Hero/></div>
              <div className="basis-1/2"><Form/></div>
            </div>
        </main>
    </>)
}
export default Quotation;