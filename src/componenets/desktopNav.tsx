import { NavLink } from "react-router-dom";
import { Icon } from '@iconify/react/dist/iconify.js';

const DesktopNav = () => {
  return (
    <div className="bg-white shadow-lg fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-custom-font-primary font-bold text-2xl">
          <img src="src/assets/logo.png" alt="" className="h-10"/>
        </div>
        
        {/* Navigation Links */}
        <div className="flex space-x-8">
          <NavLink
            to="/"
            className="flex items-center text-custom-font-primary  hover:text-custom-btn-primary"
            activeClassName="text-custom-btn-primary"
          >
            
            Home
          </NavLink>
          
          <NavLink
            to="/tips"
            className="flex items-center text-custom-font-primary  hover:text-custom-btn-primary"
            activeClassName="text-custom-btn-primary"
          >
            
            Tips
          </NavLink>
          
          <NavLink
            to="/market"
            className="flex items-center text-custom-font-primary  hover:text-custom-btn-primary"
            activeClassName="text-custom-btn-primary"
          >
            Market
          </NavLink>
          
         
        </div>
        <div>
        <NavLink
            to="/login"
            className="flex items-center text-custom-font-primary  hover:text-custom-btn-primary"
            activeClassName="text-custom-btn-primary"
          >
            <Icon icon="mdi:login" className="w-6 h-6 mr-1" />
            Login
          </NavLink>
        </div>
     
      </div>
    </div>
  );
};

export default DesktopNav;
