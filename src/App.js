import Topbar from "./components/toolbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./app.css"

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Topbar/>
    <div className="container">
      <Sidebar/>
    <div className="others">other page</div>
      
    </div>
      </header>
    </div>
  );
}

export default App;
