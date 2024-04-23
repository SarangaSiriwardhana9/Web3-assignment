import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";




export default function App() {
  return (
    <BrowserRouter>

      <Routes>
        
       
        <Route path='/login' element={<Login />} />

        <Route element={<PrivateRoute />}>
        <Route path='/' element={<Home />} />
          </Route>

        
      </Routes>
    </BrowserRouter>

  );
}