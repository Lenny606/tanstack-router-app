import "./App.css";
import Navigation from "./components/Navigation";
import { Outlet } from "@tanstack/react-router";

function App() {
  return (
    <div className="app">
      <Navigation />
      <main className="pt-16"> {/* Add padding-top to account for fixed navbar */}
        <Outlet />
      </main>
    </div>
  );
}

export default App;

