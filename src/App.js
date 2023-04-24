
import './App.css';
import Navbar from './component/Navbar';
import '../src/component/navbar.css'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="body">
           <div className="box">
              <h1>Customize Bootstrap Navbar</h1>
              <p>Easy way to change navbar background text and hover link color in bootstrap</p>
           </div>
      </div>
    </div>
  );
}

export default App;
