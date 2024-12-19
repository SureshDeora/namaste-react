import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
// import ResMenu from "./components/ResMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";

const ResMenu = lazy(() => import("./components/ResMenu"));
const AppLayout = () => {
  return (
    <div className="app">
      <Header/>
      <Outlet/>
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element:<AppLayout/>,   
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Body/>,
      },
      {
        path: "/about",
        element: <About/>, 
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/restaurant/:resId",
        element:  <Suspense fallback={<h1>Loading....</h1>}>
                    <ResMenu/> 
                  </Suspense>
      }
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
