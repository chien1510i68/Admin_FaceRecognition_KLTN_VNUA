import { createBrowserRouter } from "react-router-dom";
import CreateQR from "../Page/qr/CreateQR";
import PageQR from "../Page/qr/PageQR";

export const routerPage = createBrowserRouter([
  {
    path: "/qr",
    element: <PageQR />,
    children: [],
  },
  {
    path: "/create-qr",
    element: <CreateQR />,
  },
]);
