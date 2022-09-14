import { Button, ButtonGroup } from "@contentstack/venus-components";
import { useContext } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { LoginContext } from "../../context/LoginContext";
import styles from "./Home.module.css"

function Home() {
    // const history = createBrowserHistory()
    const navigate = useNavigate();
    // function signUp(){
    //     navigate("/signup")
    // }
    const {isLoggedIn} = useContext(LoginContext)
    if(isLoggedIn){
      navigate("/dashboard")
    }
  return (
    <>
    <div className={styles.signUp}>
      <h3>Don't have an account please signup!</h3>
      <Button onClick={()=> navigate("/signup")}>Sign Up</Button>
    </div>
    <div className={styles.login}>
      <h3>If you already have an account please signup!</h3>
      <Button onClick={()=> navigate("/login")}>Log In</Button>
    </div>
      <Outlet />
    </>
  );
}

export default Home;
