import { Link } from "react-router-dom";
import {useState} from "react";
import Avatar from "../Assets/Portfolio/Snapavatar.png";
import Mail from "../Assets/Svg/important/email.svg";
import Phone from "../Assets/Svg/important/phone.svg";
import Calender from "../Assets/Svg/important/calender.svg";
import Location from "../Assets/Svg/important/location.svg";
import Book from "../Assets/Svg/bookopen.svg";
import Html from "../Assets/Logo/HTML.webp";
import Css from "../Assets/Logo/CSS.webp";
import Node from "../Assets/Logo/Nodejs.svg"
import burgur from "../Assets/Hamburgur.svg";
import close from "../Assets/Close.svg";
const Portfolio = () =>{
  const [isClose, setIsClose] = useState(false);
return(<>
 <div className="h-full bg-black flex items-center justify-center lg:p-16  p-4">
 <div className="container  w-7xl">
          <div className="lg:flex  gap-5">
          <div className="lg:w-1/5 sm:w-full flex-auto  ">
  <div className="sticky top-[50px] bg-bgport lg:rounded-2xl rounded-t-2xl text-white lg:flex lg:flex-col items-center justify-center lg:py-12 py-8">
    <div className="flex lg:block">
    <div className="lg:w-40 w-20 lg:h-32 h-20 ml-2 lg:ml-0 rounded-xl bg-[#2e2929] flex items-center justify-center">
      <img className="w-2/4" src={Avatar} alt="Profile Avatar" />
    </div>
    <div className="ml-4 lg:ml-0">
    <h2 className="text-xl font-bold text-center pt-3">ABDUL REHMAN</h2>
    <p className="py-1 text-xs text-center rounded px-2 mt-2 bg-[#2e2929]">
      FULL STACK DEVELOPER
    </p>
    </div>
    </div>
    <hr className="mt-5 lg:mx-0 mx-5 bg-white w-2/3" />
    <div className="flex flex-col items-start justify-start mx-4 lg:mx-0">
    <div className="flex items-center justify-center gap-4 mt-5">
      <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#2e2929] "><img src={Mail} alt="mail" width={"60%"} /></div>
      <div>
        <h4 className="text-sm font-bold">Email</h4>
        <p className="text-[12px] font-bold">abdul.reh311@gmail.com</p>
      </div>
    </div>
    <div className="flex items-center justify-center gap-4 mt-5">
      <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#2e2929] "><img src={Phone} alt="mail" width={"60%"} /></div>
      <div>
        <h4 className="text-sm font-bold">Phone</h4>
        <p className="text-[12px] font-bold">+92 3349893327</p>
      </div>
    </div>
    <div className="flex items-center justify-center gap-4 mt-5">
      <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#2e2929] "><img src={Calender} alt="mail" width={"60%"} /></div>
      <div>
        <h4 className="text-sm font-bold">Birth Date</h4>
        <p className="text-[12px] font-bold">31 January, 2004</p>
      </div>
    </div>
    <div className="flex items-center justify-center gap-4 mt-5">
      <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#2e2929] "><img src={Location} alt="mail" width={"60%"} /></div>
      <div>
        <h4 className="text-sm font-bold">Location</h4>
        <p className="text-[12px] font-bold">Lahore, Pakistan</p>
      </div>
      </div>
    </div>
  </div> 
  </div>

    <div  className="lg:w-3/4   flex-auto rounded-2xl relative ">
              <div  className={`gap-[38px] lg:gap-[28px]   text-white lg:flex absolute right-0  top-[-360px] lg:top-[0px] rounded-bl-xl lg:rounded-tr-2xl rounded-tl-2xl bg-[#2e2929] w-100  lg:h-[62px] h-[282px] px-10 py-5 transition-all duration-300 ${
          isClose ? "right-0 opacity-0" : "left-100 opacity-100"

        }`} >
                <div ><Link to="/" ><p className="font-bold lg:text-[16px] md:text-sm text-sm">Home</p></Link></div>
                <div className="pt-5 lg:pt-0"> <Link to="/" ><p className="font-bold lg:text-[16px] md:text-sm text-sm">Service</p></Link></div>
                <div className="pt-5 lg:pt-0"><Link to="/Portfolio" ><p className="font-bold lg:text-[16px] md:text-sm text-sm text-purple ">Portfolio</p></Link></div>
                <div className="pt-5 lg:pt-0"><Link to="/" ><p className="font-bold lg:text-[16px] md:text-sm text-sm">About Us</p></Link></div>
                <div className="pt-5 lg:pt-0"><Link to="/" ><p className="font-bold lg:text-[16px] md:text-sm text-sm">Blog</p></Link></div>
                <div className="pt-5 lg:pt-0 pr-10"><Link to="/" ><p className="font-bold lg:text-[16px] md:text-sm text-sm">Contact Us</p></Link></div>
  </div>
  <div className="bg-bgport lg:rounded-2xl rounded-b-2xl ">
  <button className="absolute lg:right-4 right-4 2xl:right-46 lg:top-5 top-[-340px] " onClick={() => setIsClose(!isClose)}><img
    src={isClose ? burgur :close }  alt="Menu Toggle" className="w-[16x] "/></button>
  <h1 className="pt-6 px-5 font-bold text-white text-3xl">Portfolio</h1>
  <hr className="mt-3 border border-purple w-[100px] mx-5 h-1 rounded bg-purple" />
  <div className="flex gap-2">
  <div className="lg:mt-16 mt-10 lg:mx-8 mx-2 w-1/7 pb-10"> 
  <div className="h-full w-[1px] bg-white ml-5 "></div>
  </div>
  <div>
  <div className="mt-7 text-white font-bold  "><div className="flex relative"><div className="bg-[#2e2929] w-8 h-8 lg:w-10 lg:h-10 shadow-md shadow-black flex items-center justify-center rounded-xl  absolute inset-x-0 -left-[32px] lg:-left-[60px] lg:-bottom-[8px] -bottom-[0px]"><img src={Book} alt="#" /></div><h3 className="text-xl ml-3 lg:ml-0">Education</h3></div></div>
  <div className="mt-7 text-white font-bold  "><div className="flex relative"><div className="bg-[#2e2929] w-5 h-5 flex items-end justify-center rounded-xl  absolute inset-x-0 -left-[26px] lg:-left-[50px] -bottom-[-1px]"><div className=" bg-white w-3 h-3 rounded-xl absolute -bottom-[-4px]  "></div></div><h4 className="ml-3 lg:ml-0">University of Punjab</h4></div></div>
  <p className="text-purple ml-3 lg:ml-0 ">2021 <span className="text-white ">-</span> 2025</p>
  <p className="w-[90%] text-white mt-2 text-sm ml-3 lg:ml-0">Pursuing BS Computer Science at the University of the Punjab, shaping the future of technology.</p>
  <div className="mt-7 text-white font-bold  "><div className="flex relative"><div className="bg-[#2e2929] w-5 h-5 flex items-end justify-center rounded-xl  absolute inset-x-0 -left-[26px] lg:-left-[50px] -bottom-[-1px]"><div className=" bg-white w-3 h-3 rounded-xl absolute -bottom-[-4px]  "></div></div><h4 className="ml-3 lg:ml-0 ">Government College of Science</h4></div></div>
  <p className="text-purple ml-3 lg:ml-0 ">2018 <span className="text-white ">-</span> 2021</p>
  <p className="w-[90%] text-white mt-2 text-sm ml-3 lg:ml-0 ">Completed Intermediate in Computer Science at Government College of Science, Lahore.</p>
  <div className="mt-7 text-white font-bold  "><div className="flex relative"><div className="bg-[#2e2929] w-5 h-5 flex items-end justify-center rounded-xl  absolute inset-x-0 -left-[26px] lg:-left-[50px] -bottom-[-1px]"><div className=" bg-white w-3 h-3 rounded-xl absolute -bottom-[-4px]  "></div></div><h4 className="ml-3 lg:ml-0 ">Ahsan Foundation Model High School</h4></div></div>
  <p className="text-purple ml-3 lg:ml-0 ">2007 <span className="text-white ">-</span> 2018</p>
  <p className="w-[90%] text-white mt-2 text-sm ml-3 lg:ml-0 ">Completed High School in  Science at Ahsan Foundation Model High School, Lahore.</p>
  <div className="mt-7 text-white font-bold">
    <div className="flex relative">
      <div className="bg-[#2e2929] h-8 w-8 lg:w-10 lg:h-10 shadow-md shadow-black flex items-center justify-center rounded-xl  absolute inset-x-0 -left-[32px] lg:-left-[60px] lg:-bottom-[8px] -bottom-[0px]"><img src={Book} alt="#" /></div>
      <h3 className="text-xl ml-3 lg:ml-0">Experience</h3>
      </div>
      </div>
  <div className="mt-7 text-white font-bold "><div className="flex relative"><div className="bg-[#2e2929] w-5 h-5 flex items-end justify-center rounded-xl  absolute inset-x-0 -left-[26px] lg:-left-[50px] -bottom-[-1px]"><div className=" bg-white w-3 h-3 rounded-xl absolute -bottom-[-4px]  "></div></div><h4 className="ml-3 lg:ml-0 ">Wellcreator</h4></div></div>
  <p className="text-purple ml-3 lg:ml-0 ">2023 <span className="text-white ">-</span> 2025</p>
  <p className="lg:w-[70%] w-[90%] text-white mt-2 text-sm ml-3 lg:ml-0 ">I am a proficient Frontend Developer with expertise in HTML, CSS, and JavaScript, complemented by advanced proficiency in frameworks such as React, Tailwind, and Bootstrap. My ability to design intuitive, visually engaging, and responsive user interfaces, combined with my knowledge of WordPress, allows me to drive impactful digital experiences. Committed to continuous learning and staying at the forefront of emerging technologies, I strive to deliver high-quality, innovative solutions that enhance user engagement and business success.</p>
  <div className="mt-7 text-white font-bold  "><div className="flex relative"><div className="bg-[#2e2929] w-8 h-8 lg:w-10 lg:h-10 shadow-md shadow-black flex items-center justify-center rounded-xl  absolute inset-x-0 -left-[32px] lg:-left-[60px] lg:-bottom-[8px] -bottom-[0px]"><img src={Book} alt="#" /></div><h3 className="text-xl ml-3 lg:ml-0">Projects</h3></div></div>
  <div className="mt-7 text-purple font-bold underline "><div className="flex relative"><div className="bg-[#2e2929] w-5 h-5 flex items-end justify-center rounded-xl  absolute inset-x-0 -left-[26px] lg:-left-[50px] -bottom-[-1px]"><div className=" bg-white w-3 h-3 rounded-xl absolute -bottom-[-4px]  "></div></div><h4 className="ml-3 lg:ml-0 ">Wellcreator.com</h4></div></div>
  <p className="lg:w-[70%] w-[80%] text-white mt-2 text-sm ml-3 lg:ml-0 ">As a Frontend Developer at WellCreator, I design and develop responsive, user-friendly web applications using React, Tailwind CSS, and Bootstrap. I collaborate with backend teams for seamless integration and optimize performance for a smooth user experience. Additionally, I work with WordPress to deliver custom web solutions, staying updated with the latest technologies to create innovative digital experiences.</p>
  <div className="mt-7 text-purple font-bold underline "><div className="flex relative"><div className="bg-[#2e2929] w-5 h-5 flex items-end justify-center rounded-xl  absolute inset-x-0 -left-[26px] lg:-left-[50px] -bottom-[-1px]"><div className=" bg-white w-3 h-3 rounded-xl absolute -bottom-[-4px]  "></div></div><h4 className="ml-3 lg:ml-0 ">AlifeJwelleryboxes.com</h4></div></div>
  <p className="lg:w-[70%] w-[80%] text-white mt-2 text-sm ml-3 lg:ml-0 ">Customized the Alife Jewellery Boxes website to enhance design, functionality, and user experience. Improved layout, responsiveness, and UI/UX while ensuring smooth performance across devices.</p>
  <div className="mt-7 text-white font-bold  "><div className="flex relative"><div className="bg-[#2e2929] w-8 h-8 lg:w-10 lg:h-10 shadow-md shadow-black flex items-center justify-center rounded-xl  absolute inset-x-0 -left-[32px] lg:-left-[60px] lg:-bottom-[8px] -bottom-[0px]"><img src={Book} alt="#" /></div><h3 className="text-xl ml-3 lg:ml-0">Languages</h3></div></div>
  <div className="flex mt-10">
    <div className="text-white "><img src={Html} alt="" width={"70%"}/><span className="mx-3">Html</span></div>
    <div className="text-white "><img src={Css} alt="" width={"70%"} /><span className="mx-4">Css </span></div>
    <div className="text-white "><img src={Node} alt="" width={"70%"} /><span className="mx-4">Node js </span></div>

  </div>
  </div>
  </div>
 </div>
 </div>
 </div>
 </div>
 </div>
</>)
}
export default Portfolio;
