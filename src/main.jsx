import "./index.css";
import { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from 'react-hot-toast';
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./assets/Component/Error/Error.jsx";
import { logo } from "./assets/Images/Images.jsx";
import Org from "./assets/Component/Org/Org.jsx";
import Details from "./assets/Component/Details/Details.jsx";
import Login from "./assets/Component/Login/Login.jsx";
import Cart from "./assets/Component/Cart/Cart.jsx";


const SignUp = lazy(() => import("./assets/Component/SignUp/SignUp.jsx"));

const setFavicon = (url) => {
  const link = document.createElement("link");
  link.type = "image/png";
  link.rel = "icon";
  link.href = url;
  document.head.appendChild(link);
};

setFavicon(logo);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Org />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <App />
          </Suspense>
        ),
      },
      {
        path: "/signUp",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <SignUp />
          </Suspense>
        ),
      },
      {
        path: "/login",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Login />
          </Suspense>
        ),
      },
      {
        
        path: "/cart",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "/details/:id",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Details />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<><Toaster position="top-center" /><RouterProvider router={appRouter} /></> );
