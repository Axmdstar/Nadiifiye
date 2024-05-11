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
import JoinForm from "./Pages/JoinForm";
import Contact from "./Pages/Contact";
import Applicationspage from "./Pages/Applications";
import ViewApplicants from "./Pages/viewapplicants";
import OrgUpdate from "./Pages/OrgUpdate";
import { AuthContext } from "./utility/UserContext";
import Reporting from "./Pages/Report";
import OrgReport from "./Pages/OrgReport";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<HomePage />} />
        <Route path="contact" element={<Contact />} />
        <Route path="campaigns" element={<Campaign />} />
        <Route path="JoinForm/:id" element={<JoinForm />} />
      </Route>

      <Route path="Admin" element={<AdminDashBoardLayout />}>
        <Route index element={<AdminDashBoard />} />
        <Route path="Organizer" element={<OrganizerPage />} />
        <Route path="applications" element={<Applicationspage />} />
        <Route path="Campaigns" element={<CampainsPage />} />
        <Route path="Volunteers" element={<VolunteersPage />} />
        <Route path="updateOrg/:id" element={<OrgUpdate />} />
        <Route path="Applications/viewapplicants/:id" element={<ViewApplicants />} />
        <Route path="Report" element={<Reporting />} />
      </Route>

      <Route path="Organizer" element={<OrganizerDshBLayout />}>
        <Route index element={<OrgCampaigns />} />
        <Route path="Volunteer" element={<OrgVolunteer />} />
        <Route path="Report" element={<OrgReport />} />
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
  return <RouterProvider router={Router} />;
}

export default App;
