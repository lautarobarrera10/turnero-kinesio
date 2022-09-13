import './App.css';
import { Navbar } from './components/Navbar';
import { Home } from './routes/Home';
import { AgregarPaciente } from './routes/AgregarPaciente';

import { 
  HashRouter,
  Routes,
  Route, 
} from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/agregar-paciente' element={<AgregarPaciente />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
