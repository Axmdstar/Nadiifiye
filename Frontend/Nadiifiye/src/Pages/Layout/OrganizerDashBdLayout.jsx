import {Outlet} from "react-router-dom";
import { ClipboardList, Users} from "lucide-react";
import Sidebar,{SidebarItem} from "../../components/Sidebar";
import { useLocation, NavLink } from "react-router-dom";


const OrganizerDshBLayout = () => {
  const location = useLocation();
  const CurrentPath = location.pathname;
  console.log('CurrentPath :>> ', CurrentPath);
  
    return ( 
        
        <div className="flex">
        <Sidebar className="">

          <NavLink to={"../Organizer"}>
            <SidebarItem icon={<ClipboardList size={20} />} text="Campaigns"  />
          </NavLink>

          <NavLink to={"Volunteer"}>
            <SidebarItem icon={<Users size={20} />} text="Volunteers"  />
          </NavLink>

        </Sidebar>
        <Outlet />
        
        
      </div>
        
     );
}
 
export default OrganizerDshBLayout;