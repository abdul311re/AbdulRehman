import  { useState } from 'react';

const Fourth = ()=>{
    const tabs = [
        { id: 'tab1', label: '01. Prioritize Performance Optimization', content: 'Prioritize fast load times, efficient use of resources, and low power consumption. Use streamlined code, reduce memory footprint, and fine-tune APIs to deliver a seamless, responsive experience that boosts user satisfaction and encourages long-term engagement.' },
        { id: 'tab2', label: '02. Implement Agile Development', content: 'Adopt Agile practices to support iterative development, allowing for greater adaptability and responsiveness. Emphasize continuous testing, regular client input, and step-by-step enhancements to quickly resolve challenges, refine functionality, and align with changing user needs.' },
        { id: 'tab3', label: '03. Secure Data & Privacy', content: 'Enforce strong encryption standards, reliable authentication methods, and routine security assessments. Safeguarding user data should be a top priority to maintain trust, meet compliance requirements, and avoid potential legal and reputational risks from data breaches.' },
        { id: 'tab4', label: '04. Enhance User-Centric Design', content: 'Prioritize a user-centered design by focusing on intuitive UI/UX. Conduct thorough user research and usability testing to refine the app’s interface, ensuring it meets user expectations and boosts satisfaction and engagement.' },
      ];
    
      const [activeTab, setActiveTab] = useState(tabs[0].id); // ✅ Now it's safe
    return (<>
    <div className="bg-white xl:px-28 lg:px-12 px-4 md:px-10 md:py-14 py-8 ">
        <h2 className="text-3xl font-bold text-charcoal">Best Techniques in Mobile App Development</h2>
        <p className="text-md pt-5 text-charcoal pr-10">By following these proven methods, you can build a high-performing mobile app that offers an exceptional user experience and drives business growth. Our mobile app development team is committed to these standards to ensure outstanding results.</p>
    </div>
    <div className="bg-white xl:px-28 lg:px-12 px-4 md:px-10 py-6 md:flex ">
        <div className="md:w-1/2 bg-charcoal border">
        <div className="flex gap-3 flex-col px-10 py-10">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`text-start px-2  py-2 text-lg  font-medium transition-all duration-300 ${
              activeTab === tab.id
                ? 'bg-white bg-opacity-10 text-grey shadow-text '
                : 'text-white '
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
        </div>
        <div className="border border-l-0 px-10 py-12 md:w-1/2">
        {tabs.map((tab) =>
          tab.id === activeTab ? (
            <div key={tab.id}>
              <h3 className='text-xl font-bold text-charcoal'>{tab.label}</h3>
              <p className="text-gray-700 pt-5">{tab.content}</p>
            </div>
          ) : null
        )}
      </div>
    </div>
    </>)
}
export default Fourth;