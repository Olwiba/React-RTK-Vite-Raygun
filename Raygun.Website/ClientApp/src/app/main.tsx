import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';
import { router } from "./router";
import Base from "../routes/base";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Base>
        <RouterProvider router={router} />
      </Base>
    </Provider>
  </React.StrictMode>,
);