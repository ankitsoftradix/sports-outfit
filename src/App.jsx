import Scene from "./components/Scene";
import Sidebar from "./components/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/App.scss";

function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="content">
        <Scene />
      </div>
    </div>
  );
}

export default App;
