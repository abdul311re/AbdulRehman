import Button from '@mui/material/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faThreads, faXTwitter, faInstagram,faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
function Footer (){
    return(<>
    <footer  className='bg-black'>
        <div className='flex flex-col items-center justify-centers md:py-12 pt-12 '>
            <div><p className='text-white text-sm py-1'>Let s Bring Your Project Ideas to Life!</p></div>
            <div><h3 className='text-white font-bold text-5xl dynapuff-uniquifier pt-3'>Let s do this!</h3></div>
            <div className='mt-3'><Button variant="contained" disableElevation  className='!bg-purple  text-white  hover:font-bold' >
            Let’s collaborate
            </Button></div>
        </div>
        <div>
        <div className="flex flex-col flex-wrap xl:flex-nowrap lg:flex-row sm:flex-col md:flex-col xl:px-28 lg:px-12 md:px-12 sm:px-0 lg:py-12 pt-12 pb-8 ">
  <div className="basis-1/2 text-white px-4">
   <h4 className="font-bold text-[18px]">Services</h4>
   <ul className="flex flex-wrap text-sm xl:mt-10 mt-6 xl:px-0 pl-2"> 
   <li className="flex-grow-0 flex-shrink-0 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/2 mb-5"><Link to="/Software"><p>Custom Software Development</p></Link></li>
   <li className="flex-grow-0 flex-shrink-0 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/2 mb-5"><Link to="/Mobile"><p>Mobile App Development</p></Link></li>
   <li className="flex-grow-0 flex-shrink-0 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/2 mb-5"><p>IOS App Development</p></li>
    <li className="flex-grow-0 flex-shrink-0 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/2 mb-5"><Link to="/Website"><p>Website Development</p></Link></li>
    <li className="flex-grow-0 flex-shrink-0 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/2 mb-5"><p>Game Development</p></li>
    <li className="flex-grow-0 flex-shrink-0 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/2 mb-5"><p>Wordpress Development</p></li>
    <li className="flex-grow-0 flex-shrink-0 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/2 mb-5"><p>Startup App Development</p></li>
    <li className="flex-grow-0 flex-shrink-0 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/2 mb-5"><p>Flutter App Development</p></li>
    <li className="flex-grow-0 flex-shrink-0 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/2 mb-5"><p>Cross Platform App Development</p></li>
    <li className="flex-grow-0 flex-shrink-0 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/2 mb-5"><p>React Native App Development</p></li>
   </ul>
  </div>
  <div className="basis-1/2 text-white px-4 pt-5 md:pt-10 lg:pt-0">
   <h4 className="font-bold text-[18px]">Solutions</h4>
   <ul className="flex flex-wrap text-sm xl:mt-10 mt-6 xl:px-0 pl-2">
      <li className="flex-grow-0 flex-shrink-0 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/2 mb-5"><p>Automotive App Development</p></li>
      <li className="flex-grow-0 flex-shrink-0 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/2 mb-5"><p>Healthcare App Development</p></li>
      <li className="flex-grow-0 flex-shrink-0 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/2 mb-5"><p>On-Demand App Development</p></li>
      <li className="flex-grow-0 flex-shrink-0 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/2 mb-5"><p>Ecommerce App Development</p></li>
      <li className="flex-grow-0 flex-shrink-0 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/2 mb-5"><p>Real Estate App Development</p></li>
      <li className="flex-grow-0 flex-shrink-0 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/2 mb-5"><p>Music App Development</p></li>
      <li className="flex-grow-0 flex-shrink-0 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/2 mb-5"><p>IT Staff Argumentation</p></li>
     </ul>
  </div>
  <div className="xl:basis-1/6 basis-[80%] text-white px-4 pt-5 md:pt-10 xl:pt-0">
    <h4 className="font-bold text-[18px]">About Us</h4>
    <ul  className="text-sm flex flex-wrap xl:mt-10 mt-6 xl:px-0 pl-2">
        <li className="mb-5 flex-grow-0 flex-shrink-0 basis-full sm:basis-1/2 md:basis-1/5 xl:basis-full "><p>Referral Program</p></li>
        <li className="mb-5 flex-grow-0 flex-shrink-0 basis-full sm:basis-1/2 md:basis-1/5 xl:basis-full "><Link to="/Aboutus"><p>About AR</p></Link></li>
        <li className="mb-5 flex-grow-0 flex-shrink-0 basis-full sm:basis-1/2 md:basis-1/5 xl:basis-full "><p>Location</p></li>
        <li className="flex-grow-0 flex-shrink-0 basis-full sm:basis-1/2 md:basis-1/5 xl:basis-full mb-5"><Link to="/Portfolio"><p>Portfolio</p></Link></li>
        <li className="flex-grow-0 flex-shrink-0 basis-full sm:basis-1/2 md:basis-1/5 xl:basis-full mb-5"><p>Blogs</p></li>
    </ul>
  </div>
       </div>
        </div>
        <div className='lg:px-28 md:px-16 px-5 md:py-2'>
            <div className='flex border-b pb-3 md:w-[70%]'>
            <h4 className ='text-white font-bold'>Location :</h4>
            <p className='text-white pl-3'>Lahore</p>
            </div>
            <div className='md:flex justify-between'>
            <div className='flex pt-3'>
              <p className ='text-white border-r pr-2 text-sm md:text-md'>+92 334 9893327</p>
              <p className ='text-white pl-2 text-sm md:text-md'>abdul.reh311@gmail.com</p>
            </div>
            <div className='flex gap-2 pt-5 md:pt-0'>
            <div className='w-8 h-8 bg-white flex items-center justify-center rounded-full'><FontAwesomeIcon icon={faFacebookF} className='w-5 h-5'/></div>
            <div className='w-8 h-8 bg-white flex items-center justify-center rounded-full'><FontAwesomeIcon icon={faThreads} className='w-5 h-5'/></div>
            <div className='w-8 h-8 bg-white flex items-center justify-center rounded-full'><FontAwesomeIcon icon={faXTwitter} className='w-5 h-5'/></div>
            <div className='w-8 h-8 bg-white flex items-center justify-center rounded-full'><FontAwesomeIcon icon={faInstagram} className='w-5 h-5'/></div>
            <div className='w-8 h-8 bg-white flex items-center justify-center rounded-full'><FontAwesomeIcon icon={faLinkedin} className='w-5 h-5'/></div>
            </div>
            </div>
            <div className='md:flex justify-between md:pt-12 pb-12 pt-8'>
               <div><p className='text-white text-sm'>© AR 2025 - 2025. All Rights Reserved.</p></div> 
               <div className='flex  text-white md:gap-4 gap-2 pt-1 md:pt-0'>
                <div><p className='text-sm md:text-md'>Terms Condition</p></div>
                <div className='border-x md:px-4 px-2 text-sm md:text-md'><p>Privacy Policy</p></div>
                <div><p className='text-sm md:text-md'>Contact Us</p></div>
               </div>
            </div>
        </div>
    </footer>
    </>) 
}
export default Footer;