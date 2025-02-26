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
import { Label } from "@/components/ui/label";
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
    <div className="flex  justify-center pb-20 ">
    <div  className="w-1/2 ">
    <h1 className="text-[38px]  w-3/4 pl-8 pt-12 edu-au-vic-wa-nt-pre-uniquifier">Custom Web Design and Development Services</h1>
    <p className="w-[85%] pl-8 pt-7 text-md  poppins-normal-italic ">Entrust your web design and development projects to a team of skilled professionals who adapt quickly and drive business growth. Benefit from clear communication and collaboration to stay updated on every project milestone. With dedicated developers and designers, ensure the success of your most crucial web initiatives.</p>
    <div className="px-10 my-8 flex">
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
  <div className="absolute left-[500px] z-10 top-[400px] ">
  <ScrollAnimation animateIn="animate__fadeInLeft "  duration={2}>
  <div className="shadow-[0_29.73px_29.73px_#00000017,0_7.65px_16.14px_#0000001a] p-4 bg-white rounded-lg w-64  ">
    <h2 className="playwrite-gb-s-uniquifier text-md py-1">Grow your Business</h2>
    <p className="poppins-normal-italic text-sm py-1">Reduce your wait time and connect with us</p>
    <div className="flex  justify-end"><button className=" text-xs bg-gradient-to-b from-[rgb(80,100,120)] to-[rgb(20,55,80)] p-2 rounded-lg text-white">Let&apos Connect</button></div>
    </div>
    </ScrollAnimation>
    </div>
    <div className="absolute left-[500px] z-10 top-[520px] ">
    <div className="flex ">
    <ScrollAnimation animateIn="animate__fadeInUp " duration={2}>
    <div className="shadow-[0_29.73px_29.73px_#00000017,0_7.65px_16.14px_#0000001a] p-4 bg-white rounded-lg w-64 h-36  mt-10">
    <h2 className="playwrite-gb-s-uniquifier text-md py-1"><span className="px-2"><FontAwesomeIcon icon={faCheck} /></span>Intake Complete</h2>
    <p className="poppins-normal-italic text-sm pt-1 pb-4">Our Team will see you shortly.</p>
    <div className="flex  justify-end"><button className=" text-xs bg-gradient-to-b from-[rgb(80,100,120)] to-[rgb(20,55,80)] p-2 rounded-lg text-white">Let&apos Connect</button></div>
    </div>
  </ScrollAnimation>
  <ScrollAnimation animateIn="animate__fadeInLeft " duration={2}>
    <div className="shadow-[10px_-20px_80px_#00000030,5px_-5px_15px_#00000040] px-4 py-6 bg-white rounded-lg ml-10 mt-10">
      <div className="flex">
        <div className="shadow-[0_29.73px_29.73px_#00000017,0_7.65px_16.14px_#0000001a]  rounded-full "><img src={Arlogo} alt="" className="w-8 " /></div>
    <h2 className="playwrite-gb-s-uniquifier text-md py-1 ml-2">Abdul Rehman (31) </h2></div>
    <hr className="mt-3 "/>
    <p className="poppins-normal-italic text-sm pt-2 pb-3 px-2">Services, Products and Ai.</p>
    <div className="flex">
    <button className=" text-xs bg-gradient-to-b from-[rgb(100,47,131)] to-[rgb(109,41,128)] p-2 rounded-xl text-white">Review visit summary</button>
      <button className=" ml-2 text-xs bg-gradient-to-b from-[rgb(80,100,120)] to-[rgb(20,55,80)] p-2 rounded-lg text-white">Let&apos Connect</button></div>
      </div>
      </ScrollAnimation>
    </div>
  </div>
  </div>


    </div> 
    <div className="w-1/2">
        <div className=" mt-16 w-full h-screen bg-gradient-to-b from-[rgba(128,0,128,0.5)] to-[rgb(255,249,232)] rounded-l-xl relative">
            <div className=""><img src={Grid} alt="" /></div>
            <div className="w-[570px] rounded-l-xl bg-grey absolute top-28 right-0  py-4 px-6"> 
              <div className="flex">
              <h2 className="text-4xl w-2/3 pt-1 edu-au-vic-wa-nt-pre-uniquifier">Your Product is our Responsibility</h2>
              <div className="w-1/3"><img src={Arlogo} alt="" className=" ml-16 w-20" /></div>
              </div>
              <div className="flex py-5">
        <div className="shadow-[0_29.73px_29.73px_#00000017,0_7.65px_16.14px_#0000001a]  rounded-full "><img src={Arlogo} alt="" className="w-6  " /></div>
    <h2 className="playwrite-gb-s-uniquifier text-xs py-1 ml-2">Abdul Rehman (31) </h2></div>
    <Styledcol>
    <Tabs defaultValue="account" >
      <TabsList className="grid w-full grid-cols-2 w-[132px]">
        <TabsTrigger value="account" className="text-xs">Account</TabsTrigger>
        <TabsTrigger value="password" className="text-xs">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when youre done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="@peduarte" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, youll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
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