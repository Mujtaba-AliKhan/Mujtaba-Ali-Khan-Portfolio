import "./App.css";
import StarBackground from "./StarBackground/StarBackground ";
import Aboutme from "./aboutme/aboutme";
import ProjectGallery from "./projectGallery/projectGallery";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./NavBar/navbar";
import Footer from "./footer/footer";
import NotFound from "./notfound/notfound";

const AppLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const myRoutes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <StarBackground />,
      },
      {
        path: "/aboutme",
        element: <Aboutme />,
      },
      {
        path: "/projectGallery",
        element: <ProjectGallery />,
      },
    ],
  },
]);
function App() {
  return (
    <>
      <div className="app">
        <RouterProvider router={myRoutes} />
      </div>
    </>
  );
}

export default App;
