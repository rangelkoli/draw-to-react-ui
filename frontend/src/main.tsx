import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Result from "./pages/Result.tsx";
import Res from "./pages/Res.tsx";
import MyContext from "./utils/Context.ts";
import LandingPage from "./pages/LandingPage.tsx";
import Navbar from "./components/Navbar.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/draw",
    element: <App />,
  },
  {
    path: "/:id",
    element: <Result />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
  </React.StrictMode>
);
