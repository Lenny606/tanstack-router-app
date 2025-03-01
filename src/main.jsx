import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

import "./styles.css";
import reportWebVitals from "./reportWebVitals.js";

import App from "./App.jsx";
import About from "./pages/About.jsx";
import ServiceOne from "./pages/services/ServiceOne";
import ServiceTwo from "./pages/services/ServiceTwo";
import ServiceThree from "./pages/services/ServiceThree";

const rootRoute = createRootRoute({
  component: () => (
    <>
    
    
      <Outlet />
      <TanStackRouterDevtools />
      
    
    </>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: App,
});
const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: About,
});

const serviceOneRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/one",
  component: ServiceOne,
});

const serviceTwoRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/two",
  component: ServiceTwo,
});

const serviceThreeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/three",
  component: ServiceThree,
});

const routeTree = rootRoute.addChildren([
  indexRoute, 
  aboutRoute, 
  serviceOneRoute, 
  serviceTwoRoute, 
  serviceThreeRoute
]);

const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  scrollRestoration: true,
  defaultStructuralSharing: true,
});

const rootElement = document.getElementById("app");
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
