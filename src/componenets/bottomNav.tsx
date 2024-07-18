import { Icon } from '@iconify/react/dist/iconify.js'
import { NavLink } from 'react-router-dom'

const BottomNav = () => {

    return (
        <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg">
        <div className="flex justify-around items-center h-16">
        <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "flex items-center text-custom-btn-primary"
                : "flex items-center text-custom-font-primary hover:text-custom-btn-primary"
            }
          >
          <div className='text-center'>
          <Icon icon="healthicons:plantation-worker-alt-outline" className="w-6 h-6 ml-2  " />
          <span className="text-sm">Home</span>
          </div>
            
          </NavLink> 
          <NavLink
            to="/tips"
            className={({ isActive }) =>
              isActive
                ? "flex items-center text-custom-btn-primary"
                : "flex items-center text-custom-font-primary hover:text-custom-btn-primary"
            }
          >
          <div>
          <Icon icon="mingcute:announcement-line" className="w-6 h-6"/>
          <span className="text-sm">Tips</span>
          </div>
           
          </NavLink>
          <NavLink
            to="/market"
            className={({ isActive }) =>
              isActive
                ? "flex items-center text-custom-btn-primary"
                : "flex items-center text-custom-font-primary hover:text-custom-btn-primary"
            }
          >
          <div>
          <Icon icon="healthicons:market-stall-outline" className="w-6 h-6 ml-3" />
          <span className="text-sm">Market</span>
          </div>
           
          </NavLink> 
          <NavLink
            to="/my-messages"
            className={({ isActive }) =>
              isActive
                ? "flex items-center text-custom-btn-primary"
                : "flex items-center text-custom-font-primary hover:text-custom-btn-primary"
            }
          >
             <div>
             <Icon icon="system-uicons:message" className="w-6 h-6 ml-3"/>
          <span className="text-sm">Messages</span>
          </div>
          </NavLink>
          
        </div>
      </div>
    )
}

export default BottomNav
