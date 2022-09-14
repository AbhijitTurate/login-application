import { createContext, useEffect, useState } from "react";

export const projectContext = createContext();
const url = "https://abhijitturate.github.io/Portfolio/utils/projects.json";

console.log("Above project context");
function ProjectContextProvider({children}) {
    console.log("inside project context");
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setProjects([...data]));
  }, []);
  console.log("projects",projects);
  return <projectContext.Provider value={{projects, setProjects}}>
    {children}
  </projectContext.Provider>
}

export default ProjectContextProvider;


// admin->Projects