import "./App.css";
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import HomeLayout from "./Pages/Layout/HomeLayout";
import HomePage from "./Pages/HomePage";
import AdminDashBoardLayout from "./Pages/Layout/AdminDashBdLayOut";
import AdminDashBoard from "./Pages/AdminDashBoard";
import OrganizerPage from "./Pages/OrganizerPage";
import CampainsPage from "./Pages/CampainsPage";
import VolunteersPage from "./Pages/Volunteers";
import OrganizerDshBLayout from "./Pages/Layout/OrganizerDashBdLayout";
import OrgCampaigns from "./Pages/OrgCampaigns";
import OrgVolunteer from "./Pages/OrgVoluntees";

const Router = createBrowserRouter(
  createRoutesFromElements(
    // Missing errorElement={<>}
    // Loader Function loader={}
    <Route path="/" element={<HomeLayout />}>
      <Route index element={<HomePage />} />
      {/* <Route path='/aboutus' element={<AboutUsPage />} /> */}
{/* {tes foo} */}
      {/* Dashboard Route  */}
      {/* No loader or fetch function yet  */}
      <Route path="Admin" element={<AdminDashBoardLayout />}>
        <Route index element={<AdminDashBoard />} />
        <Route path='Organizer' element={<OrganizerPage />} />
        <Route path='Campaigns' element={<CampainsPage />} />
        <Route path='Volunteers' element={<VolunteersPage />} />
        {/* <Route path='Reporting' element={< />} /> */}
      </Route>

      <Route path="Organizer" element={<OrganizerDshBLayout />}>
        <Route index element={<OrgCampaigns/>} />
        <Route path="Volunteer" element={<OrgVolunteer />} />
      </Route>
      
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={Router} />
    </>
  );
}

export default App;
