import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";
import MainRoutes from "./routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <div className="App">
            <MainRoutes />
          </div>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
