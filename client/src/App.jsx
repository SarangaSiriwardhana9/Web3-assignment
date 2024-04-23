/* eslint-disable no-unused-vars */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import UserOnboarding from "./pages/UserOnboarding";
import UserList from "./pages/UserList";
import Header from "./components/Header";



export default function App() {
  return (
    <BrowserRouter>

      <Routes>


        <Route path='/login' element={<Login />} />

        <Route element={<PrivateRoute />}>
         
          <Route path='/' element={<Home />} />
          <Route path='/user-onboarding' element={<UserOnboarding />} />
          <Route path='/user-list' element={<UserList />} />

        </Route>


      </Routes>
    </BrowserRouter>

  );
}