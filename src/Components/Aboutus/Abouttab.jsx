import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import styled from 'styled-components';
import Mission from "../../../public/mission.png";
import Value from "../../../public/values.webp";
import Vision from "../../../public/vision.webp" 
const Styledcol = styled.div`
.css-13xfq8m-MuiTabPanel-root{
    padding:10px !important;
}
.css-0{
    border:none!important
}
.css-1usuzwp-MuiButtonBase-root-MuiTab-root.Mui-selected {
    color: purple !important;
}
.css-1qltlow-MuiTabs-indicator{
  background-color: purple !important;
  left: 0px;
  width: 160px;
}
.css-6p016c.Mui-selected {
    color: purple !important;
}
.css-jkmkwa{
  background-color: purple !important;
}
.PrivateTabIndicator-colorSecondary-3{
  background-color: purple !important;
} 
text-underline-offset: 5px;
@media screen and (max-width:467px){
.css-1wxkzlj-MuiTabs-flexContainer{
    overflow: scroll;
  }}
`;
const list1=[
  { h3:'We are driven by curiosity and a desire to make a meaningful impact in transforming technology for our partners.', paragraph1:'Our goal is to craft and deliver top-tier digital solutions that empower businesses to gain a competitive advantage and connect with their audience through powerful digital platforms.', paragraph2:'We strive to support startups and enterprises in unlocking their full potential by providing tailored, results-driven solutions that fuel business growth and maximize returns.', image: Mission},
]
const list2=[
    { h3:'Driving Global Change Through Innovative Technology', paragraph1:'Our mission is to push the boundaries of today’s technologies to address real-world challenges, creating solutions that positively impact communities and contribute to a better society.', paragraph2:'We envision improving the lives of 20 million people by enhancing access to quality education and job opportunities. Our goals include acquiring 10 thriving ventures, scaling five businesses to successful exits, achieving Nasdaq listing, becoming the employer of choice in Pakistan, and securing a place in the Fortune 500 within the next five years.', image: Value},
]
const list3=[
    { h3:'Curiosity', paragraph1:'We foster a culture where team members challenge conventional thinking and seek creative, forward-thinking solutions.', image: Vision, h31:'Integrity', paragraph11:'Transparency and ethical conduct form the foundation of our relationships, both within our organization and with our clients.',h32:'Optimism', paragraph12:'We believe a positive mindset fuels creativity, enhances productivity, and cultivates a fulfilling work environment.',h33:'Meaningful Impact', paragraph13:'Every initiative we undertake is driven by the goal of delivering real value and lasting change.',h34:'Innovative Disruption', paragraph14:'We embrace disruptive thinking as a catalyst for solving complex challenges and unlocking new possibilities.'},
]
export default function Abouttab() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="py-14 xl:px-28 lg:px-10 px-5 ">
        <Styledcol>
        <Box className="w-full px-1">
          <TabContext value={value}>
            <Box className="border-b border-gray-300 flex mb-3 ">
              <TabList   onChange={handleChange} aria-label="tech stack tabs" >
                <Tab className="md:!text-xl  !font-bold" label="Frontend" value="1" />
                <Tab className= " md:!text-xl !font-bold" label="Backend" value="2" />
                <Tab className= " md:!text-xl !font-bold" label="Database" value="3" />
              </TabList>
            </Box>

            <TabPanel value="1">
              <div className="flex flex-wrap lg:gap-6 md:gap-6 gap-4">
            {list1.map((item, index) => 
              (<div key={index} className="md:flex">
                <div className="md:w-1/2">
                <h3 className="font-bold text-xl pt-4 md:pt-8">{item.h3}</h3>
                <p className="pt-4">{item.paragraph1}</p>
                <p className="pt-4">{item.paragraph2}</p>
              </div>
              <div className="md:w-1/2 mt-10 md:mt-0"><img src={item.image} alt="" /></div></div>))}
              </div>
            </TabPanel>

            <TabPanel value="2">
            <div className="flex flex-wrap lg:gap-6 md:gap-6 gap-4">
            {list2.map((item, index) => 
              (<div key={index} className="md:flex">
                <div className="md:w-1/2">
                <h3 className="font-bold text-xl pt-4 md:pt-8">{item.h3}</h3>
                <p className="pt-4">{item.paragraph1}</p>
                <p className="pt-4">{item.paragraph2}</p>
              </div>
              <div className="md:w-1/2 mt-10 md:mt-0"><img src={item.image} alt="" /></div></div>))}
              </div>
            </TabPanel>

            <TabPanel value="3">
            <div className="flex flex-wrap lg:gap-6 md:gap-6 gap-4">
            {list3.map((item, index) => 
              (<div key={index} className="md:flex">
                <div className="md:w-1/2">
                <h3 className="font-bold text-xl pt-3">{item.h3}</h3>
                <p className="pt-3">{item.paragraph1}</p>
                <h3 className="font-bold text-xl pt-3">{item.h31}</h3>
                <p className="pt-3">{item.paragraph11}</p>
                <h3 className="font-bold text-xl pt-3">{item.h32}</h3>
                <p className="pt-3">{item.paragraph12}</p>
                <h3 className="font-bold text-xl pt-3">{item.h33}</h3>
                <p className="pt-3">{item.paragraph13}</p>
                <h3 className="font-bold text-xl pt-3">{item.h34}</h3>
                <p className="pt-3">{item.paragraph14}</p>

              </div>
              <div className="md:w-1/2 mt-10 md:mt-0"><img src={item.image} alt="" /></div></div>))}
              </div>
            </TabPanel>
          </TabContext>
        </Box>
        </Styledcol>
</div>
  );
}
