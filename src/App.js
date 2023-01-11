import * as React from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import { Route, Routes } from "react-router-dom";
import AddStudent from "./pages/AddStudent/AddStudent";
import ManageStudent from "./pages/ManageStudent/ManageStudent";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignUp from "./pages/SignUp/SignUp";
import RequireAuth from "./pages/Login/RequireAuth";
import Edit from "./components/Edit";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/edit"
          element={
            <RequireAuth>
              <Edit />
            </RequireAuth>
          }
        />
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        >
          <Route
            path="/add-student"
            element={
              <RequireAuth>
                <AddStudent />
              </RequireAuth>
            }
          />

          <Route
            path="/manage-student"
            element={
              <RequireAuth>
                <ManageStudent />
              </RequireAuth>
            }
          />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
      </Routes>
      <ToastContainer />
      </div>
  );
}

export default App;
