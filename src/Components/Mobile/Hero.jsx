import Mobilehero from "../../../public/Mobile/MobileHero.svg"
import styled from 'styled-components';
import Grid from "../../Assets/Website/Grid.avif";
import ScrollAnimation from 'react-animate-on-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight} from '@fortawesome/free-solid-svg-icons';
import 'animate.css';
import Breadcrumb from "../Breadcrumb.jsx";
const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Services' },
    { label: 'Mobile App Development', href: '/Software' }, // Current page (no link)
  ];
const Styledcol = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:#34495E;
    overflow: hidden;
    transform: scale(0.6); /* scale down */
    @media screen and (max-width:820px){
      transform: scale(0.5);
      margin-top: -56px;
    }
`
const Hero = () => {
    return(<>
         <div className='lg:flex bg-charcoal '>
            <div className='lg:w-1/2 md:pl-10 xl:pl-32 xl:pr-16 lg:px-20 px-2 md:px-0  pr-10 md:pt-20 pt-12 lg:pt-0 flex flex-col  justify-center'>
            <div className="md:px-6  pl-1 lg:px-0"><Breadcrumb items={breadcrumbItems} colors={{
            bg: 'bg-charcoal',
            text: 'text-white',
            hover: 'hover:text-purple',
            separator: 'text-white',
            current: {text: 'text-white',bg: 'bg-blue-600' // Custom indicator
            }}} /></div>
            <div className="md:px-6  lg:px-0 px-2 md:pt-2 lg:pt-0">
                <h1 className="md:text-3xl lg:text-[2.1rem]  text-2xl text-white font-bold pb-4 pt-2 md:pt-2">Mobile App Development <span className="block text-white pt-1">Company PAKISTAN</span></h1>
                <p className="text-white text-sm md:text-md md:py-2 py-0 ">We are a mobile app development company focused on delivering exceptional user experiences and real business value. Whether it's iOS or Android, every app we build showcases our commitment to quality and performance. From concept-ready MVPs to fully customized solutions, we offer end-to-end mobile app development services backed by expert guidance and flawless execution.</p>
                <div className="lg:my-6 md:my-5 my-7 flex">
    <ScrollAnimation animateIn="animate__fadeInRight " duration={2}>
  <button className="bg-charcoal text-white rounded-md pl-10 pr-5 hover:pr-10 hover:pl-4 py-2 relative group overflow-hidden transition-all duration-400 border ">
    
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
  </div></div>
            </div>
            <div className='lg:w-1/2  '>
            <div className="">
            <div className="absolute md:w-[45%] w-[100%] md:pt-0 pt-6"><img src={Grid} alt="" /></div>
              <Styledcol>   
            <img src={Mobilehero} alt="" className="md:w-[75%] w-full object-cover bg-charcoal rounded-5xl "/></Styledcol></div></div>
        </div>
        
    </>)
}
export default Hero