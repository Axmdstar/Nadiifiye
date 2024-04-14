import {Outlet} from "react-router-dom";
import { ClipboardList, Users,  Flag, Stamp} from "lucide-react";
import Sidebar,{SidebarItem} from "../../components/Sidebar";
import { useLocation, NavLink } from "react-router-dom";
import { UserContext } from "../../utility/UserContext";

const OrganizerDshBLayout = () => {
  const location = useLocation();
  const CurrentPath = location.pathname;
  console.log('CurrentPath :>> ', CurrentPath);
  
    return ( 
        <UserContext.Provider value="">
        <div className="flex">
        <Sidebar className="">

          <NavLink to={"/Organizer"}>
            <SidebarItem icon={<ClipboardList size={20} />} text="Campains" active={ CurrentPath === "Organizer" ? true : false} />
          </NavLink>

          <NavLink to={"Volunteer"}>
            <SidebarItem icon={<Users size={20} />} text="Volunteers" active={ CurrentPath === "volunteer" ? true : false} />
          </NavLink>

          <NavLink>
            <SidebarItem icon={<Flag size={20} />} text="Reporting" active={ CurrentPath === "reporting" ? true : false} />
          </NavLink>

        </Sidebar>
        
        

        <Outlet />
        
        
      </div>
        </UserContext.Provider>
     );
}
 
export default OrganizerDshBLayout;