import Dmodel from "./Dmodel";
import ScrollAnimation from 'react-animate-on-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight} from '@fortawesome/free-solid-svg-icons';
import Breadcrumb from "../Breadcrumb.jsx";
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Services' },
    { label: 'Software Development', href: '/Software' }, // Current page (no link)
  ];
  
const Hero = ()=>{
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".two",
        start: "top 20%",
        end: "center 20%",
        scrub: true,
        markers: false,
        toggleClass: "red", // Moved here ✅
      },
    });

    tl.to(".two", {
      opacity: 1,
      top: "260px",
      left: "50%",
      transform: 'translate(-50%, 50px)',
      transition: 'all 0.5s ease',
      duration: 1,
    });
  }, []);
    return(<>
    <div className="relative">
    <div className="flex ">
    <div className="basis-1/2 md:pl-10 lg:pl-28 lg:pr-16  px-2 md:px-0  pr-10 md:pt-20 pt-12 lg:pt-20 flex flex-col  justify-center">
    <div className="md:px-6  lg:px-0"><Breadcrumb items={breadcrumbItems} colors={{
            bg: 'bg-white',
            text: 'text-black',
            hover: 'hover:text-purple',
            separator: 'text-black',
            current: {text: 'text-black',bg: 'bg-blue-600' // Custom indicator
            }}} /></div>
        <h1 className=" text-3xl font-bold ">Mobile Game Development Services</h1>
        <p  className="pt-5">AR is a top-tier mobile game development firm specializing in creating engaging, high-quality games for both iOS and Android platforms. Our games are known for their stunning visuals, seamless gameplay, captivating narratives, and much more!</p>
      
        <div className="lg:my-7 md:my-5 my-7 flex">
    <ScrollAnimation animateIn="animate__fadeInRight " duration={2}>
  <button className="bg-black text-white rounded-md pl-10 pr-5 hover:pr-10 hover:pl-4 py-2 relative group overflow-hidden transition-all duration-400 ">
    
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
    <div className="two" style={{
    position: 'absolute',
    left: '450px',
    top: '-80px', // fallback before animation
    opacity: 1,   // start invisible until GSAP animates
  }}>
       <Dmodel />
    </div>
    </div>
    <div className="h-[500px] bg-grey"></div>
    </div>
    </>)
}
export default Hero;