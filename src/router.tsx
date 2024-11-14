import { createBrowserRouter, redirect } from "react-router-dom";

import * as Routes from "./routes";

const router = createBrowserRouter([
  {
    path: "/",
    loader: () => (redirect("/login")),
  },
  {
    path: "/login",
    element: <Routes.LogIn />,
  },
]);

export default router;
