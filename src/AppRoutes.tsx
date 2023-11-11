import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";

import AboutPage from "#pages/about";
import HomePage from "#pages/home";
import ProjectsPage from "#pages/projects";
import Layout from "#pages/layout";
import ErrorPage from "#pages/error";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<ErrorPage />} path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="projects" element={<ProjectsPage />} />
    </Route>
  )
);

export default function AppRoutes() {
  return <RouterProvider router={routes} />;
}
