import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "./Components/Login";
import { Register } from "./Components/Register";
import { Home } from "./Components/Home";
import { ProtectedRoute } from "./Components/ProtectedRoute";

import { AuthProvider } from "./Context/authContext";

function App() {
  return (
    <div className="bg-slate-300 text-black h-screen flex text-white">
      <AuthProvider>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
