import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import UserOnboarding from "./pages/UserOnboarding";
import UserList from "./pages/UserList";
import { SnackbarProvider } from 'notistack';
import PageNotFound from "./pages/PageNotFound";

export default function App() {
  return (
    <BrowserRouter>
      <SnackbarProvider
        maxSnack={1}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path='/' element={<UserOnboarding />} />
            <Route path='/user-list' element={<UserList />} />
          </Route>
          {/* Add Route for PageNotFound */}
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </SnackbarProvider>
    </BrowserRouter>
  );
}
