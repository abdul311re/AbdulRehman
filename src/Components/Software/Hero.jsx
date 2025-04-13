import Softwarehero from "../../../public/Software/Softwarehero.png"
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight} from '@fortawesome/free-solid-svg-icons';
import 'animate.css';
import Breadcrumb from "../Breadcrumb.jsx";
const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Services' },
    { label: 'Software Development', href: '/Software' }, // Current page (no link)
  ];
const Styledcol = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width: 691px;
    height: 538px;
    background-color:#34495E;
     clip-path: path("M7.20092 375.299L51.8888 123.078C58.2276 87.3015 62.2486 52.6275 93.2145 33.497C114.513 20.3391 146.703 15.4717 171.707 13.9028C279.997 7.10811 377.373 4.61804 515.929 1.0749L526.874 0.794942C560.344 -0.0615993 595.078 0.234001 626.035 12.956C675.004 33.0809 681.038 96.2185 683.376 148.994C687.915 251.411 691.748 331.658 691.217 406.371C690.369 423.924 687.672 436.993 681.54 447.476C661.622 481.524 613.782 483.345 574.629 488.718C394.89 513.384 275.163 529.171 176.374 537.112C128.43 540.967 76.1961 543.319 36.7577 515.855C20.8598 504.784 10.3768 490.218 4.54529 469.666C-4.11278 439.153 1.62887 406.747 7.16279 375.514L7.20092 375.299Z");
    overflow: hidden;
    margin-top: 4px;
    transform: scale(0.6); /* scale down */
    @media screen and (max-width:820px){
      transform: scale(0.5);
      margin-top: -56px;
    }

`
const Hero =()=>{
return(<>
        <div className='lg:flex bg-black'>
            <div className='lg:w-1/2 md:pl-10 lg:px-16 px-2 md:px-0  pr-10 md:pt-20 pt-12 lg:pt-0 flex flex-col  justify-center'>
            <div className="md:px-6  lg:px-0"><Breadcrumb items={breadcrumbItems} colors={{
            bg: 'bg-black',
            text: 'text-white',
            hover: 'hover:text-purple',
            separator: 'text-white',
            current: {text: 'text-white',bg: 'bg-blue-600' // Custom indicator
            }}} /></div>
            <div className="md:px-6 lg:px-0 px-2 md:pt-2 lg:pt-0">
                <h1 className="md:text-3xl text-xl dynapuff-uniquifier font-bold text-purple pb-6">Software Development Firm <span className="block text-white">Specializing in Tailored Systems </span></h1>
                <p className="text-white text-sm md:text-md">Expand your global reach with a top-tier custom software development company based in the USA.
                We empower your success by leveraging a wide range of programming languages, platforms, and the latest technologies tailored to your unique goals.</p>
                <p className="text-white pt-2 text-sm md:text-md">Collaborate with us to transform challenges into opportunities! Our expert software developers help small to mid-sized businesses thrive—delivering up to a 65% return on investment.</p>
                <div className="lg:my-6 md:my-5 my-7 flex">
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
  </div></div>
            </div>
            <div className='lg:w-1/2 hidden md:block'>
            <div className="lg:w-[10px]">
              <Styledcol>   
            <img src={Softwarehero} alt="" className="w-full object-cover"/></Styledcol></div></div>
        </div>
        
</>)
}
export default Hero ;