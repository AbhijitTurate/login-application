import logo from "./logo.svg";
import "./App.css";

import AppRouter from "./routing/AppRouter";
import LoginContextProvider from "./context/LoginContext";
import ProjectContextProvider from "./context/ProjectContext";

function App() {
  return (
    <LoginContextProvider>
      <AppRouter>
        <div className="App"></div>
      </AppRouter>
    </LoginContextProvider>
  );
}

export default App;
