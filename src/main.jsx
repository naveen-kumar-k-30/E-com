import "./index.css";
import { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./assets/Component/Error/Error.jsx";
import { logo } from "./assets/Images/Images.jsx";
import Org from "./assets/Component/Org/Org.jsx";
import Details from "./assets/Component/Details/Details.jsx";

const Sign = lazy(() => import("./assets/Component/Sign/Sign.jsx"));

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
          <Suspense fallback={"loading"}>
            <App />
          </Suspense>
        ),
      },
      {
        path: "/sign_in",
        element: (
          <Suspense fallback={"loading"}>
            <Sign />
          </Suspense>
        ),
      },
      {
        path: "/details/:id",
        element: (
          <Suspense fallback={"loading"}>
            <Details />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
