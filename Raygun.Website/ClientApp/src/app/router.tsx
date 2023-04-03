import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "./error";

export const router = createBrowserRouter([
  {
    path: "/app",
    element: <p className={'text-3xl font-bold underline'}>Test</p>,
    errorElement: <ErrorPage />,
  }
]);