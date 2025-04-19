import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import styled from 'styled-components';
const Styledcol = styled.div`
.css-13xfq8m-MuiTabPanel-root {
    padding: 24px 19px 24px 19px;
}
.css-jkmkwa{
  background-color: purple !important;
}
.css-1qltlow-MuiTabs-indicator{
  background-color: purple;
  left: 0px;
  width: 160px;
}
.PrivateTabIndicator-colorSecondary-3{
  background-color: purple;
} 
text-underline-offset: 5px;
@media screen and (max-width:467px){
.css-1wxkzlj-MuiTabs-flexContainer{
    overflow: scroll;
  }}
`;
const list1=[
  {name : 'Html'},
  {name : 'Css'},
  {name : 'Javascript'},
  {name : 'JQuery'},
  {name : 'React.js'},
  {name : 'Angular'},
]
const list2=[
  {name : 'Java'},
  {name : 'Node'},
  {name : 'PHP'},
  {name : 'Python'},
  {name : 'Rails'},
]
const list3=[
  {name : 'Cassandra'},
  {name : 'MongoDB'},
  {name : 'MySQL'},
  {name : 'PostgreSQL'},
]
const list4=[
  {name : 'AWS'},
  {name : 'Azure'},
  {name : 'Google Cloud'},
  {name : 'Kubernetes'},
]
export default function Websitetab() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="py-14 xl:px-32 lg:px-10 px-5 bg-black">
      <container >
        <div className="mb-8">
          <div className="grid lg:grid-cols-2 gap-8 text-white ">
            <h2 className="lg:text-3xl text-2xl font-bold lg:w-3/4 w-[90%] ">
              <span className="text-purple xl:text-[2.5rem] text-[1.8rem]">Our Tech Stack for </span>
              Beautiful, Accessible, Fast, & Secure Websites
            </h2>
            <p className="lg:text-lg text-sm ">
              Develop or rescue your outdated frontend with ultra-responsive interfaces. Our web development company uses mature and open-source technologies to build web products that are reliable and smooth across platforms.
            </p>
          </div>
        </div>
        <Styledcol>
        <Box className="w-full px-1">
          <TabContext value={value}>
            <Box className="border-b border-gray-300 flex mb-3 ">
              <TabList   onChange={handleChange} aria-label="tech stack tabs" >
                <Tab className="!text-white !font-bold" label="Frontend" value="1" />
                <Tab className="!text-white !font-bold" label="Backend" value="2" />
                <Tab className="!text-white !font-bold" label="Database" value="3" />
                <Tab className="!text-white !font-bold" label="Cloud" value="4" />
              </TabList>
            </Box>

            <TabPanel value="1">
              <div className="flex flex-wrap lg:gap-6 md:gap-6 gap-4">
            {list1.map((item, index) => 
              (<ul className="text-lg font-medium"key={index}>
                <li className="bg-white text-black lg:px-[20px] md:px-[20px] px-[10px] py-[5px]  md:py-[15px] lg:py-[15px] font-bold text-center underline decoration-[#ee9d2c] underline-offset-5">{item.name}</li>
              </ul>))}
              </div>
            </TabPanel>

            <TabPanel value="2">
            <div className="flex flex-wrap lg:gap-6 md:gap-6 gap-4">
            {list2.map((item, index) => 
              (<ul className="text-lg font-medium"key={index}>
                <li className="bg-white text-black lg:px-[20px] md:px-[20px] px-[10px] py-[5px]  md:py-[15px] lg:py-[15px] font-bold text-center underline decoration-[#ee9d2c] underline-offset-5">{item.name}</li>
              </ul>))}
              </div>
            </TabPanel>

            <TabPanel value="3">
            <div className="flex flex-wrap lg:gap-6 md:gap-6 gap-4">
            {list3.map((item, index) => 
              (<ul className="text-lg font-medium"key={index}>
                <li className="bg-white text-black lg:px-[20px] md:px-[20px] px-[10px] py-[5px]  md:py-[15px] lg:py-[15px] font-bold text-center underline decoration-[#ee9d2c] underline-offset-5">{item.name}</li>
              </ul>))}
              </div>
            </TabPanel>

            <TabPanel value="4">
            <div className="flex flex-wrap lg:gap-6 md:gap-6 gap-4">
            {list4.map((item, index) => 
              (<ul className="text-lg font-medium"key={index}>
                <li className="bg-white text-black lg:px-[20px] md:px-[20px] px-[10px] py-[5px]  md:py-[15px] lg:py-[15px] font-bold text-center underline decoration-[#ee9d2c] underline-offset-5">{item.name}</li>
              </ul>))}
              </div>
            </TabPanel>
          </TabContext>
        </Box>
        </Styledcol>
      </container>
    </div>
  );
}
