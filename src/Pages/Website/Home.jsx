import Svg from "../../Components/Home/Svg";
import Services from "../../Components/Home/Services";
import Proposal from "../../Components/Home/Proposal";
import About from "../../Components/Home/Homeabout";
import Curve from "../../Assets/Curve-white.svg";
// import Tick from "../../Assets/Tick/Tick.png";
import Pk from "../../Assets/pk.png";
// import Login from "../../Components/AdminLogin/Login";
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';
import "../../App.css";

const Home = () => {
    const today = new Date();
    // Format date as needed
    const formattedDate = today.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
    return(<>
    <div className="bg-white">
        <div className="py-16 ">
            <h1 className="text-2xl  md:text-[1.8rem] lg:text-[2.2rem]  xl:text-2.7xl pt-0 lg:pt-8 text-black edu-au-vic-wa-nt-pre-uniquifier text-center opacity-90 home-h1">Create Your Software Solutions <span className="text-purple font-bold">–</span> Seamlessly.</h1>
            <h2 className="text-1.3xl lg:text-4xl font-bold text-charcoal edu-au-vic-wa-nt-pre-uniquifier  text-center pt-4 lg:pt-6 px-2 lg:px-0 ">Smarter, Faster, Better</h2>
            <div className="flex flex-col lg:flex-row gap-4 my-8 lg:my-12 items-center justify-center">
            <div className='mt-3'><Button variant="contained" disableElevation  className='!bg-purple text-white lg:h-12 h-10 dynapuff-uniquifier hover:!bg-grey hover:text-black' ><p className='dynapuff-uniquifier '>
            Get Started - Free </p>
            </Button></div>
            <div className='lg:mt-3 sm:mt-0'><Button variant="contained" disableElevation  className='!bg-charcoal  text-white h-10 lg:h-12 !px-2 ' ><p className='dynapuff-uniquifier'>
            Book a Live Demo </p>
            </Button></div>
            </div>
        </div>
    </div>
    <section className="!bg-Hex h-18 lg:pb-20 pb-10" >
        <div className="relative z-12"><img src={Curve} alt="src" className="w-screen hidden lg:block md:block" /></div>
        <div className="relative z-22 -mt-0 lg:-mt-50 sm:-mt-20  md:-mt-10 " >
        <div className='lg:flex md:flex items-center justify-center pt-8 lg:pt-0 px-4'><Button variant="contained" disableElevation  className='!bg-white !text-black h-8  lg:!rounded-full md:!rounded-full !flex lg:!flex-row md:!flex-row !flex-col  lg:!items-center  lg:!justify-center md:!justify-center  !justify-start w-full lg:w-fit md:w-fit' >
         <div className="flex  px-1   lg:px-0">   
        <img src={Pk} alt="pk" className="rounded-full h-4" />
            <p className='dynapuff-uniquifier flex  px-4 text-sm'>
            AR Company <span>-</span> Lahore, Pakistan</p>
            </div>
            <div className="flex  py-3 ">
            <p className="text-xs text-start">{formattedDate}</p>
            <p className="px-2 text-xs text-red">Register</p>
            <FontAwesomeIcon icon={faArrowRight} color="#C0392B" />
            </div>
            </Button></div> 
        </div>
        {/* ////////////////////////////////Svg Component////////////////////////////////// */}
         <div className="lg:px-48 lg:pt-16 lg:pb-2 pt-14 pb-0 px-6 homesvg">
            <Svg/>
        </div> 
    </section>
      {/* ////////////////////////////////Services Component////////////////////////////////// */}
    <section>
    <Services/>
    </section>
    {/* ////////////////////////////////Proposal Component////////////////////////////////// */}
     <section className="bg-Hex element py-10 w-full ">
      <Proposal />
     </section>
     {/* ////////////////////////////////HomeAbout Component////////////////////////////////// */}
     <section className="bg-Hex element py-10 w-full">
     <About/>
     </section>
    </>)
}
export default Home;