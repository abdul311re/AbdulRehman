import { Button } from "@/Components/ui/button";
import "../../App.css";
function Service(){
return(<>
<div className="bg-Hex lg:flex  gap-16 lg:py-20 py-14 xl:px-32 lg:px-20  px-5">
    <div className="lg:w-1/2">
    <h2 className="md:text-3xl text-2xl pb-6 pt-1 font-bold text-black dynapuff-uniquifier ">Custom <span className="text-charcoal"> Web Development Solutions </span> for Advanced, High-Performing Websites.</h2>
    <p className="pb-6 text-md">Component-based approach is essential for high-performing websites. Meet all your quality and functionality standards with AR’s expert web development services.</p>
    <Button className="bg-charcoal py-5">Start with a Free Consultation</Button>
    </div>
    <div className="lg:w-1/2 scrollable-element my-10 lg:my-0 px-2 h-[340px] xl:h-[300px]" >
       <h3 className="font-bold pb-1 pt-2 dynapuff-uniquifier text-md">UI/UX Web Design</h3>
      <p className="text-sm">We craft engaging interfaces and user experiences with tools like Figma and Adobe Creative Cloud, ensuring seamless responsiveness across all devices. Our designs are not only visually flawless but also accessibility-friendly and aligned with your brand, driving higher user engagement and conversions.</p>
      <h3 className="font-bold pb-1 pt-4 dynapuff-uniquifier text-md">Frontend Development</h3>
      <p className="text-sm">We develop high-speed, SEO-optimized user interfaces using the latest technologies, ensuring seamless performance on all devices. Whether it's monolithic or micro-frontend architecture, our solutions are designed for scalability and efficiency, delivering a smooth user experience that boosts conversion rates.
      </p>
      <h3 className="font-bold pb-1 pt-4 dynapuff-uniquifier text-md">Backend Development</h3>
      <p className="text-sm">From Node.js to Python, we build secure and scalable backend solutions that drive your web applications. Our backend development ensures seamless integration with the frontend, delivering efficient data handling, robust API performance, and minimal latency.</p>
      <h3 className="font-bold pb-1 pt-4 dynapuff-uniquifier text-md">Full Stack Development</h3>
      <p className="text-sm">Our approach centers on creating unified, interconnected web systems that provide flexible, cross-platform functionality. We build resilient, easily updatable applications, ensuring your business's digital infrastructure can evolve. Our focus is on delivering a consistent and intuitive user experience at every touchpoint.</p>
    </div>
</div>
</>)
}
export default Service;