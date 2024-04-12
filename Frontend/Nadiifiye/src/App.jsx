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
import CampainsPage from "./Pages/Campains";

const Router = createBrowserRouter(
  createRoutesFromElements(
    // Missing errorElement={<>}
    // Loader Function loader={}
    <Route path="/" element={<HomeLayout />}>
      <Route index element={<HomePage />} />
      {/* <Route path='/aboutus' element={<AboutUsPage />} /> */}

      {/* Dashboard Route  */}
      {/* No loader or fetch function yet  */}
      <Route path="Admin" element={<AdminDashBoardLayout />}>
        <Route index element={<AdminDashBoard />} />
        <Route path='Organizer' element={< OrganizerPage/>} />
        <Route path='Campaigns' element={<CampainsPage />} />
        {/* <Route path='Volunteers' element={< />} /> */}
        {/* <Route path='Reporting' element={< />} /> */}
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
