import Button from '@mui/material/Button';
function Footer (){
    return(<>
    <footer  className='bg-black'>
        <div className='flex flex-col items-center justify-centers py-12 '>
            <div><p className='text-white text-sm py-1'>Let s Bring Your Project Ideas to Life!</p></div>
            <div><h3 className='text-white font-bold text-5xl dynapuff-uniquifier pt-3'>Let s do this!</h3></div>
            <div className='mt-3'><Button variant="contained" disableElevation  className='!bg-purple hover:!bg-red text-white hover:text-charcoal hover:font-bold' >
            Let’s collaborate
            </Button></div>
        </div>
        <div>
        <div className="flex flex-col lg:flex-row sm:flex-col md:flex-col lg:px-28 md:px-16 sm:px-0 py-12 ">
  <div className="basis-1/2 text-white px-4">
   <h4 className="font-bold ">Services</h4>
   <ul className="flex flex-wrap text-sm mt-10"> 
   <li className="flex-grow-0 flex-shrink-0 basis-full sm:basis-1/2 md:basis-1/2 lg:basis-1/2 mb-5"><p>Custom Software Development</p></li>
   <li className="flex-grow-0 flex-shrink-0 basis-full sm:basis-1/2 md:basis-1/2 lg:basis-1/2 mb-5"><p>Android App Development</p></li>
   <li className="flex-grow-0 flex-shrink-0 basis-full sm:basis-1/2 md:basis-1/2 lg:basis-1/2 mb-5"><p>IOS App Development</p></li>
    <li className="flex-grow-0 flex-shrink-0 basis-full sm:basis-1/2 md:basis-1/2 lg:basis-1/2 mb-5"><p>Website Development</p></li>
    <li className="flex-grow-0 flex-shrink-0 basis-full sm:basis-1/2 md:basis-1/2 lg:basis-1/2 mb-5"><p>Game Development</p></li>
    <li className="flex-grow-0 flex-shrink-0 basis-full sm:basis-1/2 md:basis-1/2 lg:basis-1/2 mb-5"><p>Wordpress Development</p></li>
    <li className="flex-grow-0 flex-shrink-0 basis-full sm:basis-1/2 md:basis-1/2 lg:basis-1/2 mb-5"><p>Startup App Development</p></li>
    <li className="flex-grow-0 flex-shrink-0 basis-full sm:basis-1/2 md:basis-1/2 lg:basis-1/2 mb-5"><p>Flutter App Development</p></li>
    <li className="flex-grow-0 flex-shrink-0 basis-full sm:basis-1/2 md:basis-1/2 lg:basis-1/2 mb-5"><p>Cross Platform App Development</p></li>
    <li className="flex-grow-0 flex-shrink-0 basis-full sm:basis-1/2 md:basis-1/2 lg:basis-1/2 mb-5"><p>React Native App Development</p></li>
   </ul>
  </div>
  <div className="basis-1/2 text-white px-4">
   <h4 className="font-bold ">Solutions</h4>
   <ul className="flex flex-wrap text-sm mt-10">
      <li className="flex-grow-0 flex-shrink-0 basis-full sm:basis-1/2 md:basis-1/2 lg:basis-1/2 mb-5"><p>Automotive App Development</p></li>
      <li className="flex-grow-0 flex-shrink-0 basis-full sm:basis-1/2 md:basis-1/2 lg:basis-1/2 mb-5"><p>Healthcare App Development</p></li>
      <li className="flex-grow-0 flex-shrink-0 basis-full sm:basis-1/2 md:basis-1/2 lg:basis-1/2 mb-5"><p>On-Demand App Development</p></li>
      <li className="flex-grow-0 flex-shrink-0 basis-full sm:basis-1/2 md:basis-1/2 lg:basis-1/2 mb-5"><p>Ecommerce App Development</p></li>
      <li className="flex-grow-0 flex-shrink-0 basis-full sm:basis-1/2 md:basis-1/2 lg:basis-1/2 mb-5"><p>Real Estate App Development</p></li>
      <li className="flex-grow-0 flex-shrink-0 basis-full sm:basis-1/2 md:basis-1/2 lg:basis-1/2 mb-5"><p>Music App Development</p></li>
      <li className="flex-grow-0 flex-shrink-0 basis-full sm:basis-1/2 md:basis-1/2 lg:basis-1/2 mb-5"><p>IT Staff Argumentation</p></li>
     </ul>
  </div>
  <div className="basis-1/6 text-white px-4">
    <h4 className="font-bold ">About Us</h4>
    <ul  className="text-sm mt-10">
        <li className="mb-5"><p>About AR</p></li>
        <li className="mb-5"><p>Referral Program</p></li>
        <li className="mb-5"><p>Blogs</p></li>
        <li className="mb-5"><p>Press</p></li>
        <li className="mb-5"><p>Location</p></li>
    </ul>
  </div>
       </div>
        </div>
    </footer>
    </>) 
}
export default Footer;