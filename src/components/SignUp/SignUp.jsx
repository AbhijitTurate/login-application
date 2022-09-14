import { TextInput , Button} from "@contentstack/venus-components";
import { useNavigate } from "react-router-dom";
import styles from "./SignUp.module.css"

function SignUp() {
  const navigate = useNavigate();
  return (
    <div className={styles.signUpForm}>
      <TextInput
        maxLength={20}
        placeholder="Enter username..."
        showCharacterCount
        type="text"
        width="medium"
      />
       <TextInput
        maxLength={20}
        placeholder="Enter password..."
        showCharacterCount
        type="text"
        width="medium"
      />
      {/* <input placeholder="Enter username" type="text"></input> <br />
      <input placeholder="Enter password" type="password"></input> <br /> */}
      <Button className={styles.signUpButton} onClick={() => navigate("/login")}>Sign up</Button>
    </div>
  );
}

export default SignUp;
