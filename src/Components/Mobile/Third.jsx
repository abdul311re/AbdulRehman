
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight} from '@fortawesome/free-solid-svg-icons';
import 'animate.css';
const Data=[
    {h3:'Introducing Our New App' , p:'If youre introducing something new, like your own app, our Mobile App development services can add a unique touch to your idea, ensuring a successful and unforgettable launch.'},
    {h3:'Enhancing Your Current App' , p:'Revitalize your app by adding cutting-edge features and capabilities. Our tailored Mobile development services breathe new life into your app, ensuring it stays up-to-date and boosts user engagement.'},
    {h3:'Embracing Cross-Platform Mobile App Development' , p:'Want to maximize your app’s reach? Our cross-platform mobile development services help you deliver seamless experiences across both iOS and Android. We ensure wider accessibility and greater user engagement through a single, efficient codebase.'}
];
const Third =()=>{
    return(<>
    <div className="bg-charcoal xl:px-32 lg:px-12 px-4 md:px-10 py-14 lg:flex">
        <div >
            <h2 className='text-3xl font-bold text-white  lg:pr-6 leading-tight '>When You Should Choose Our Mobile App Development Services</h2>
            <p className='text-white pt-4 xl:pr-10 lg:pr-6'>We create impactful mobile applications for businesses of all sizes—built with efficiency, quality, and user satisfaction in mind, while maximizing return on investment.</p>
            <p className='text-white pt-4 xl:pr-10 lg:pr-6'>Achieve your business goals with custom mobile apps tailored to your unique needs. Discover our mobile app development services when you’re looking for solutions that drive real impact and long-term success.</p>
            <div className="lg:my-6 md:my-5 my-7 flex">
  <button className="bg-charcoal border text-white rounded-full pl-8 pr-5 hover:pr-10 hover:pl-4 py-1 relative group overflow-hidden transition-all duration-400 text-sm">
    
    {/* Background for Hover Effect */}
    <span className="absolute left-0 top-0 h-full w-0 bg-white group-hover:w-full transition-all duration-300 z-0"></span>

    {/* Moving Arrow */}
    <span className="absolute left-3 group-hover:left-[230px] transition-all duration-300 z-10">
      <FontAwesomeIcon icon={faAnglesRight} className="group-hover:text-charcoal " />
    </span>

    {/* Text with Gray Color on Hover */}
    <span className="relative z-20 group-hover:text-charcoal transition-all duration-300 font-bold">
    Let’s Develop Your Mobile App
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