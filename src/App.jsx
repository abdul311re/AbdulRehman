import './App.css';
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
import WebRoutes from './WebRoutes/WebRoutes';
import {  useLocation } from 'react-router-dom';
function App() {
  const location = useLocation();

  // Specify the routes where Header/Footer should be hidden
  const noHeaderFooterRoutes = ["/Portfolio"];

  // Check if the current route is in the noHeaderFooterRoutes array
  const hideHeaderFooter = noHeaderFooterRoutes.includes(location.pathname);
  return (<>
   {!hideHeaderFooter && <Header />} {/* Render Footer conditionally */} 
    <div>
    <WebRoutes/> </div>  
    {!hideHeaderFooter && <Footer />} {/* Render Footer conditionally */}
    </> );
}

export default App;
