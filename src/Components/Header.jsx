import { useState,useEffect } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  PopoverGroup,
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import Sasuke from '../../public/Phone.svg';
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import Arlogo from '../Assets/ArLogo.png'; 
import { FaAngleRight } from 'react-icons/fa';
import Product from '../Assets/Logo/Product.png';
import Home from '../Assets/Logo/home (1).svg';
import About from '../Assets/Logo/aboutus.svg';
import Service from '../Assets/Logo/services.svg';
import { Link } from "react-router-dom";
import Login from "./AdminLogin/Login";
import { useLocation } from "react-router-dom";
const products = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', path: '/first', },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#',  },
  { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#', },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', },
]
const Services = [
  { name: 'Website Development' , 
     Route:'/Website',
     subServices: [
      { name: 'WordPress Development', Route: '/Website' },
      { name: 'Ecommerce Website Development', Route: '/Website' },
      { name: 'Web Portals', Route: '/Website' },
    ],
    },
    { name: 'Mobile App Development' , 
      Route:'/Mobile',
      subServices: [
       { name: 'IOS App Development', Route: '/Mobile' },
       { name: 'Andriod App Development', Route: '/Mobile' },
       { name: 'Cross Platfrom App Development', Route: '/Mobile' },
     ],
     },
     { name: 'Custom Software Development' , 
      Route:'/Software',
      subServices: [
       { name: 'ERP Solution', Route: '/Software' },
       { name: 'CRM Solution', Route: '/Software' },
       { name: 'CMS Solution', Route: '/Software' },
     ],
     },
     { name: 'Game Development' , 
      Route:'/Game',
      subServices: [
       { name: '2D Game Development', Route: '/Game' },
       { name: '3D Game Development', Route: '/Game' },
       { name: 'Web3 Game Development', Route: '/Game' },
     ],
     },
     { name: 'Artificial Intelligence' , 
      Route:'/Artificial',
      subServices: [
       { name: 'Generative AI', Route: '/Website' },
       { name: 'Natural Language Processing', Route: '/Website' },
       { name: 'Speech Recognition', Route: '/Website' },
     ],
     },
     { name: 'Cloud Services' , 
      Route:'/Website',
      subServices: [
       { name: 'Cloud Application Development', Route: '/Website' },
       { name: 'Cloud Migration', Route: '/Website' },
       { name: 'CLoud Sport & Maintanence', Route: '/Website' },
     ],
     },
     { name: 'Staff Augmentation' , 
      Route:'/Website',
      subServices: [
       { name: 'Hire Andriod App Developer', Route: '/Mobile' },
       { name: 'Hire IOS App Developer', Route: '/Mobile' },
       { name: 'Hire Nodejs Developer', Route: '/Website' },
     ],
     },
     { name: 'Digital Marketing Services' , 
      Route:'/Website',
      subServices: [
       { name: 'Social Media Marketing', Route: '/Mobile' },
       { name: 'Search Engine Marketing', Route: '/Mobile' },
       { name: 'Search Engine Optimization', Route: '/Website' },
     ],
     },
     { name: 'Blockchain Development' , 
      Route:'/Website',
      subServices: [
       { name: 'Metaverse Development', Route: '/Mobile' },
       { name: 'Nft Development', Route: '/Mobile' },
     ],
     },
    ]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null); // Track which dropdown is open
  let timeoutId;
  const location = useLocation(); // Detect route changes

  useEffect(() => {
    setOpenDropdown(false); // Close dropdown when route changes
  }, [location]);

  const handleMouseEnter = (dropdown) => {
    clearTimeout(timeoutId); 
    setOpenDropdown(dropdown); // Open the hovered dropdown
  };
