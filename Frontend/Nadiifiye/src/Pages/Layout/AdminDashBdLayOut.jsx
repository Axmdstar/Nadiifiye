import {Outlet} from "react-router-dom";
import { ClipboardList, Users,  Flag, Stamp} from "lucide-react";
import Sidebar,{SidebarItem} from "../../components/Sidebar";
import { useLocation } from "react-router-dom";

const AdminDashBoardLayout = () => {
  const location = useLocation();
  const CurrentPath = location.pathname.slice(7);
  // console.log('CurrentPath :>> ', CurrentPath);

    return ( 
        <>
        <div className="flex">
        <Sidebar>
          {/*  */}
          <SidebarItem icon={<Stamp size={20} />} text="Companies" active={ CurrentPath === "Companies" ? true : false}  />
          <SidebarItem icon={<ClipboardList size={20} />} text="Campains" active={ CurrentPath === "Campains" ? true : false} />
          <SidebarItem icon={<Users size={20} />} text="Volunteers" active={ CurrentPath === "volunteers" ? true : false} />
          <SidebarItem icon={<Flag size={20} />} text="Reporting" active={ CurrentPath === "reporting" ? true : false} />
        </Sidebar>
        <Outlet />
        
      </div>
        </>
     );
}
 
export default AdminDashBoardLayout;