import "./App.css";
import { Router } from "./shared/Router";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <Router />
    </HelmetProvider>
  );
}

export default App;
