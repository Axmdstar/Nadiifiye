import { Outlet } from "react-router-dom";
import { ClipboardList, Users, LayoutDashboard, Stamp ,UserRoundCheck,Flag} from "lucide-react";
import Sidebar, { SidebarItem } from "../../components/Sidebar";
import { useLocation, NavLink } from "react-router-dom";

const AdminDashBoardLayout = () => {
  const location = useLocation();
  console.log("location :>> ", location.pathname);
  const CurrentPath = location.pathname.slice(7);

  return (
    <div className="flex">
      <Sidebar className="">
        <NavLink to={"../Admin"}>
          <SidebarItem
            icon={<LayoutDashboard size={20} />}
            text="DashBoard"
            active={CurrentPath === "volunteers" ? true : false}
          />
        </NavLink>

        <NavLink to={"Organizer"}>
          <SidebarItem
            icon={<Stamp size={20} />}
            text="Organizer"
            active={CurrentPath === "Organizer" ? true : false}
          />
        </NavLink>

        <NavLink to={"Campaigns"}>
          <SidebarItem
            icon={<ClipboardList size={20} />}
            text="Campains"
            active={CurrentPath === "Campaigns" ? true : false}
          />
        </NavLink>

        <NavLink to={"Volunteers"}>
          <SidebarItem
            icon={<Users size={20} />}
            text="Volunteers"
            active={CurrentPath === "Volunteers" ? true : false}
          />
        </NavLink>
        <NavLink to={"Applications"}>
          <SidebarItem
            icon={<UserRoundCheck size={20} />}
            text="Requests"
            active={CurrentPath === "Applications" ? true : false}
          />
        </NavLink>
        <NavLink to={"Report"}>
            <SidebarItem icon={<Flag size={20} />} text="Report" active={ CurrentPath === "Report" ? true : false} />
          </NavLink>
      </Sidebar>
      <Outlet />
    </div>
  );
};

export default AdminDashBoardLayout;
