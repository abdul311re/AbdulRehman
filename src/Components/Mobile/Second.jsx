import { Button } from "@/components/ui/button";
import "../../App.css";
function Second(){
return(<>
<div className="bg-Hex lg:flex  gap-16 lg:py-20 py-14 xl:px-32 lg:px-20  px-5">
    <div className="lg:w-1/2">
    <h2 className="md:text-3xl text-2xl pb-6 pt-1 font-bold text-black dynapuff-uniquifier  ">Custom <span className="text-charcoal"> Mobile App Development Solutions </span>  for Advanced, High-Performing Mobile Apps.</h2>
    <p className="pb-6 text-md">Whether you're launching a new app from scratch or enhancing existing features, our mobile app development team supports your brand in navigating today’s digital landscape. With a skilled crew of business analysts, project managers, UI/UX designers, mobile developers, QA experts, and growth strategists, we ensure smooth and efficient progress through every stage of the app development lifecycle.</p>
    <Button className="bg-charcoal py-5">Start with a Free Consultation</Button>
    </div>
    <div className="lg:w-1/2 scrollable-element my-10 lg:my-0 px-2 h-[340px] xl:h-[350px]" >
       <h3 className="font-bold pb-1 pt-2  text-lg ">Android App Development</h3>
      <p className="text-sm">Unlock the power of Android through tailor-made app development using Kotlin, Java, and Jetpack Compose. Our Android specialists craft robust, adaptable applications built for seamless performance across a range of devices. Designed for scalability and user engagement, our solutions help brands connect with broader audiences through highly optimized, device-specific experiences.</p>
      <h3 className="font-bold pb-1 pt-4 text-lg">IOS App Development</h3>
      <p className="text-sm">Build powerful, native IOS applications with Swift and Objective-C, tailored to meet Apple’s strict performance and design standards. Our iOS development team creates seamless experiences for iPhone, iPad, Apple Watch, and Apple TV, ensuring your app delivers exceptional user satisfaction and engagement throughout the Apple ecosystem.
      </p>
      <h3 className="font-bold pb-1 pt-4 text-lg">React Native App Development</h3>
      <p className="text-sm">Take advantage of React Native’s flexibility to build high-performance, cross-platform mobile applications. Our team specializes in developing enterprise-level solutions with advanced integrations and smooth performance. We've launched top-rated apps on both the App Store and Google Play, delivering fast deployment and consistent functionality that supports business scalability and growth.</p>
      <h3 className="font-bold pb-1 pt-4 text-lg">Flutter App Development</h3>
      <p className="text-sm">Harness the power of Flutter and Dart to build visually striking, high-performing apps for both iOS and Android. Our Flutter experts design engaging user interfaces and solid back-end systems, enabling fast development cycles and delivering consistent, smooth performance across platforms — perfectly tailored to meet a wide range of business objectives.</p>
    </div>
</div>
</>)
}
export default Second;