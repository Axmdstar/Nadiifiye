
import './App.css'
import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements  } from 'react-router-dom';
import  HomeLayout  from "./Pages/Layout/HomeLayout";
import HomePage from "./Pages/HomePage"



const Router = createBrowserRouter( 
  createRoutesFromElements(
    // Missing errorElement={<>}
    // Loader Function loader={}
    <Route path='/' element={<HomeLayout />} >
      <Route index element={<HomePage />}/>
      {/* <Route path='/aboutus' element={<AboutUsPage />} /> */}

      {/* Dashboard Route  */}
      {/* <Route path='' element={< />} > 
        <Route index element={< />} loader={}/>
        <Route path=':id' element={< />} loader={}/>
      </Route> */}

    </Route>
  ))


function App() {
  return (
    
    <>
      <RouterProvider router={Router} />
    </>
    
  )
}

export default App
