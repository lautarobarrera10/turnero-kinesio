import './App.css';
import { Navbar } from './components/Navbar';
import { Home } from './routes/Home';
import { AgregarPaciente } from './routes/AgregarPaciente';

import { 
  BrowserRouter,
  Routes,
  Route, 
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/agregar-paciente' element={<AgregarPaciente />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
