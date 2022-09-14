import { Component, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LoginContext } from "../../context/LoginContext";
import ProjectContextProvider, {
  projectContext,
} from "../../context/ProjectContext";

import { Button } from "@contentstack/venus-components";
import styles from "./Dashboard.module.css"

function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation();
  const {isLoggedIn, setIsLoggedIn } = useContext(LoginContext);
  console.log("pathname",location.pathname);
  if(isLoggedIn && location.pathname!=="/dashboard"){
    navigate("/dashboard")
  }
  
 
  const { projects } = useContext(projectContext);
  const logOut = () => {
    setIsLoggedIn(false);
    navigate("/login");
  };
  return (

      <>
        <div className={styles.header}>
          <h1>Dashbaord</h1>
          <Button onClick={logOut}>Logout</Button>
        </div>

        <div className={styles.projectsContainer}>
          {projects ? (
            projects.map((project) => {
              return (
                <div className={styles.projectCard} key={project.title}>
                  <h1>{project.title}</h1>
                  <h5>{project.information}</h5>
                </div>
              );
            })
          ) : (
            <h1>Spinner</h1>
          )}
        </div>
      </>
 
  );
}

// class Dashboard extends Component {
//     constructor(){
//         super();
//     }

//     // const { setIsLoggedIn } = useContext(LoginContext);
//     // const { projects } = useContext(projectContext);
//     //  logOut = () => {
//     //   setIsLoggedIn(false);
//     // };
//     render(){
//         let {isLoggedIn} = this.context.value;
//         console.log("value:",isLoggedIn);
//         return (

//               <>
//                 <h1>Dashbaord page</h1>
//                 {/* <button onClick={this.logOut}>Logout</button> */}
//                 <>
//                   {/* {projects ? (
//                     projects.map((project) => {
//                       return (
//                         <div>
//                           <h1>{project.title}</h1>
//                           <p>{project.information}</p>
//                         </div>
//                       );
//                     })
//                   ) : (
//                     <h1>Spinner</h1>
//                   )} */}
//                 </>
//               </>

//           );
//     }

//   }

//   Dashboard.contextType = projectContext

export default Dashboard;
