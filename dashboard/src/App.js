import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./scenes/layout";
import Dashboard from "./scenes/dashboard";
import Dish from "./scenes/product";
import Login from "./scenes/login";
import Offers from "./scenes/offers";
import Feedback from "./scenes/feedback";
import User from "./scenes/user";
import Admin from "./scenes/admin";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import Order from "./scenes/orders";
import ProtectedRoutes from "./protectedRoutes";
import NotFound from "./scenes/404page";
const App = () => {
  const token = useSelector((state) => state?.admin?.token);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        <Route element={<Layout />}>
          <Route element={<ProtectedRoutes token={token} />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dish" element={<Dish />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/order" element={<Order />} />
            <Route path="/user" element={<User />} />
            <Route path="/admin" element={<Admin />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
