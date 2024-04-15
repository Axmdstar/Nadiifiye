import {Outlet} from "react-router-dom";
import { ClipboardList, Users,  LayoutDashboard, Stamp} from "lucide-react";
import Sidebar,{SidebarItem} from "../../components/Sidebar";
import { useLocation, NavLink } from "react-router-dom";
import { UserContext } from "../../utility/UserContext";

const AdminDashBoardLayout = () => {
  const location = useLocation();
  console.log('location :>> ', location.pathname);
  const CurrentPath = location.pathname.slice(7);
  
  
    return ( 
        <UserContext.Provider value="">
        <div className="flex">
        <Sidebar className="">
          <NavLink to={"../Admin"}>
            <SidebarItem icon={<LayoutDashboard size={20} />} text="Volunteers" active={ CurrentPath === "volunteers" ? true : false} />
          </NavLink>

          <NavLink to={"Organizer"}>
            <SidebarItem  icon={<Stamp size={20} />} text="Organizer" active={ CurrentPath === "Organizer" ? true : false}  />
          </NavLink>

          <NavLink to={"Campaigns"}>
            <SidebarItem icon={<ClipboardList size={20} />} text="Campains" active={ CurrentPath === "Campaigns" ? true : false} />
          </NavLink>

          <NavLink to={"Volunteers"}>
            <SidebarItem icon={<Users size={20} />} text="Volunteers" active={ CurrentPath === "Volunteers" ? true : false} />
          </NavLink>

          

        </Sidebar>
        
        

        <Outlet />
        
        
      </div>
        </UserContext.Provider>
     );
}
 
export default AdminDashBoardLayout;