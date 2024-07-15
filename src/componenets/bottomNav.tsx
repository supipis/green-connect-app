import { Icon } from '@iconify/react/dist/iconify.js'
import { NavLink } from 'react-router-dom'

const BottomNav = () => {

    return (
        <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg">
        <div className="flex justify-around items-center h-16">
          <NavLink
            to="/"
            className="flex flex-col items-center text-custom-font-primary hover:text-custom-btn-primary"
            activeClassName="text-green-500"
          > 
          <div className='text-center'>
          <Icon icon="healthicons:plantation-worker-alt-outline" className="w-6 h-6 ml-2  " />
          <span className="text-sm">Home</span>
          </div>
            
          </NavLink> 
         <NavLink
            to="/tips"
            className="flex flex-col items-center text-custom-font-primary hover:text-custom-btn-primary"
            activeClassName="text-green-500"
          > 
          <div>
          <Icon icon="el:livejournal" className="w-6 h-6" />
          <span className="text-sm">Tips</span>
          </div>
           
          </NavLink>
          <NavLink
            to="/market"
            className="flex flex-col items-center text-custom-font-primary hover:text-custom-btn-primary"
            activeClassName="text-green-500"
          >
          <div>
          <Icon icon="arcticons:volunteer-exchange" className="w-6 h-6 ml-3" />
          <span className="text-sm">Market</span>
          </div>
           
          </NavLink> 
        </div>
      </div>
    )
}

export default BottomNav
