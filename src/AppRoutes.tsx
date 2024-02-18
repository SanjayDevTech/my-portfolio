import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";

import Layout from "#pages/layout";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("#pages/home"));
const AboutPage = lazy(() => import("#pages/about"));
const ProjectsPage = lazy(() => import("#pages/projects"));
const ErrorPage = lazy(() => import("#pages/error"));

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
  return (
    <Suspense fallback={<div className="loading-container">
      Loading...
    </div>}>
      <RouterProvider router={routes} />
    </Suspense>
  );
}
