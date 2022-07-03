import React from "react";
import { BrowserRouter, Navigate, Route, Routes  } from "react-router-dom";
import Home from "./components/Home";

import { Login, SignUp, User } from './pages'


function App() {
  return (

    <BrowserRouter >
      
      <Routes>
             <Route path="/" element={<Home />} />

             <Route path="/User" element={<User />} />

             <Route path="/Login" element={<Login />} />

             <Route path="/SignUp" element={<SignUp />} />

             <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
