import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import axios from "axios";
import Result from "./pages/Result.tsx";
import Res from "./pages/Res.tsx";
import MyContext from "./utils/Context.ts";
import LandingPage from "./pages/LandingPage.tsx";
import Navbar from "./components/Navbar.tsx";
import Signup from "./pages/Signup.tsx";
import Login from "./pages/Login.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  const [data, setData] = useState([]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    //   {
    //     path: "/draw",
    //     element: <App />,
    //   },
    {
      path: "/:id",
      element: <Result />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  async function fetchData() {
    const cookies = new Cookies();
    const jwt = cookies.get("jwt");
    console.log(jwt);

    const response = fetch("http://127.0.0.1:8000/api/user/", {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });

    const content = await response;
    const data = await content.json();
    console.log(data);
    setData(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Navbar user={data} />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