// setOpenDropdown(null);add this line 58 for testing 
  const handleMouseLeave = () => {
     // Close the dropdown
    timeoutId = setTimeout(() => {
      setOpenDropdown(null); // Close the dropdown after a delay
    }, 300);
  };

  return (
    <header className="bg-white sticky top-0 z-50">
      <nav aria-label="Global" className=" flex  items-center justify-between p-5 lg:px-20 md:px-10 ">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt=""
              src={Arlogo}
              className=" h-16 sm:h-16 lg:h-20 w-auto absolute top-0  "
            />
          </Link>
        </div>
        
        <div className="flex max:hidden">
        <div>
      {/* Conditionally render Open or Close button */}
      {!mobileMenuOpen ? (
        // Show Open (Bars3Icon) when the menu is closed
        <button
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon aria-hidden="true" className="h-9 w-auto absolute right-8 top-4" />
        </button>
      ) : (
        // Show Close (XMarkIcon) when the menu is open
        <button
          type="button"
          onClick={() => setMobileMenuOpen(false)}
          className="-m-2.5 rounded-md p-2.5 text-gray-700"
        >
          <span className="sr-only">Close menu</span>
          <XMarkIcon aria-hidden="true" className="h-9 w-auto absolute right-8 top-4" />
        </button>
      )}
      
      {/* Mobile menu content (conditionally rendered) */}
      {mobileMenuOpen && (
        <div className="absolute top-0 left-0">
          {/* Your mobile menu content goes here */}
        </div>
      )}
    </div>
        </div>
        <PopoverGroup className="md:hidden hidden max:block max:flex max:gap-x-8 sm:gap-x-6">
          <Link to="/" className="text-base font-semibold leading-6 text-gray-900 py-1">
            Home
          </Link>
          <div className="relative" onMouseEnter={() => handleMouseEnter('services')}
            onMouseLeave={handleMouseLeave} 
      >
        <div >
            <div   className="flex items-center text-base  font-semibold leading-6 text-gray-900 py-1   border-none outline-none gap-x-1 cursor-pointer"  >
            Services
              <ChevronDownIcon aria-hidden="true"  className={`h-5 w-5 flex-none text-gray-400 transition-transform duration-300  ${
                  openDropdown === 'services' ? 'rotate-180' : 'rotate-0'
                }`}></ChevronDownIcon>
            </div >
             {openDropdown === 'services' &&(
            <div  
            onMouseEnter={() => handleMouseEnter('services')}
            onMouseLeave={handleMouseLeave}
              className={`fixed top-16 left-0 z-10 mt-3 w-screen bg-white shadow-lg ring-1 ring-gray-900/5 transition-transform duration-200`}
             
            >
         <div className="px-10 flex">
  {/* Image Section */}
  <div className='w-[35%] py-5'>
    <h3 className='font-bold xl:text-[16px] text-xs'>Designed For Victory</h3>
    <p className='xl:text-sm text-xs pt-2 opacity-60'>Empowering businesses with innovative, future-focused technology. We deliver tailored solutions to drive rapid digital growth across global industries</p>
   <div className='flex items-center justify-center'>
    <img
      alt="Black"
      src={Sasuke}
      className=" xl:w-56 w-40"
    /></div>
  </div>

  {/* Services Section */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:gap-x-6 gap-y-4 lg:w-full h-full xl:mx-5 mb-5 divide-y divide-gray-200 ">
    {Services.map((item, index) => (
      <div
        key={index}
        className=" group pt-5 px-4"
      >
        <Link
          to={item.Route}
          className="block font-bold text-black text-xs xl:text-[16px] hover:text-charcoal"
        >
          {item.name}
        </Link>
        {/* Subservices */}
        {item.subServices && (
          <ul className="list-none pl-0 mt-2 space-y-1">
            {item.subServices.map((sub, subIndex) => (
            <li key={subIndex} className=" xl:text-sm text-xs text-hex hover:underline opacity-60 hover:text-charcoal">
               <Link to={sub.Route} className='flex items-center'>
              <FaAngleRight className="text-gray-500 mr-2 font-bold" />
              {sub.name}
            </Link>
          </li>
            ))}
          </ul>
        )}
      </div>
    ))}
  </div>
</div>
            </div>
            )}
            </div>
          </div>
          <Link to="/Aboutus" className="text-base font-semibold leading-6 text-gray-900 py-1">
            About Us
          </Link>
          <Link to="/Portfolio" className="text-base font-semibold leading-6 text-gray-900 py-1">
            Portfolio
           </Link>
           <a href="#" className="text-base font-semibold leading-6 text-gray-900 py-1">
            Blog
           </a>
          <div className="relative"  
            onMouseEnter={() => handleMouseEnter('insight')}
            onMouseLeave={handleMouseLeave}
        >
            <div   className="flex items-center  text-base  font-semibold leading-6 text-gray-900 py-1   border-none outline-none gap-x-1 cursor-pointer" >
             Insight
             <ChevronDownIcon aria-hidden="true"  className={`h-5 w-5 flex-none text-gray-400 transition-transform duration-300 ${
                  openDropdown === 'insight' ? 'rotate-180' : 'rotate-0'
                }`}></ChevronDownIcon>
            </div >
             {openDropdown === 'insight' &&( <div
            onMouseEnter={() => handleMouseEnter('insight')}
            onMouseLeave={handleMouseLeave}
             className={`fixed top-16 left-0 z-10 mt-3 w-screen bg-white shadow-lg ring-1 ring-gray-900/5 transition-transform duration-200`}
            >
               <div className="px-10 flex">
  {/* Image Section */}
  <div className='w-[35%] py-6'>
    <h3 className='font-bold xl:text-[16px] text-xs'>Designed For Victory</h3>
    <p className='xl:text-sm text-xs pt-1 opacity-60'>Empowering businesses with innovative, future-focused technology. We deliver tailored solutions to drive rapid digital growth across global industries</p>
   <div className='flex items-center justify-center'>
    <img
      alt="Black"
      src={Sasuke}
      className="xl:w-56 w-40"
    /></div>
  </div>

  {/* Services Section */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 lg:w-full h-full xl:mx-5 mb-5 divide-y divide-gray-200 ">
    {Services.map((item, index) => (
      <div
        key={index}
        className=" group  pt-5  px-4"
      >
        <Link
          to={item.Route}
          className="block font-bold text-black text-xs xl:text-[16px] hover:text-charcoal "
        >
          {item.name}
        </Link>
        {/* Subservices */}
        {item.subServices && (
          <ul className="list-none pl-0 mt-2 space-y-1">
            {item.subServices.map((sub, subIndex) => (
            <li key={subIndex} className=" text-sm text-hex hover:underline hover:text-charcoal opacity-60">
               <Link to={sub.Route} className='flex items-center'>
              <FaAngleRight className="text-gray-500 mr-2 font-bold" />
              {sub.name}
            </Link>
          </li>
            ))}
          </ul>
        )}
      </div>
    ))}
  </div>
</div>
            </div>)}
            </div>
        <Login/>
        </PopoverGroup>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen}  className="lg:hidden">
        <div className="fixed inset-0 z-10 " />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-4/5 h-auto mt-2 overflow-y-auto bg-white px-3 py-0 top-14 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 border-t  border-l ">
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
              <Link
                  to="/" onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 pb-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 flex">
                 <img src={Home} alt="" style={{width:"30px" ,height:"auto" }} /><span className='px-2'> Home </span>
                </Link>
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center   rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                  <img src={Service} alt="" style={{width:"25px" ,height:"auto"}} /><span className='px-3'>Services </span>
                    <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none absolute right-9 group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2 mx-4">
                    {[...Services, ...callsToAction].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as={Link}
                        to={item.Route}
                         // Close dropdown on click
                         onClick={() => setMobileMenuOpen(false)}
                        className="block rounded-lg pt-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                  <img src={Product} alt="" style={{width:"25px" ,height:"auto"}} /><span className='px-3'> Product</span>
                    <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none absolute right-9 group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2 mx-4">
                    {[...products, ...callsToAction].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg pt-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Link to="/Portfolio"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 flex">
                 <img src={Product} alt="#" style={{width:"25px" ,height:"auto"}} /><span className='px-3'>Portfolio</span>
                 </Link>
                <Link to="/Aboutus" onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 flex"
                >
                  <img src={About} alt="#" style={{width:"25px" ,height:"auto", }}  /><span className='px-3'>About Us</span>
                  </Link>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 flex"
                >
                  <img src={Product} alt="#" style={{width:"25px" ,height:"auto"}} /><span className='px-3'>Gat a Quote</span>
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 flex"
                >
                  <img src={Product} alt="#" style={{width:"25px" ,height:"auto"}} /><span className='px-3'>Contact Us</span>
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}