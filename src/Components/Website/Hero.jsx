import Grid from "../../Assets/Website/Grid.avif";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight, faCheck} from '@fortawesome/free-solid-svg-icons';
import "../../App.css";
import Arlogo from '../../Assets/ArLogo.png';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import styled from 'styled-components';
const Styledcol = styled.div`
.text-card-foreground{
  border: none !important;
  box-shadow:none !important;
  border-top-left-radius: 0 !important; 
}
`;
function Hero(){
 

    return (<>
    <div className="flex flex-col  lg:flex-row justify-center xl:pb-20 ">
    <div  className=" lg:w-1/2 w-full">
    <h1 className="xl:text-[38px] lg:text-[28px] text-[25px] w-3/4 lg:pl-8 pl-5 pt-12 edu-au-vic-wa-nt-pre-uniquifier">Custom Web Design and Development Services</h1>
    <p className="lg:w-[85%] w-[95%] lg:pl-8 pl-6 lg:pt-7 pt-5 lg:text-md text-sm  poppins-normal-italic ">Entrust your web design and development projects to a team of skilled professionals who adapt quickly and drive business growth. Benefit from clear communication and collaboration to stay updated on every project milestone. With dedicated developers and designers, ensure the success of your most crucial web initiatives.</p>
    <div className="lg:px-10 pl-6 lg:my-8 my-5 flex">
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
    <div className="lg:w-1/2 w-full ">
        <div className=" xl:mt-16 mt-10 w-full lg:h-[700px] xl:h-[760px] 2xl:h-full h-[740px] bg-gradient-to-b from-[rgba(128,0,128,0.5)] to-[rgb(255,249,232)] rounded-l-xl relative">
            <div className=""><img src={Grid} alt="" /></div>
            <div className="xl:w-[85%] lg:w-[90%] md:w-[90%] w-[100%]  rounded-l-xl bg-grey absolute top-10 right-0 xl:top-20 lg:top-14 lg:right-0  py-4 px-6"> 
              <div className="flex">
              <h2 className="xl:text-3xl lg:text-2xl text-lg w-2/3 pt-1 edu-au-vic-wa-nt-pre-uniquifier">Your Product is our Responsibility</h2>
              <div className="w-1/3"><img src={Arlogo} alt="" className=" ml-10 lg:ml-16 xl:w-20  w-16" /></div>
              </div>
              <div className="flex lg:py-5 py-2">
        <div className="shadow-[0_29.73px_29.73px_#00000017,0_7.65px_16.14px_#0000001a]  rounded-full "><img src={Arlogo} alt="" className="w-6  " /></div>
    <h2 className="playwrite-gb-s-uniquifier text-[10px] py-1 ml-2">Abdul Rehman (31) </h2></div>
{/* //////////////////////////////////////Cards/////////////////////////////////// */}
    <div className="absolute lg:left-[-300px] left-[100px] z-10 top-[-100px] xl:top-[165px] lg:top-[200px] hidden lg:block ">
  <ScrollAnimation animateIn="animate__fadeInLeft "  duration={2}>
  <div className="shadow-[0_29.73px_29.73px_#00000017,0_7.65px_16.14px_#0000001a] lg:p-4 p-2 bg-white rounded-lg lg:w-64 w-48 ">
    <h2 className="playwrite-gb-s-uniquifier lg:text-md text-xs py-1">Grow your Business</h2>
    <p className="poppins-normal-italic lg:text-sm text-[10px]  py-1">Reduce your wait time and connect with us</p>
    <div className="flex  justify-end"><button className=" text-xs bg-gradient-to-b from-[rgb(80,100,120)] to-[rgb(20,55,80)] p-2 rounded-lg text-white">Let&apos;s Connect</button></div>
    </div>
    </ScrollAnimation>
    </div>
    <div className="absolute hidden lg:block lg:left-[-300px] left-[-20px] z-10 top-[320px] xl:top-[280px] lg:top-[320px] ">
    <div className="flex flex-col lg:flex-row ">
    <ScrollAnimation animateIn="animate__fadeInUp " duration={2}>
    <div className="shadow-[0_29.73px_29.73px_#00000017,0_7.65px_16.14px_#0000001a] lg:p-4 p-2 bg-white rounded-lg lg:w-64 w-48 lg:h-36 h-full  lg:mt-10">
    <h2 className="playwrite-gb-s-uniquifier lg:text-md text-xs py-1"><span className="px-2"><FontAwesomeIcon icon={faCheck} /></span>Intake Complete</h2>
    <p className="poppins-normal-italic lg:text-sm text-[10px] pt-1 lg:pb-4 pb-2">Our Team will see you shortly.</p>
    <div className="flex  justify-end"><button className=" text-xs bg-gradient-to-b from-[rgb(80,100,120)] to-[rgb(20,55,80)] p-2 rounded-lg text-white">Let&apos;s Connect</button></div>
    </div>
  </ScrollAnimation>
  <div className="absolute w-[300px] ml-60 xl:top-[200px] lg:top-[150px]">
  <ScrollAnimation animateIn="animate__fadeInLeft " duration={2}>
    <div className="shadow-[10px_-20px_80px_#00000030,5px_-5px_15px_#00000040] lg:px-4 px-2 lg:py-6 py-2 bg-white rounded-lg ml-10 ">
      <div className="flex">
        <div className="shadow-[0_29.73px_29.73px_#00000017,0_7.65px_16.14px_#0000001a]  rounded-full "><img src={Arlogo} alt="" className="lg:w-8 w-6" /></div>
    <h2 className="playwrite-gb-s-uniquifier lg:text-md text-xs py-1 ml-2">Abdul Rehman (31) </h2></div>
    <hr className="mt-3 "/>
    <p className="poppins-normal-italic lg:text-sm text-[12px] pt-2 pb-3 px-2">Services, Products and Ai.</p>
    <div className="flex">
    <button className=" text-xs bg-gradient-to-b from-[rgb(100,47,131)] to-[rgb(109,41,128)] p-2 rounded-xl text-white">Review visit summary</button>
      <button className=" ml-2 text-xs bg-gradient-to-b from-[rgb(80,100,120)] to-[rgb(20,55,80)] p-2 rounded-lg text-white">Let&apos;s Connect</button></div>
      </div>
      </ScrollAnimation>
      </div>
    </div>
  </div>
    <Styledcol>
    <Tabs defaultValue="account" >
      <TabsList className="grid  grid-cols-2 w-[202px]">
        <TabsTrigger value="account" className="text-xs">Free Consultant</TabsTrigger>
        <TabsTrigger value="password" className="text-xs">Book A Meeting</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader >
            <CardTitle >Free Consultant</CardTitle>
            <CardDescription className="pt-2">
            Get free expert guidance—schedule your consultation now!
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap xl:gap-x-[50px] lg:gap-x-6 gap-x-0 gap-y-10">
    <div className="w-[95%]  lg:w-[45%] xl:w-auto ">
      <Input id="name" placeholder="Full Name" className="!placeholder-black font-medium w-full" />
    </div>
    <div className="w-[95%]  lg:w-[45%] xl:w-auto ">
      <Input id="email" placeholder="Email" className="!placeholder-black font-medium w-full" />
    </div>
    <div className="w-[95%] lg:w-[45%] xl:w-auto ">
      <Input id="number" placeholder="Number" className="!placeholder-black font-medium w-full" />
    </div>
    <div className="w-[95%] lg:w-[45%] xl:w-[42%] 2xl:w-[35%]">
      <textarea
        placeholder="Describe Your Project Need"
        className="!placeholder-black font-medium mt-1 h-9 w-full border-b-2 border-grey-500 bg-transparent px-3 py-1 text-base transition-colors focus-visible:outline-none md:text-sm"
      />
    </div>
  </CardContent>
          <CardFooter>
            <Button>Schedule A Call</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
      <Card>
  <CardHeader>
    <CardTitle>Book A Meeting</CardTitle>
    <CardDescription className="pt-2">
      Schedule your meeting here, and you&apos;ll receive a confirmation once it&apos;s set.
    </CardDescription>
  </CardHeader>
  <CardContent className="flex flex-wrap xl:gap-x-[50px] lg:gap-x-6 gap-x-0 gap-y-10">
    <div className="w-[95%]  lg:w-[45%] xl:w-auto ">
      <Input id="name" placeholder="Full Name" className="!placeholder-black font-medium w-full" />
    </div>
    <div className="w-[95%]  lg:w-[45%] xl:w-auto ">
      <Input id="email" placeholder="Email" className="!placeholder-black font-medium w-full" />
    </div>
    <div className="w-[95%] lg:w-[45%] xl:w-auto ">
      <Input id="number" placeholder="Number" className="!placeholder-black font-medium w-full" />
    </div>
    <div className="w-[95%] lg:w-[45%] xl:w-[42%] 2xl:w-[35%]">
      <textarea
        placeholder="Describe Your Project Need"
        className="!placeholder-black  font-medium mt-1 h-9 w-full border-b-2 border-grey-500 bg-transparent px-3 py-1 text-base transition-colors focus-visible:outline-none md:text-sm"
      />
    </div>
  </CardContent>
  <CardFooter>
    <Button className="w-full lg:w-auto">Schedule A Call</Button>
  </CardFooter>
</Card>

      </TabsContent>
    </Tabs>
            </Styledcol>
            </div>
        </div>
    </div>
    </div>
    </>)
}
export default Hero;