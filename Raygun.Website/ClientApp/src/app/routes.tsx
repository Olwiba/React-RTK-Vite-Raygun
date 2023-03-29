import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "./error";
import { Root } from '../routes/index';

export const router = createBrowserRouter([
  {
    path: "/app",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
]);