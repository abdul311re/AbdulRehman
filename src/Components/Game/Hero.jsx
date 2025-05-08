import Dmodel from "./Dmodel";
import ScrollAnimation from 'react-animate-on-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import Breadcrumb from "../Breadcrumb.jsx";
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Services' },
  { label: 'Software Development', href: '/Software' }, // Current page
];

const Hero = () => {
  useEffect(() => {
   
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".two",
        start: "top center",
        end: "bottom center",
        scrub: 1,
        markers: false,
        
      },
    });
    tl.to(".two", {
      top: "-80px", // Position A 
      duration: 1,
      right: "5%",
      xPercent: 0,
      yPercent: 0,
      ease: "power2.out",
    })
    .to(".two", {
      top: "320px", // Position B (pause here)
      duration: 1,
      right: "50%",
      xPercent: 50,
      yPercent: 10,
      ease: "power2.out",
    })
    .to(".two", {
      top: "620px", // Position C (pause here)
      duration: 1,
      ease: "power2.out",
    })
    .to(".two", {
      top: "800px", // Final Position D
      duration: 1,
      ease: "power2.out",
    });
    
    setTimeout(() => {
      ScrollTrigger.refresh(); // 👈 Refresh after 0.5s
    }, 500);
  }, []);
  const hero = [
    { h4:'Web Gaming', content: 'Creating engaging web-based games that deliver excitement and interactivity directly through browsers, anytime, anywhere.' },
    { h4:'Web Gaming', content: 'Prioritize fast load times, efficient use of resources, and low power consumption. Use streamlined code, reduce memory footprint, and fine-tune APIs to deliver a seamless, responsive experience that boosts user satisfaction and encourages long-term engagement.' },
    { h4:'Web Gaming', content: 'Prioritize fast load times, efficient use of resources, and low power consumption. Use streamlined code, reduce memory footprint, and fine-tune APIs to deliver a seamless, responsive experience that boosts user satisfaction and encourages long-term engagement.' },
    { h4:'Web Gaming', content: 'Prioritize fast load times, efficient use of resources, and low power consumption. Use streamlined code, reduce memory footprint, and fine-tune APIs to deliver a seamless, responsive experience that boosts user satisfaction and encourages long-term engagement.' },
    
  ];
  return (
    <>
      <div className="relative">
        <div className="flex">
          {/* Left Section */}
          <div className="basis-1/2 md:pl-10 lg:pl-28 lg:pr-16 px-2 md:px-0 pr-10 md:pt-20 pt-12 lg:pt-20 lg: pb-20 flex flex-col justify-center">
            <div className="md:px-6 lg:px-0">
              <Breadcrumb items={breadcrumbItems} colors={{
                bg: 'bg-white',
                text: 'text-black',
                hover: 'hover:text-purple',
                separator: 'text-black',
                current: { text: 'text-black', bg: 'bg-blue-600' }
              }} />
            </div>

            <h1 className="text-3xl font-bold">Mobile Game Development Services</h1>
            <p className="pt-5">
              AR is a top-tier mobile game development firm specializing in creating engaging, high-quality games for both iOS and Android platforms. Our games are known for their stunning visuals, seamless gameplay, captivating narratives, and much more!
            </p>

            <div className="lg:my-7 md:my-5 my-7 flex">
              <ScrollAnimation animateIn="animate__fadeInRight" duration={2}>
                <button className="bg-black text-white rounded-md pl-10 pr-5 hover:pr-10 hover:pl-4 py-2 relative group overflow-hidden transition-all duration-400">
                  {/* Background for Hover Effect */}
                  <span className="absolute left-0 top-0 h-full w-0 bg-grey group-hover:w-full transition-all duration-300 z-0"></span>

                  {/* Moving Arrow */}
                  <span className="absolute left-3 group-hover:left-[150px] transition-all duration-300 z-10">
                    <FontAwesomeIcon icon={faAnglesRight} className="group-hover:text-black" />
                  </span>

                  {/* Text */}
                  <span className="relative z-20 group-hover:text-black transition-all duration-300">
                    Get a Free Quote
                  </span>
                </button>
              </ScrollAnimation>
            </div>
          </div>

          {/* Right Section (Animated Model) */}
          <div className="two absolute ">
            <Dmodel />
          </div>
        </div>

        {/* Scroll Section */}
        <div className="h-[900px] bg-black flex md:pl-10 lg:pl-20 lg:pr-16 px-2 md:px-0 pr-10 md:pt-20 pt-12 lg:pt-16 justify-between">
          <div className="basis-1/3" >
            <div style={{ top: '100px'}} className="sticky" >
          <h3 className="text-white text-2xl font-bold">Seamless Gaming Across All Devices and Screen Sizes</h3>
          <p className="text-white text-sm pt-5">At AR, we create top-performing games optimized for all screen sizes and platforms, ensuring a smooth experience that reaches players wherever they are.</p>
          </div> 
          </div>
          <div className="basis-1/3 flex flex-col gap-10">
          {hero.map((item, index) => (
          <div className=" text-white bg-white bg-opacity-10 py-2  md:px-10 px-3"   key={index}>
          <h4>{item.h4}</h4>
          <p>{item.content}</p></div>))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

