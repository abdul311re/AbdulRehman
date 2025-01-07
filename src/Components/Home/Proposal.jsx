import "../../App.css";
import F1830 from "../../Assets/PropasalSvg/Frame-1830.svg";
import F1831 from "../../Assets/PropasalSvg/Frame-1831.svg";
import Sitemap from "../../Assets/PropasalSvg/Sitemap-1.svg";
import Page from "../../Assets/PropasalSvg/Page.svg";
import F1823 from "../../Assets/PropasalSvg/Frame-1823.webp";
import Ai from "../../Assets/PropasalSvg/AI-Generator.svg";
import Map from "../../Assets/PropasalSvg/Mapping.svg";
import Wire from "../../Assets/PropasalSvg/Wireframes.webp";
import Flow from "../../Assets/PropasalSvg/User Flows.svg";
import Content from "../../Assets/PropasalSvg/Content.svg";
import Descrip from "../../Assets/PropasalSvg/Description.svg";
import User from "../../Assets/PropasalSvg/UserFlow.svg";
import Wire1 from "../../Assets/PropasalSvg/Wireframes-1.svg";
 function Proposal(){
   return(<>
 <h2 className="text-center text-2xl lg:text-2.5xl font-bold edu-au-vic-wa-nt-pre-uniquifier text-charcoal  lg:pt-4 lg:pb-6 pb-0">Craft compelling and results-driven proposals</h2>
 <div className="flex flex-col items-center justify-center">
 <section className="bg-white lg:mx-20 mx-0 prop-width w-20rem md:w-50rem lg:w-74rem mt-10 lg:rounded-2.3xl rounded-3xl shadow-lg">
   <div className="lg:flex lg:px-12 px-6 py-10">
    <div className="basis-1/2 ">
        <div className="flex gap-2">
            <div><button className="bg-charcoal rounded-md border-charcoal border px-2 py-1"><p className="text-white text-xs">Phase 1</p></button></div>
            <div><button className="bg-white rounded-md border-charcoal border px-2 py-1"><p className="text-xs">25% in sales</p></button></div>
        </div>
        <div className="py-4">
            <h3 className=" prop-h3 lg:text-2.1rem leading-extra-loose propos-h3 text-2xl text-black poppins-bold-italic  lg:w-4/5 ">Design a comprehensive collection of visuals for a website proposal pitch.</h3>            
        </div>
        <div className="prop-pt flex lg:pt-24 pt-10 propos-div">
            <div className="basis-1/2">
            <div>
                <img src={Page} width={"20px"} alt="" />
                <h4 className="font-semibold pt-1 pb-2">Brief</h4>
                <p className="text-xs propose-p text-charcoal font-semibold lg:w-4/5  w-11/12 opacity-50">Develop a project outline in Artistic Rule for crafting a comprehensive sales proposal for a Web.</p>
            </div>
            <div className="pt-6 lg:pt-8 pb-6">
                <img src={F1831} width={"20px"} alt="" />
                <h4 className="font-semibold lg:pt-0 md:pt-0 pt-1 pb-2 leading-3 lg:leading-tight md:leading-tight">AI-Powered generator</h4>
                <p className="text-xs propose-p text-charcoal font-semibold lg:w-4/5 w-11/12 opacity-50">We offer tools for crafting sitemaps and wireframes, enabling rapid project setup and streamlined planning with the support of AI.</p>
            </div>
            </div>
            <div className="basis-1/2">
            <div>
                <img src={Sitemap} width={"20px"} alt="" />
                <h4 className="font-semibold pt-1 pb-2">Sitemap creation</h4>
                <p className="text-xs propose-p text-charcoal font-semibold lg:w-4/5 w-11/12 opacity-50">An engaging visual sitemap with integrated page editing, AI-powered content generation.</p>
            </div>
            <div className=" pt-6 pb-6">
                <img src={F1830} width={"20px"} alt="" />
                <h4 className="font-semibold pt-1 pb-2">Website structure</h4>
                <p className="text-xs propose-p text-charcoal font-semibold lg:w-4/5 w-11/12 opacity-50">Quickly create a high-level overview of your project using the visual Information Architecture tool in just minutes.</p>
            </div>
            </div>
        </div>
    </div>
    <div className="basis-1/2 ">
    <div className="flex gap-4">
        <div className="basis-1/2">
        <img src={Map} alt="" /></div>
        <div className="basis-1/2">
        <img src={Ai} alt="" /></div>
    </div>
    <div className="pt-5">
        <img src={F1823} alt="" />
    </div>
    </div>
   </div>
  </section>

  {/* Second portion */}
  <section className="bg-white lg:mx-20 mx-4 prop-width w-20rem md:w-50rem lg:w-74rem mt-10 lg:rounded-2.3xl rounded-3xl shadow-lg">
   <div className="lg:flex lg:px-12 px-6 py-10 gap-6">
   <div className="basis-1/2 ">
    <div className="flex gap-4">
        <div className="basis-1/2 ">
        <img src={Wire} alt="" /></div>
        <div className="basis-1/2  md:flex md:justify-center md:items-center flex-col">
        <img src={Flow} alt="" />
        <div className="lg:pt-5 md:pt-8 pt-2">
        <img src={Content} alt="" />
    </div>
        </div>
    </div>
    </div>
    <div className="basis-1/2 lg:px-6 px-2 lg:pt-2 pt-10">
        <div className="flex gap-2">
            <div><button className="bg-charcoal rounded-md border-charcoal border px-2 py-1"><p className="text-white text-xs">Phase 1</p></button></div>
            <div><button className="bg-white rounded-md border-charcoal border px-2 py-1"><p className="text-xs">25% in sales</p></button></div>
        </div>
        <div className="py-4">
            <h3 className="prop-h3 lg:text-3xl propos-h31 text-2xl text-black poppins-bold-italic !leading-extra-loose  ">Enhance your proposal with added value: UX design, wireframes, content strategy, and user flow mapping.</h3>            
        </div>
        <div className="prop-pt flex lg:pt-12 pt-10">
            <div className="basis-1/2">
            <div>
                <img src={Wire1} width={"20px"} alt="" />
                <h4 className="font-semibold pt-1 pb-2">Pre-made templates
                </h4>
                <p className="text-xs propose-p text-charcoal font-semibold  w-11/12 opacity-50">A visual resource library that enhances proposal creation efficiency, enabling clients to complete the process up to five times faster.</p>
            </div>
            <div className="pt-6 pb-6">
                <img src={Wire1} width={"20px"} alt="" />
                <h4 className="font-semibold lg:pt-0 md:pt-0 pt-1 pb-2 leading-3 lg:leading-tight md:leading-tight">Wireframes
                </h4>
                <p className="text-xs propose-p  text-charcoal font-semibold w-11/12 opacity-50">Design high-fidelity prototypes using a comprehensive template library and showcase them to clients as a vision of their future website.</p>
            </div>
            </div>
            <div className="basis-1/2">
            <div>
                <img src={Descrip} width={"20px"} alt="" />
                <h4 className="font-semibold pt-1 pb-2">Content
                </h4>
                <p className="text-xs propose-p text-charcoal font-semibold w-11/12 opacity-50">Gather text and visual content for each webpage using an editor similar to Notion, and captivate audiences with compelling, high-quality writing.</p>
            </div>
            <div className=" pt-6 pb-6">
                <img src={User} width={"20px"} alt="" />
                <h4 className="font-semibold pt-1 ">User flows
                </h4>
                <p className="text-xs text-charcoal propose-p font-semibold w-11/12 opacity-50">A straightforward and minimalist approach to designing outstanding user experiences in just minutes, enabling you to validate proposed solutions efficiently.</p>
            </div>
            </div>
        </div>
    </div>
   </div>
  </section>
  </div>
 </>)
}
export  default Proposal;