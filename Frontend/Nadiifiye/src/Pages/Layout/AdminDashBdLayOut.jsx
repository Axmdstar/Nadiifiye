import {Outlet} from "react-router-dom";
import { ClipboardList, Users,  Flag, Stamp} from "lucide-react";
import Sidebar,{SidebarItem} from "../../components/Sidebar";

const AdminDashBoardLayout = () => {
    return ( 
        <>
        <div className="flex">
        <Sidebar>
          <SidebarItem icon={<Stamp size={20} />} text="Companies" active  />
          <SidebarItem icon={<ClipboardList size={20} />} text="Campains"  />
          <SidebarItem icon={<Users size={20} />} text="Volunteers"  />
          <SidebarItem icon={<Flag size={20} />} text="Reporting" />
        </Sidebar>
        <Outlet />
      </div>
        </>
     );
}
 
export default AdminDashBoardLayout;