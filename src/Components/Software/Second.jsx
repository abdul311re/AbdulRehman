import AnimatedCounter from "../Counter.jsx"
const Second= () => {
return(<>
<div className="lg:px-20 md:px-2 py-12 md:flex">
    <div className="md:w-1/2 lg:px-12 md:px-1 px-6 font-bold  flex items-center justify-center">
        <h2 className="lg:text-3xl md:text-2xl text-lg edu-au-vic-wa-nt-pre-uniquifier ">Collaborate with Experts in Custom Software Development</h2>
        </div>
    <div className="md:w-1/2 lg:px-12 md:px-6 px-6 pt-4 md:pt-0  lg:text-md text-sm  md:leading-relaxed ">
        <p>Partner with a reliable software team that aligns with your business objectives. We offer tailor-made software solutions, modernize existing systems, and provide secure, scalable integrations to support your growth.</p>
        <p className="pt-2">Explore our outstanding client feedback that reflects our dedication to quality and our reputation as a leading software development company in the USA.</p>
        </div>
</div>
<div   className="lg:px-36 md:px-10 px-6  pb-16 md:flex lg:gap-48 md:gap-10 gap-20  ">
        <AnimatedCounter from={0} to={4.7} duration={2000} title="Clutch Platform Review Average" />
        <AnimatedCounter from={0} to={5.0} duration={2000} title="GoodFirms Platform Review Average" />
        <AnimatedCounter from={0} to={4.5} duration={2000} title="RightFirms Platform Review Average" />
</div>
</>)
}
export default Second;