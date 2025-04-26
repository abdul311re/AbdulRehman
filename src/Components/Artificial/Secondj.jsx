import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollAnimation = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".two",
        start: "top 20%",
        end: "center 20%",
        scrub: true,
        markers: false,
        toggleClass: "red", // Moved here ✅
      },
    });

    tl.to(".two", {
      opacity: 1,
      top: "900px",
      left: "5px",
      duration: 2,
    });
  }, []);

  return (
    <>
      <div className="container h-[1000px] relative bg-gray-100">
        <div
          className="two"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            transform: 'translateY(50px)',
            transition: 'all 0.50s ease',
            opacity: 1
          }}
        >
          Scroll Trigger Animation
        </div>
      </div>
      <div className="h-[800px]"></div>
    </>
  );
};

export default ScrollAnimation;
