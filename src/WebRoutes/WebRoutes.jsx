// src/Routes/Webroute.jsx
import  { Suspense, lazy } from 'react';
import { Routes, Route , Navigate  } from 'react-router-dom';
const Firstpage = lazy(() => import('../Pages/Career/Firstpage.jsx'));
const Secondpage = lazy(() => import('../Pages/Career/Secondpage.jsx'));
const Home = lazy(() => import('../Pages/Website/Home.jsx'))
const Website = lazy(() => import('../Pages/Website/Website.jsx'));
const Portfolio = lazy(() => import('../Pages/Portfolio.jsx'));
const Aboutus = lazy(() => import('../Pages/Website/Aboutus.jsx'));
const Software = lazy(() => import('../Pages/Website/Software.jsx'));
const Mobile = lazy(() => import('../Pages/Website/Mobile.jsx'));


const WebRoutes = () => {

  return (
    <Suspense
      fallback={
        <div className="d-flex justify-content-center">
          <div className="loadingio-spinner-ripple-9yaj8a57f0u">
            <div className="ldio-24eutxqm1o1">
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      }
    >
      <Routes>
      <Route exact path="/" element={<Home />} />
        <Route path="/first" element={<Firstpage />} />
        <Route path="/second/:id" element={<Secondpage />} /> {/* Changed 'component' to 'element' */}
        <Route path='/Website' element={<Website />} />
        <Route path='/Portfolio' element={<Portfolio />} />
        <Route path='/Aboutus' element={<Aboutus />} />
        <Route path='/Software' element={<Software />} />
        <Route path='/Mobile' element={<Mobile />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
);
};

export default WebRoutes;
