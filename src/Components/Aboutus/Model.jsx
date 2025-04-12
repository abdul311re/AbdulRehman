import "../../App.css"
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight} from '@fortawesome/free-solid-svg-icons';
import Arlogo from '../../Assets/Arlogo.png'; 
function Model(){
  return (<>
  <div className="md:flex bg-black">
    <div className="md:w-1/2">
    <div className="md:py-36 lg:px-24 md:px-10 px-8 pt-24 pb-36">
      <h1 className="font-bold text-3xl text-purple poppins-bold-italic ">About Aritistic Rule</h1>
      <p className="text-white py-4 text-sm">AR specializes in enterprise software development, working closely with startups and businesses to create and deploy digital transformation strategies tailored to their specific requirements.</p>
      <div className="lg:my-4 my-5 flex">
    <ScrollAnimation animateIn="animate__fadeInRight " duration={2}>
  <button className="bg-purple text-white rounded-md pl-10 pr-5 hover:pr-10 hover:pl-4 py-2 relative group overflow-hidden transition-all duration-400 ">
    
    {/* Background for Hover Effect */}
    <span className="absolute left-0 top-0 h-full w-0 bg-grey group-hover:w-full transition-all duration-300 z-0"></span>

    {/* Moving Arrow */}
    <span className="absolute left-3 group-hover:left-[150px] transition-all duration-300 z-10">
      <FontAwesomeIcon icon={faAnglesRight} className="group-hover:text-black " />
    </span>

    {/* Text with Gray Color on Hover */}
    <span className="relative z-20 group-hover:text-black transition-all duration-300">
      Get a Free Quote
    </span>
    
  </button>
  </ScrollAnimation>
  </div>
      </div>
    </div>
    <div className="md:w-1/2 relative flex items-center justify-center md:my-60 my-20">
     <div className="w-80 h-80 shadow-custom-glow absolute bg-charcoal rounded-full"></div>
     <div className="w-64 h-64 absolute bg-purple rounded-full circle-animations_circle-2__rNBrP " ></div>
     <div className="w-48 h-48 absolute bg-black rounded-full"></div>
     <img src={Arlogo} alt="@" className="absolute w-24 bg-white rounded-xl" />
     
    </div>
  </div>
  </>)
}
export default Model;