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
import RegisterLayout from "./Pages/Layout/RegisterLayout";
import Register from "./components/Register";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgetPassword";
import Campaign from "./Pages/Campaign";
import Contact from "./Pages/Contact";
import OrgUpdate from "./Pages/OrgUpdate";

const Router = createBrowserRouter(
  createRoutesFromElements(
    // Missing errorElement={<>}
    // Loader Function loader={}
    <Route path="/">
      <Route path="Home" element={<HomeLayout />}>
        <Route index element={<HomePage />} />
        <Route path="contact" element={<Contact />} />
        <Route path="campaigns" element={<Campaign />} />
      </Route>

      <Route path="Admin" element={<AdminDashBoardLayout />}>
        <Route index element={<AdminDashBoard />} />
        <Route path="Organizer" element={<OrganizerPage />} />
        <Route path="Campaigns" element={<CampainsPage />} />
        <Route path="Volunteers" element={<VolunteersPage />} />
        <Route path="updateOrg/:id" element={<OrgUpdate />} />
      </Route>

      <Route path="Organizer" element={<OrganizerDshBLayout />}>
        <Route index element={<OrgCampaigns />} />
        <Route path="Volunteer" element={<OrgVolunteer />} />
      </Route>

      <Route path="Register" element={<RegisterLayout />}>
        <Route index element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
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
