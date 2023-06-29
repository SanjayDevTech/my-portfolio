import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AboutPage from "#pages/about";
import ErrorPage from "#pages/error";
import HomePage from "#pages/home";
import ProjectsPage from "#pages/projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/projects",
    element: <ProjectsPage />,
  }
]);

export default function AppRoutes() {
  return <RouterProvider router={router} />;
}
