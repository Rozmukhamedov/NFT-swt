import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";
import MainRoutes from "./routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <AuthProvider>
            <MainRoutes/>
          </AuthProvider>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
