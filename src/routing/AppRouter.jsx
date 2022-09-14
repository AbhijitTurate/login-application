import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../components/Dashboard/Dashboard";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";
import { LoginContext } from "../context/LoginContext";
import ProjectContextProvider from "../context/ProjectContext";
import ProtectedRoute from "./ProtectedRoute";

function AppRouter() {
  const { isLoggedIn } = useContext(LoginContext);
  console.log("isloggedin", isLoggedIn);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="signup" element={<SignUp />} />
          <Route
            path="login"
            element={
              isLoggedIn ? (
                <ProjectContextProvider>
                  <Dashboard />
                </ProjectContextProvider>
              ) : (
                <Login />
              )
            }
          ></Route>
        </Route>

        {/* <Route
          path="/dashboard"
          element={ isLoggedIn?(
            <ProjectContextProvider>
              <Dashboard />
            </ProjectContextProvider>
          ):<Home/>}
        /> */}

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <ProjectContextProvider>
                <Dashboard />
              </ProjectContextProvider>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
export default AppRouter;
