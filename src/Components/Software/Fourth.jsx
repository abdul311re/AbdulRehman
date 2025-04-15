import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import styled from 'styled-components';
import AnimatedCounter from "../Counter.jsx"
import AR from "../../Assets/Arlogo.png";
const Deiv= styled.div`
.splide__pagination {
    display:none;
}
.splide__arrow   {
    display:none;
}
`;
function Fourth(){
    return(<>
    <div className="bg-grey">
    <div className="relative lg:pb-36 pb-24 lg:px-10  md:px-8  lg:pt-10 pt-0  group ">
        <div className="absolute z-10 group-hover:pl-4 lg:top-12 top-16 transition-all duration-4s00 ease-in-out hidden lg:block ">
            <h2 className="xl:text-7.3xl lg:text-6xl md:text-1xl text-3.5xl font-bold text-white opacity-60 lg:opacity-60 dynapuff-uniquifier  ">Essential Services</h2>
        </div>
        <div className="absolute lg:z-20 z-10 lg:pt-4 xl:pt-4 pt-8  pl-2 ">
            <h3 className=" px-4 lg:px-0 text-1.3xl lg:text-3xl dynapuff-uniquifier font-medium text-charcoal opacity-95 ">Essential Services We Deliver</h3>
        </div>
    </div>
    <div className="lg:px-10 bg-grey  py-2 md:px-12 px-4">
    <Deiv className="text-center  pt-0 mt-0 mb-12">
    <Splide
  options={{
    type: "loop",
    gap: "2rem",
    autoplay: true,
    pauseOnHover: false,
    resetProgress: false,
    arrows: "slider",
    pagination: true,
    perPage: 2,
  perMove: 1,
    breakpoints: {
      1440: { perPage: 2, perMove: 1 }, // 2 cards on large screens
      1024: { perPage: 2, perMove: 1 },
      830: { perPage: 1, perMove: 1 },
      780: { perPage: 1, perMove: 1 },
      480: { perPage: 1, perMove: 1 },
      400: { perPage: 1, perMove: 1 },
      325: { perPage: 1, perMove: 1 },
    },
  }}
>
        <SplideSlide className=" my-5 bg-white ">
          <div className="md:flex ">
          <div className="md:w-3/5 md:border-r-2 md:px-10 px-4 py-6 ">
          <h3 className="text-xl  text-charcoal font-bold">Abdul Rehman</h3>
          <p className="text-lg text-[#898989]">Co-Founder, AR</p>
          <p className="md:pt-6 pt-2 text-charcoal text-lg">"Their communication has been great"</p>
          <button className="border border-charcoal font-bold text-charcoal rounded-full px-6  py-2 text-sm hover:bg-charcoal hover:text-white mt-6">Check Reviews</button>
          </div>
          <div className="md:w-2/5 bg-Hex px-10 py-5">
          <div className=" font-bold text-charcoal"><AnimatedCounter 
  to={5} 
  duration={3000} 
  counterFontSize="text-4xl"  
/></div>
          <div className="flex justify-between md:pt-7 ">
            <div className="text-sm text-[#898989]">Quality</div>
            <div className="text-[#898989]">5.0</div>
          </div>
          <div className="flex justify-between pt-1">
            <div className="text-sm text-[#898989]">Schedule</div>
            <div className="text-[#898989]">4.0</div>
          </div>
          <div className="flex justify-between pt-1">
            <div className="text-sm text-[#898989]">Cost</div>
            <div className="text-[#898989]">5.0</div>
          </div>
          <div className="flex justify-between pt-1">
            <div className="text-sm text-[#898989]">Willing to refer</div>
            <div className="text-[#898989]">5.0</div>
          </div>
          <div className="flex items-center justify-center md:pt-3 pt-7">Powered by <img src={AR} alt="#" className="w-7" /></div>
          </div>
          </div>
        </SplideSlide>
      
      </Splide>
    </Deiv>
    </div>
</div>
    </>)
}
export default Fourth ;