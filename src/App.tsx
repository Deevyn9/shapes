import { Routes, Route } from 'react-router-dom'
import './App.css';
import Nav from './frontend/Nav';
import CubeComponent from './frontend/CubeComponent';
import CylinderComponent from './frontend/CylinderComponent';
import SphereComponent from './frontend/SphereComponent';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<CubeComponent />} />
        <Route path="/cylinder" element={<CylinderComponent />} />
        <Route path="/sphere" element={<SphereComponent />} />
      </Routes>
    </div>
  );
}

export default App;
