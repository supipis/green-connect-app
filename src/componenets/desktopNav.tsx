import { NavLink } from "react-router-dom";
import { Icon } from '@iconify/react/dist/iconify.js';
import logoImageUrl from "../assets/logo.png"
const DesktopNav = () => {
  return (
    <div className="bg-white shadow-lg fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="">
          <img src={logoImageUrl} alt="" className="h-10"/>
        </div>
        
        {/* Navigation Links */}
        <div className="flex space-x-8">
        <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "flex items-center text-custom-btn-primary"
                : "flex items-center text-custom-font-primary hover:text-custom-btn-primary"
            }
          >
            
            Home
          </NavLink>
          
          <NavLink
            to="/tips"
            className={({ isActive }) =>
              isActive
                ? "flex items-center text-custom-btn-primary"
                : "flex items-center text-custom-font-primary hover:text-custom-btn-primary"
            }
          >
            
            Tips
          </NavLink>
          
          <NavLink
            to="/market"
            className={({ isActive }) =>
              isActive
                ? "flex items-center text-custom-btn-primary"
                : "flex items-center text-custom-font-primary hover:text-custom-btn-primary"
            }
          >
            Market
          </NavLink>

          <NavLink
            to="/my-messages"
            className={({ isActive }) =>
              isActive
                ? "flex items-center text-custom-btn-primary"
                : "flex items-center text-custom-font-primary hover:text-custom-btn-primary"
            }
          >
            My Messages
          </NavLink>
          
         
        </div>
        <div>
        <NavLink
            to="/logout"
            className="flex items-center text-custom-font-primary  hover:text-custom-btn-primary"
            
          >
            <Icon icon="mdi:logout" className="w-6 h-6 mr-1" />
            Logout
          </NavLink>
        </div>
     
      </div>
    </div>
  );
};

export default DesktopNav;
