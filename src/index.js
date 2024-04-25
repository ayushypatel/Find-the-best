import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './component/dashboard';
import SignUp from './component/SignUp';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
  } from "react-router-dom";
import Login from './component/Login';
import Main from './component/index';

  const router = createBrowserRouter(
    createRoutesFromElements(
    <><Route path="/" element={<Dashboard />}></Route>
      <Route path="/register" element={<SignUp />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/home" element={<Main />}></Route>
    </>
    )
  );

  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );