import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
// import ResMenu from "./components/ResMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import {Provider} from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const ResMenu = lazy(() => import("./components/ResMenu"));
const AppLayout = () => {
  return (
    <Provider store={appStore}>
    <div className="app">
      <Header/>
      <Outlet/>
    </div>
    </Provider>
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
      },
      {
        path: "/cart",
        element: <Cart/>
      }
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
