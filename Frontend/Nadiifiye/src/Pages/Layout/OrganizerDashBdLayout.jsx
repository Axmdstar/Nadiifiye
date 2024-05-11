
import {Outlet} from "react-router-dom";
import { ClipboardList, Users, Flag} from "lucide-react";
import Sidebar,{SidebarItem} from "../../components/Sidebar";

import { useLocation, NavLink } from "react-router-dom";
import { AuthContext, useAuth } from "../../utility/UserContext";

const OrganizerDshBLayout = () => {
  const location = useLocation();
  const CurrentPath = location.pathname;
  console.log("CurrentPath :>> ", CurrentPath);

  return (
    <div className="flex">
      <Sidebar className="h-auto">
        <NavLink to={"../Organizer"}>
          <SidebarItem icon={<ClipboardList size={20} />} text="Campaigns" />
        </NavLink>

        <NavLink to={"Volunteer"}>
          <SidebarItem icon={<Users size={20} />} text="Volunteers" />
        </NavLink>
      </Sidebar>
      <Outlet />
    </div>
  );
};


          <NavLink to={"Report"}>
            <SidebarItem icon={<Flag size={20} />} text="Report" active={ CurrentPath === "Report" ? true : false} />
          </NavLink>

        </Sidebar>
        <Outlet />
        
        
      </div>
        
     );
}
 
export default OrganizerDshBLayout;

