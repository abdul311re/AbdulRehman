import{j as t,L as o}from"./index-CaVTgQcH.js";const n=()=>{const i=[{id:1,Route:"/second",title:"Frontend Developer",description:"React, JavaScript, CSS",location:"Remote"},{id:2,Route:"/second",title:"Backend Developer",description:"Node.js, Express, MongoDB",location:"On-site"},{id:3,Route:"/second",title:"Full Stack Developer",description:"React, Node.js, Docker",location:"Hybrid"}];return t.jsxs("div",{children:[t.jsx("h1",{children:"Job Postings"}),t.jsx("ul",{children:i.map(e=>t.jsx("li",{children:t.jsx(o,{to:`${e.Route}/${e.id}`,state:{job:e},children:e.title})},e.id))})]})};export{n as default};
