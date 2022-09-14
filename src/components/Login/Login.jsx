import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../context/LoginContext";
import "@contentstack/venus-components/build/main.css";
import { Button, TextInput } from "@contentstack/venus-components";
import styles from "./Login.module.css"

function Login() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const { isLoggedIn,setIsLoggedIn } = useContext(LoginContext);


  function login() {
    console.log("pass:", password);
    if (password !== "password") {
      alert("Your credentials are wrong! try again!");
      return;
    }
    setIsLoggedIn(true);
    navigate("/dashboard");
  }
  return (
    <div className={styles.loginForm}>
      <TextInput
        autoFocus
        canShowPassword={undefined}
        className={undefined}
        disabled={undefined}
        error={undefined}
        id={undefined}
        isReadOnly={undefined}
        maxLength={50}
        onChange={function noRefCheck() {}}
        placeholder="Username..."
        required={true}
        showCharacterCount
        type="text"
        width="medium"
        willBlurOnEsc
      />

      {/* <input placeholder="username" type="text"></input> <br /> */}
      <TextInput
        autoFocus
        canShowPassword={false}
        className={undefined}
        disabled={undefined}
        error={undefined}
        id={undefined}
        isReadOnly={undefined}
        maxLength={50}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password..."
        required={true}
        showCharacterCount
        type="password"
        width="medium"
        willBlurOnEsc
      />
      {/* <input
        placeholder="password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      ></input>{" "} */}
      <br />
      <Button  className={styles.loginButton} onClick={login}>Login</Button>
    </div>
  );
}

export default Login;
