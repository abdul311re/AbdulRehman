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
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import Sasuke from '../Assets/sasuke.jpg';
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import Arlogo from '../Assets/ArLogo.png'; 
import Product from '../Assets/Logo/Product.png';
import Home from '../Assets/Logo/home (1).svg';
import About from '../Assets/Logo/aboutus.svg';
import Service from '../Assets/Logo/services.svg';
import { Link } from "react-router-dom";
import Login from "./AdminLogin/Login";
import { useLocation } from "react-router-dom";
const products = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', path: '/first', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
const Services = [
  { name: 'Website Development' , description: 'Get a better understanding of your traffic', Route:'/Website', icon: ChartPieIcon },
  { name: 'Wordpress Development', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Shopify Development', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Mobile Development', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Software Development', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
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
        <div className="flex md:hidden">
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
        <PopoverGroup className="hidden md:flex lg:gap-x-8 sm:gap-x-6">
          <a href="#" className="text-base font-semibold leading-6 text-gray-900 py-1">
            Home
          </a>
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
              <div className=" px-16 flex  ">
                <div>
              <img alt="Black"
              src={Sasuke}
              className=" h-16 sm:h-16 lg:h-full w-72  "
            /></div>
                <div className="flex flex-wrap  lg:w-full mx-5">
                {Services.map((item) => (
                  <Link to={item.Route} 
                 
                  key={item.name}
                  className="group relative flex items-center gap-x-4 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50 w-full md:w-6/12"
      
                 >
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                    </div>
                    <div className="flex-auto ">
                      <a href={item.href} className="block font-semibold text-gray-900">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  </Link>
                ))}
                </div>
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50 ">
                {callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100 "
                  >
                    <item.icon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            )}
            </div>
          </div>
          <a href="#" className="text-base font-semibold leading-6 text-gray-900 py-1">
            About Us
          </a>
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
               <div className="py-4 px-16 flex  ">
                <div>
              <img alt="Black"
              src={Sasuke}
              className=" h-16 sm:h-16 lg:h-full w-72  "
            /></div>
              <div className="flex flex-wrap  lg:w-full mx-5">
                {products.map((item) => (
                  <Link to={item.path} 
                  key={item.name}
                 >  
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                    </div>
                    <div className="flex-auto ">
                      <a href={item.href} className="block font-semibold text-gray-900">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  </Link>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50 ">
                {callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100 "
                  >
                    <item.icon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
                    {item.name}
                  </a>
                ))}
              </div>
              </div>
            </div>)}
            </div>
        <Login/>
        </PopoverGroup>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="sm:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-4/5 h-auto mt-2 overflow-y-auto bg-white px-3 py-0 top-14 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 border-t  border-l ">
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
              <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 pb-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 flex">
                 <img src={Home} alt="" style={{width:"30px" ,height:"auto" }} /><span className='px-2'> Home </span>
                </a>
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center   rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                  <img src={Service} alt="" style={{width:"25px" ,height:"auto"}} /><span className='px-3'>Services </span>
                    <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none absolute right-9 group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2 mx-4">
                    {[...Services, ...callsToAction].map((item) => (
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
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 flex">
                 <img src={Product} alt="#" style={{width:"25px" ,height:"auto"}} /><span className='px-3'><Link to="/Portfolio">Portfolio</Link></span>
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 flex"
                >
                  <img src={About} alt="#" style={{width:"25px" ,height:"auto", }}  /><span className='px-3'>About Us</span>
                </a>
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