import Coding from "../../../public/Chosse/coding.png";
import Deployment from "../../../public/Chosse/deployment.png";
import webDesign from "../../../public/Chosse/web-design.png";
import {
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
} from '@heroicons/react/24/outline';

const Chooseu = [
  { h3: 'Design', paragraph: 'Our team creates personalized designs to ensure client satisfaction. We understand that every client wants to see the final outcome, which is why we strive to deliver the completed design before starting any project.', icon:  ChartPieIcon,  image: webDesign,},
  { h3: 'Develop', paragraph: 'In this phase, clients receive the complete product—be it software, graphics, videos, or any other service we offer. This stage reflects the dedication and collaboration of our skilled and committed team of professionals.', icon: CursorArrowRaysIcon, image: Coding, },
  { h3: 'Deploy', paragraph: 'The most exciting part of any project is when it’s deployed to the server or handed over to the client. We truly value positive feedback at this stage and are always ready to offer customization or resolve any issues if needed.', icon: FingerPrintIcon,image:Deployment 
   },
  
];

function Choose() {
  return (
    <>
      <div className="md:py-16 pt-32 ">
        <div className="py-8 flex flex-col items-center justify-center">
          <h2>We are exceptional</h2>
          <h3 className="font-bold text-4xl text-charcoal">Why Choose Us</h3>
        </div>

        <div className="lg:w-2/3 md:w-[95%] w-[90%] mt-2 mx-auto grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-10 divide-y sm:divide-y-0 sm:divide-x divide-black">
          {Chooseu.map((item, index) => (
            <div key={index} className="py-4 px-3 ">
              {item.image ? (
              <img src={item.image} alt={item.name} className="w-14 h-14 mb-2" />
            ) : (
              <item.icon className="w-12 h-12 text-purple mb-2" />
            )}
              <h3 className="py-1 font-bold text-xl">{item.h3}</h3>
              <p>{item.paragraph}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Choose;
