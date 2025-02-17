import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Ecommerce from "../pages/Ecommerce";

const RoutesApp: React.FC = () => {
    return (
        <Routes>
            <Route path= "/home" element = {< Home />} />
            < Route path = "/" element = {< Ecommerce />} />
        </Routes>

  );
};

export default RoutesApp;
