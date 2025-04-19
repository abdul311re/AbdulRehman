import  { useState } from 'react';

const Fourth = ()=>{
    const tabs = [
        { id: 'tab1', label: '01. Website Development', content: 'We build high-performance websites with modern tech stacks.' },
        { id: 'tab2', label: '02. App Development', content: 'We build high-performance websites with modern tech stacks.' },
        { id: 'tab3', label: '03. Digital Marketing', content: 'We build high-performance websites with modern tech stacks.' },
        { id: 'tab4', label: '04. Digital Marketing', content: 'We build high-performance websites with modern tech stacks.' },
      ];
    
      const [activeTab, setActiveTab] = useState(tabs[0].id); // ✅ Now it's safe
    return (<>
    <div className="bg-white xl:px-28 lg:px-12 px-4 md:px-10 md:py-14 py-8 ">
        <h2 className="text-3xl font-bold text-charcoal">Best Techniques in Mobile App Development</h2>
        <p className="text-md pt-5 text-charcoal pr-10">By following these proven methods, you can build a high-performing mobile app that offers an exceptional user experience and drives business growth. Our mobile app development team is committed to these standards to ensure outstanding results.</p>
    </div>
    <div className="bg-white xl:px-28 lg:px-12 px-4 md:px-10 py-6 md:flex ">
        <div className="md:w-1/2 bg-charcoal border">
        <div className="flex flex-col px-10 py-10">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`text-start px-2 py-2 text-lg  font-medium transition-all duration-300 ${
              activeTab === tab.id
                ? 'bg-white bg-opacity-10 text-grey shadow-text '
                : 'text-white hover:text-black'
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
              <p className="text-gray-700">{tab.content}</p>
            </div>
          ) : null
        )}
      </div>
    </div>
    </>)
}
export default Fourth;