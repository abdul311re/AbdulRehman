import { Link } from "react-router-dom";
import Avatar from "../Assets/Portfolio/Snapavatar.png";
import Mail from "../Assets/Svg/important/email.svg";
import Phone from "../Assets/Svg/important/phone.svg";
import Calender from "../Assets/Svg/important/calender.svg";
import Location from "../Assets/Svg/important/location.svg";
import Book from "../Assets/Svg/bookopen.svg";
import Html from "../Assets/Logo/HTML.webp";
import Css from "../Assets/Logo/CSS.webp";
import Node from "../Assets/Logo/Nodejs.svg"
function Portfolio (){
return(<>
 <div className="bg-black   h-full flex items-center justify-center p-16 ">
 <div className="container  w-7xl">
          <div className="lg:flex  gap-5">
          <div className="lg:w-1/5 sm:w-full flex-auto  ">
  <div className="sticky top-[50px] bg-bgport rounded-2xl text-white flex flex-col items-center justify-center py-12">
    <div className="w-40 h-32 rounded-xl bg-[#2e2929] flex items-center justify-center">
      <img className="w-2/4" src={Avatar} alt="Profile Avatar" />
    </div>
    <h2 className="text-xl font-bold text-center pt-3">ABDUL REHMAN</h2>
    <p className="py-1 text-xs text-center rounded px-2 mt-2 bg-[#2e2929]">
      FULL STACK DEVELOPER
    </p>
    <hr className="mt-5 bg-white w-2/3" />
    <div className="flex flex-col items-start justify-start">
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

    <div  className="w-3/4  flex-auto rounded-2xl ">
              <div className="gap-[38px] text-white flex absolute right-16 top-[64px] rounded-bl-xl rounded-tr-2xl bg-[#2e2929] w-2/4 h-[62px] px-10 py-4 ">
                <Link to="/" class="font-bold">Home</Link>
                <Link to="/" class="font-bold">Service</Link>
                <Link to="/Portfolio" class="text-purple font-bold">Portfolio</Link>
                <Link to="/" class="font-bold">About Us</Link>
                <Link to="/" class="font-bold">Blog</Link>
                <Link to="/" class="font-bold">Contact Us</Link>
  </div>
  <div className="bg-bgport rounded-2xl ">
  <h1 className="pt-6 px-5 font-bold text-white text-3xl">Portfolio</h1>
  <hr className="mt-3 border border-purple w-[100px] mx-5 h-1 rounded bg-purple" />
  <div className="flex gap-2">
  <div className="mt-16 mx-8 w-1/7"> 
  <div className="bg-[#2e2929] w-10 h-10 flex items-center justify-center rounded-lg shadow-md shadow-black"><img src={Book} alt="#" /></div>
  <div className="h-4 w-[1px] bg-white ml-5 mt-1"></div>
  <div className="bg-[#2e2929] w-5 h-5 flex items-center justify-center rounded-xl ml-[11px] "><div className="text-white text-[80px] mb-[60px]">.</div></div>
  <div className="h-24 w-[1px] bg-white ml-5 "></div>
  <div className="bg-[#2e2929] w-5 h-5 flex items-center justify-center rounded-xl ml-[11px] "><div className="text-white text-[80px] mb-[60px]">.</div></div>
  <div className="h-24 w-[1px] bg-white ml-5 "></div>
  <div className="bg-[#2e2929] w-5 h-5 flex items-center justify-center rounded-xl ml-[11px] "><div className="text-white text-[80px] mb-[60px]">.</div></div>
  <div className="h-24 w-[1px] bg-white ml-5 "></div>
  <div className="bg-[#2e2929] w-10 h-10 flex items-center justify-center rounded-lg shadow-md shadow-black"><img src={Book} alt="#" /></div>
  <div className="h-4 w-[1px] bg-white ml-5 mt-1"></div>
  <div className="bg-[#2e2929] w-5 h-5 flex items-center justify-center rounded-xl ml-[11px] "><div className="text-white text-[80px] mb-[60px]">.</div></div>
  <div className="h-52 w-[1px] bg-white ml-5 "></div>
  <div className="bg-[#2e2929] w-10 h-10 flex items-center justify-center rounded-lg shadow-md shadow-black"><img src={Book} alt="#" /></div>
  <div className="h-6 w-[1px] bg-white ml-5 "></div>
  <div className="bg-[#2e2929] w-5 h-5 flex items-center justify-center rounded-xl ml-[11px] "><div className="text-white text-[80px] mb-[60px]">.</div></div>
  <div className="h-36 w-[1px] bg-white ml-5 "></div>
  <div className="bg-[#2e2929] w-5 h-5 flex items-center justify-center rounded-xl ml-[11px] "><div className="text-white text-[80px] mb-[60px]">.</div></div>
  <div className="h-24 w-[1px] bg-white ml-5 "></div>
  <div className="bg-[#2e2929] w-10 h-10 flex items-center justify-center rounded-lg shadow-md shadow-black"><img src={Book} alt="#" /></div>
  </div>
  <div>
  <h3 className="w-2/7 mt-[70px] text-xl font-bold text-white">EDUCATION</h3>
  <h4 className="mt-6 text-white font-bold">University of Punjab</h4>
  <p className="text-purple ">2021 <span className="text-white ">-</span> 2025</p>
  <p className="w-[90%] text-white mt-2 text-sm">Pursuing BS Computer Science at the University of the Punjab, shaping the future of technology.</p>
  <h4 className="mt-10 text-white font-bold">Government College of Science</h4>
  <p className="text-purple ">2018 <span className="text-white ">-</span> 2021</p>
  <p className="w-[90%] text-white mt-2 text-sm">Completed Intermediate in Computer Science at Government College of Science, Lahore.</p>
  <h4 className="mt-10 text-white font-bold">Ahsan Foundation Model High School</h4>
  <p className="text-purple ">2007 <span className="text-white ">-</span> 2018</p>
  <p className="w-[90%] text-white mt-2 text-sm">Completed High School in  Science at Ahsan Foundation Model High School, Lahore.</p>
  <h3 className="w-2/7 mt-[49px] text-xl font-bold text-white">Experience</h3>
  <h4 className="mt-6 text-white font-bold ">WellCreator</h4>
  <p className="text-purple">2023 <span className="text-white ">-</span> 2025</p>
  <p className="w-[70%] text-white mt-2 text-sm">I am a proficient Frontend Developer with expertise in HTML, CSS, and JavaScript, complemented by advanced proficiency in frameworks such as React, Tailwind, and Bootstrap. My ability to design intuitive, visually engaging, and responsive user interfaces, combined with my knowledge of WordPress, allows me to drive impactful digital experiences. Committed to continuous learning and staying at the forefront of emerging technologies, I strive to deliver high-quality, innovative solutions that enhance user engagement and business success.</p>
  <h3 className="w-2/7 mt-[40px] text-xl font-bold text-white">Projects</h3>
  <h4 className="mt-7 text-purple font-bold underline ">Wellcreator.com</h4>
  <p className="w-[70%] text-white mt-2 text-sm ">As a Frontend Developer at WellCreator, I design and develop responsive, user-friendly web applications using React, Tailwind CSS, and Bootstrap. I collaborate with backend teams for seamless integration and optimize performance for a smooth user experience. Additionally, I work with WordPress to deliver custom web solutions, staying updated with the latest technologies to create innovative digital experiences.</p>
  <h4 className="mt-8 text-purple font-bold underline ">AlifeJwelleryboxes.com</h4>
  <p className="w-[70%] text-white mt-2 text-sm ">Customized the Alife Jewellery Boxes website to enhance design, functionality, and user experience. Improved layout, responsiveness, and UI/UX while ensuring smooth performance across devices.</p>
  <h3 className="w-2/7 mt-[30px] text-xl font-bold text-white">Languages</h3>
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
