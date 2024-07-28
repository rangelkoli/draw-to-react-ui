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
import Draw from "./Draw.tsx";
import { store } from "./state/store.ts";
import { setUser, removeUser } from "./state/userSlice.ts";
import { Provider } from "react-redux";
import { useDispatch } from "react-redux";
import Profile from "./pages/Profile.tsx";

const App = () => {
  const [data, setData] = useState([]);

  const dispath = useDispatch();
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
    {
      path: "/draw",
      element: <Draw />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
  ]);

  async function fetchData() {
    const cookies = new Cookies();
    const jwt = cookies.get("jwt");
    console.log(jwt);

    if (!jwt) {
      return;
    }

    const response = fetch("http://127.0.0.1:8000/api/user/", {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });

    const content = await response;
    if (content.status === 401) {
      cookies.remove("jwt");
      setData([]);
      store.dispatch(removeUser());
      return;
    }
    const data = await content.json();
    console.log(data);
    setData(data);

    dispath(setUser(data));
    console.log(store.getState());
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
