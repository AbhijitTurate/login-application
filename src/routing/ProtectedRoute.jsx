import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { LoginContext } from "../context/LoginContext";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(LoginContext);
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, []);

  return <>
    {children}
  </>
}

export default ProtectedRoute;
