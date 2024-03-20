import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TopPage from "./routes/TopPage.tsx";
import MyRecord from "./routes/MyRecord.tsx";
import ColumnPage from "./routes/ColumnPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <TopPage />,
      },
      {
        path: "my-record",
        element: <MyRecord />,
      },
      {
        path: "column-page",
        element: <ColumnPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
