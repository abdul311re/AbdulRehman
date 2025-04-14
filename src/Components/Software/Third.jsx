
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight} from '@fortawesome/free-solid-svg-icons';
import 'animate.css';
const Data=[
    {h3:'Introducing Our New App' , p:'If youre introducing something new, like your own app, our software development services can add a unique touch to your idea, ensuring a successful and unforgettable launch.'},
    {h3:'Enhancing Your Current App' , p:'Revitalize your app by adding cutting-edge features and capabilities. Our tailored software development services breathe new life into your app, ensuring it stays up-to-date and boosts user engagement.'},
    {h3:'Accepting Cross-Platform Development' , p:'If youre looking to extend the reach of your software, opt for cross-platform development with our expertise. We assist you in expanding your apps accessibility across multiple platforms, ensuring broader user engagement.'}
];
const Third =()=>{
    return(<>
    <div className="bg-black xl:px-32 lg:px-12 px-4 md:px-10 py-14 lg:flex">
        <div >
            <h2 className='text-3xl font-bold text-white xl:pr-12 lg:pr-6 leading-tight dynapuff-uniquifier'>When You Should Choose Our Custom Software Development Services</h2>
            <p className='text-white pt-4 xl:pr-20 lg:pr-6'>We deliver powerful software solutions for businesses of all sizes—efficiently, with a strong focus on quality, return on investment, and user satisfaction.</p>
            <p className='text-white pt-4 xl:pr-20 lg:pr-6'>Drive success through custom-built software designed to match your unique business goals. You should explore our development services when:</p>
            <div className="lg:my-6 md:my-5 my-7 flex">
  <button className="bg-black border text-white rounded-full pl-8 pr-5 hover:pr-10 hover:pl-4 py-1 relative group overflow-hidden transition-all duration-400 text-sm">
    
    {/* Background for Hover Effect */}
    <span className="absolute left-0 top-0 h-full w-0 bg-white group-hover:w-full transition-all duration-300 z-0"></span>

    {/* Moving Arrow */}
    <span className="absolute left-3 group-hover:left-[260px] transition-all duration-300 z-10">
      <FontAwesomeIcon icon={faAnglesRight} className="group-hover:text-charcoal " />
    </span>

    {/* Text with Gray Color on Hover */}
    <span className="relative z-20 group-hover:text-charcoal transition-all duration-300 font-bold">
    Let’s Develop Your Custom Software
    </span>
    
  </button>
  </div>
        </div>
        {/*////////////////////////////////// Second side////////////////////////////////// */}
        <div className="flex flex-col gap-2 mt-10 lg:mt-0">
        {Data.map((item, index) =>(
            <div  key={index} className='bg-white bg-opacity-10 lg:ml-32 py-2  md:px-10 px-3 text-white group hover:bg-white'>
             <h3 className='py-3 md:text-lg group-hover:text-black'>{item.h3}</h3>
             <p className='pb-4  md:text-base text-sm group-hover:text-black'>{item.p}</p>
            </div>  ))}
        </div>
    </div>
    </>)
}
export default Third;