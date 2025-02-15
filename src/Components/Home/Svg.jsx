import styled from 'styled-components';
import  ShopSvg from "../../Assets/Svg/shopping.svg";
import  IdSvg from "../../Assets/Svg/id_card.svg";
import HeadSvg from "../../Assets/Svg/headphones.svg";
import  CastSvg from "../../Assets/Svg/cast.svg";
import  ConnectSvg from "../../Assets/Svg/connecting.svg";
import CurrencySvg from "../../Assets/Svg/currency.svg";
import   EgcSvg from "../../Assets/Svg/ecg.svg";
import FlightSvg from "../../Assets/Svg/flights.svg";
import  LibrarySvg from "../../Assets/Svg/library.svg";
import LocalSvg from "../../Assets/Svg/local.svg";
import  RealSvg from "../../Assets/Svg/real_es.svg";
import   SupportSvg from "../../Assets/Svg/sports.svg";
import  StoreSvg from "../../Assets/Svg/store.svg";
import SuperSvg from "../../Assets/Svg/supervisor.svg";
import  DirectionSvg from "../../Assets/Svg/direction.svg";


const Styledcol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

 .stylelap{
    stroke-width: 0.5;
 }
`;



function Svg() {
  return (<>
   <container className="row flex flex-wrap ">
    <div className="lg:basis-1/5 md:basis-1/5  basis-1/2  lg:w-full w-32 h-32 lg:h-full flex flex-col items-center justify-center border-r-gray-950 border-b-gray-950 border-r border-b lg:py-8 py-0">
     <Styledcol >
     <div><img src={ShopSvg} className="lg:w-16 w-12 h-full stylelap "/></div>
     <div><p className="stylep dynapuff-uniquifier pt-2">Ecommerce</p></div></Styledcol>
     </div>
     <div className="lg:basis-1/5 md:basis-1/5 basis-1/2 lg:w-full w-32 h-32 lg:h-full flex flex-col items-center justify-center   lg:border-r-gray-950  md:border-r-gray-950 border-b-gray-950 lg:border-r md:border-r border-b lg:py-8 py-0">
     <Styledcol >
     <div><img src={IdSvg} className="lg:w-16 w-12 h-full stylelap"/></div>
     <div><p className="stylep dynapuff-uniquifier pt-2 text-center lg:text-start">Social Networking</p></div>
     </Styledcol>
     </div>
     <div className="lg:basis-1/5 md:basis-1/5  basis-1/2 lg:w-full w-32 h-32 lg:h-full flex flex-col items-center  justify-center border-r-gray-950 border-b-gray-950 border-r border-b lg:py-8 py-0">
     <Styledcol >
     <div><img src={CurrencySvg} className="lg:w-16 w-12 h-full  stylelap"/></div>
     <div><p className="stylep dynapuff-uniquifier pt-2 ">FinTech</p></div>
     </Styledcol>
     </div>
     <div className="lg:basis-1/5 md:basis-1/5  basis-1/2 lg:w-full w-32 h-32 lg:h-full flex flex-col items-center  justify-center lg:border-r-gray-950 md:border-r-gray-950 border-b-gray-950 lg:border-r md:border-r border-b lg:py-8 py-0">
     <Styledcol >
     <div><img src={LibrarySvg} className="lg:w-16 w-12 h-full stylelap"/></div>
     <div><p className="stylep dynapuff-uniquifier pt-2">On-Demand</p></div>
     </Styledcol>
     </div>
     <div className="lg:basis-1/5 md:basis-1/5  basis-1/2 lg:w-full w-32 h-32 lg:h-full flex flex-col items-center justify-center  border-r border-r-gray-950 lg:border-r-0 md:border-r-0 border-b-gray-950  border-b lg:py-8 py-0">
     <Styledcol >
     <div><img src={SupportSvg} className="lg:w-16 w-12 h-full stylelap"/></div>
     <div><p className="stylep dynapuff-uniquifier pt-2">Game & Sports</p></div>
     </Styledcol>
     </div>
     <div className="lg:basis-1/5 md:basis-1/5  basis-1/2 lg:w-full w-32 h-32 lg:h-full  flex flex-col items-center justify-center lg:border-r-gray-950  md:border-r-gray-950 border-b-gray-950 lg:border-r md:border-r border-b py-8 md:py-6">
     <Styledcol >
     <div><img src={FlightSvg} className="lg:w-16 w-12 h-full stylelap"/></div>
     <div><p className="stylep dynapuff-uniquifier pt-2 text-center lg:text-start">Travel & Tourism</p></div>
     </Styledcol>
     </div>
     <div className="lg:basis-1/5 md:basis-1/5  basis-1/2 lg:w-full w-32 h-32 lg:h-full flex flex-col items-center justify-center border-r-gray-950 border-b-gray-950 border-r border-b py-8 md:py-6">
     <Styledcol >
     <div><img  src={HeadSvg} className="lg:w-16 w-12 h-full stylelap"/></div>
     <div><p className="stylep dynapuff-uniquifier pt-2">Music</p></div>
     </Styledcol>
     </div>
     <div className="lg:basis-1/5 md:basis-1/5  basis-1/2 lg:w-full w-32 h-32 lg:h-full flex flex-col items-center justify-center lg:border-r-gray-950 md:border-r-gray-950 border-b-gray-950 lg:border-r md:border-r border-b py-8 md:py-6">
     <Styledcol >
     <div><img src={ConnectSvg} className="lg:w-16 w-12 h-full stylelap"/></div>
     <div><p className="stylep dynapuff-uniquifier pt-2">Aviation</p></div>
     </Styledcol>
     </div>
     <div className="lg:basis-1/5 md:basis-1/5  basis-1/2 lg:w-full w-32 h-32 lg:h-full flex flex-col items-center justify-center border-r-gray-950 border-b-gray-950 border-r border-b py-8 md:py-6">
     <Styledcol >
     <div><img src={RealSvg} className="lg:w-16 w-12 h-full stylelap"/></div>
     <div><p className="stylep dynapuff-uniquifier pt-2">Real Estate</p></div>
     </Styledcol>
     </div>
     <div className="lg:basis-1/5 md:basis-1/5  basis-1/2 lg:w-full w-32 h-32 lg:h-full flex flex-col items-center justify-center  border-b-gray-950  border-b py-8 md:py-6">
     <Styledcol >
     <div><img src={CastSvg } className="lg:w-16 w-12 h-full stylelap"/></div>
     <div><p className="stylep dynapuff-uniquifier pt-2">Education</p></div>
     </Styledcol>
     </div>
     <div className="lg:basis-1/5 md:basis-1/5  basis-1/2 lg:w-full w-32 h-32 lg:h-full flex flex-col items-center justify-center border-r-gray-950 border-r lg:border-b-0 md:border-b-0 border-b-gray-950 border-b py-8 md:py-6">
     <Styledcol >
     <div><img src={SuperSvg} className="lg:w-16 w-12 h-full stylelap"/></div>
     <div><p className="stylep dynapuff-uniquifier pt-2 text-center lg:text-start">IT Staff Augmentation</p></div>
     </Styledcol>
     </div>
     <div className="lg:basis-1/5 md:basis-1/5  basis-1/2 lg:w-full w-32 h-32 lg:h-full flex flex-col items-center justify-center lg:border-r-gray-950  lg:border-r  md:border-r-gray-950  md:border-r  lg:border-b-0 md:border-b-0 border-b-gray-950 border-b py-8 md:py-6">
     <Styledcol >
     <div><img src={StoreSvg} className="lg:w-16 w-12 h-full stylelap"/></div>
     <div><p className="stylep dynapuff-uniquifier pt-2">Retail</p></div>
     </Styledcol>
     </div>
     <div className="lg:basis-1/5 md:basis-1/5  basis-1/2 lg:w-full w-32 h-32 lg:h-full flex flex-col items-center justify-center border-r-gray-950  border-r lg:border-b-0 md:border-b-0 border-b-gray-950 border-b py-8 md:py-6">
     <Styledcol >
     <div><img src={DirectionSvg} className="lg:w-16 w-12 h-full stylelap"/></div>
     <div><p className="stylep dynapuff-uniquifier pt-2">Automotive</p></div>
     </Styledcol>
     </div>
     <div className="lg:basis-1/5 md:basis-1/5  basis-1/2 lg:w-full w-32 h-32 lg:h-full flex flex-col items-center justify-center lg:border-r-gray-950 lg:border-r md:border-r-gray-950 md:border-r lg:border-b-0 md:border-b-0 border-b-gray-950 border-b py-8 md:py-6">
     <Styledcol >
     <div><img src={EgcSvg} className="lg:w-16 w-12 h-full stylelap"/></div>
     <div><p className="stylep dynapuff-uniquifier pt-2">Health</p></div>
     </Styledcol>
     </div>
     <div className="lg:basis-1/5 md:basis-1/5  basis-1/2 lg:w-full w-32 h-32 lg:h-full flex flex-col items-center justify-center lg:border-r-0 md:border-r-0 border-r-gray-950 border-r py-8 md:py-6">
     <Styledcol >
     <div><img src={LocalSvg} className="lg:w-16 w-12 h-full stylelap"/></div>
     <div><p className="stylep dynapuff-uniquifier pt-2">Logistics</p></div>
     </Styledcol>
     </div>
     
    </container>
  </>);
}

export default Svg;
