import Topbar from "./components/toolbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./app.css"
import Home from "./pages/home/Home";


function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Topbar/>
    <div className="container">
      <Sidebar/>
    <Home/>
      
    </div>
      </header>
    </div>
  );
}

export default App;
